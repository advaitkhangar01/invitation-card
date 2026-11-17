import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const ThreeRingsCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer | null = null;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      return;
    }

    const width = container.clientWidth || 340;
    const height = container.clientHeight || 280;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    // Camera positioned to view both rings completely without clipping
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0.25, 4.2);

    // Create a dynamic high-end CubeTexture Environment Map for hyper-realistic metallic gold & diamond reflections
    const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256, {
      generateMipmaps: true,
      minFilter: THREE.LinearMipmapLinearFilter,
      magFilter: THREE.LinearFilter,
    });
    const cubeCamera = new THREE.CubeCamera(0.1, 10, cubeRenderTarget);
    scene.add(cubeCamera);

    // Dynamic Environment Sphere (Warm studio softboxes & champagne gold gradients)
    const envGeo = new THREE.SphereGeometry(8, 32, 16);
    const envMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      uniforms: {
        topColor: { value: new THREE.Color(0xfff5e6) }, // Soft warm ivory
        midColor: { value: new THREE.Color(0xe0b970) }, // Rich antique gold
        bottomColor: { value: new THREE.Color(0x1a3127) }, // Deep royal forest green
      },
      vertexShader: `
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 topColor;
        uniform vec3 midColor;
        uniform vec3 bottomColor;
        varying vec3 vWorldPosition;
        void main() {
          float h = normalize(vWorldPosition).y;
          vec3 col = mix(midColor, topColor, max(h, 0.0));
          col = mix(col, bottomColor, max(-h, 0.0));
          gl_FragColor = vec4(col, 1.0);
        }
      `,
    });
    const envMesh = new THREE.Mesh(envGeo, envMat);
    scene.add(envMesh);

    // Update cube camera once to capture the environment
    cubeCamera.update(renderer, scene);
    scene.remove(envMesh); // Remove the background mesh so scene remains transparent

    const envMap = cubeRenderTarget.texture;
    scene.environment = envMap;

    // Studio Lights
    const ambientLight = new THREE.AmbientLight(0xfff6ea, 2.0);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffeedd, 3.0);
    keyLight.position.set(3, 5, 4);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xd4af37, 2.2);
    fillLight.position.set(-4, -1, 3);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0xffffff, 4.0, 10);
    rimLight.position.set(0, 3, -3);
    scene.add(rimLight);

    // Diamond Sparkle Light
    const diamondLight = new THREE.PointLight(0xffffff, 3.5, 6);
    diamondLight.position.set(0.4, 0.8, 1.2);
    scene.add(diamondLight);

    // Materials
    const goldMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0xEDB85A), // 24K Royal Indian Gold
      metalness: 0.98,
      roughness: 0.12,
      clearcoat: 0.8,
      clearcoatRoughness: 0.1,
      reflectivity: 1.0,
      envMap: envMap,
      envMapIntensity: 1.8,
    });

    const diamondMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0xFFFFFF),
      metalness: 0.02,
      roughness: 0.03,
      transmission: 0.95,
      ior: 2.417, // Natural diamond refractive index
      thickness: 1.6,
      transparent: true,
      opacity: 0.98,
      envMap: envMap,
      envMapIntensity: 2.5,
    });

    // Root Group
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // 1. Groom's Ring (Ashish) - Broad Comfort-Fit Royal Gold Wedding Band
    const bandGroup = new THREE.Group();
    const bandGeo = new THREE.TorusGeometry(0.72, 0.11, 32, 100);
    const bandMesh = new THREE.Mesh(bandGeo, goldMaterial);
    bandGroup.add(bandMesh);

    // Inner bevel rim
    const innerRimGeo = new THREE.TorusGeometry(0.72, 0.035, 16, 80);
    const innerRimMesh = new THREE.Mesh(innerRimGeo, goldMaterial);
    innerRimMesh.scale.set(0.96, 0.96, 1.6);
    bandGroup.add(innerRimMesh);

    bandGroup.position.set(-0.38, 0, -0.15);
    bandGroup.rotation.set(0.35, 0.45, -0.2);
    masterGroup.add(bandGroup);

    // 2. Bride's Ring (Isha) - Royal Solitaire Engagement Ring with Brilliant Cut Diamond
    const solitaireGroup = new THREE.Group();
    const solitaireBandGeo = new THREE.TorusGeometry(0.68, 0.09, 32, 100);
    const solitaireBandMesh = new THREE.Mesh(solitaireBandGeo, goldMaterial);
    solitaireGroup.add(solitaireBandMesh);

    // Diamond Crown & Prongs Setting at Top
    const settingGroup = new THREE.Group();
    settingGroup.position.set(0, 0.69, 0);

    // 4 Gold Prongs
    const prongGeo = new THREE.CylinderGeometry(0.025, 0.03, 0.22, 12);
    for (let i = 0; i < 4; i++) {
      const angle = (i * Math.PI) / 2 + Math.PI / 4;
      const prong = new THREE.Mesh(prongGeo, goldMaterial);
      prong.position.set(Math.cos(angle) * 0.13, 0.08, Math.sin(angle) * 0.13);
      prong.rotation.z = -Math.cos(angle) * 0.25;
      prong.rotation.x = Math.sin(angle) * 0.25;
      settingGroup.add(prong);
    }

    // Base collar ring of setting
    const collarGeo = new THREE.TorusGeometry(0.12, 0.025, 12, 32);
    const collar = new THREE.Mesh(collarGeo, goldMaterial);
    collar.rotation.x = Math.PI / 2;
    collar.position.y = 0.02;
    settingGroup.add(collar);

    // Brilliant Cut Solitaire Diamond (Faceted Cone + Hexagonal Crown)
    const diamondGroup = new THREE.Group();
    const diamondCrownGeo = new THREE.CylinderGeometry(0.19, 0.23, 0.1, 16);
    const diamondCrown = new THREE.Mesh(diamondCrownGeo, diamondMaterial);
    diamondCrown.position.y = 0.12;
    diamondGroup.add(diamondCrown);

    const diamondPavilionGeo = new THREE.ConeGeometry(0.23, 0.22, 16);
    const diamondPavilion = new THREE.Mesh(diamondPavilionGeo, diamondMaterial);
    diamondPavilion.rotation.x = Math.PI;
    diamondPavilion.position.y = 0.01;
    diamondGroup.add(diamondPavilion);

    // Brilliant Table facet top
    const diamondTableGeo = new THREE.CylinderGeometry(0.12, 0.19, 0.04, 16);
    const diamondTable = new THREE.Mesh(diamondTableGeo, diamondMaterial);
    diamondTable.position.y = 0.17;
    diamondGroup.add(diamondTable);

    settingGroup.add(diamondGroup);
    solitaireGroup.add(settingGroup);

    solitaireGroup.position.set(0.38, 0.05, 0.12);
    solitaireGroup.rotation.set(-0.25, -0.4, 0.28);
    masterGroup.add(solitaireGroup);

    // 3. Stardust Particle Swarm (Golden Floating Sparkles)
    const particleCount = 45;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const radius = 1.2 + Math.random() * 1.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;

      particlePositions[i * 3] = radius * Math.cos(theta) * Math.cos(phi);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi);
      particlePositions[i * 3 + 2] = radius * Math.sin(theta) * Math.cos(phi);
      particleSpeeds[i] = 0.2 + Math.random() * 0.5;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    // Particle sprite
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, 'rgba(255, 245, 200, 1.0)');
      grad.addColorStop(0.3, 'rgba(216, 189, 138, 0.8)');
      grad.addColorStop(1, 'rgba(216, 189, 138, 0.0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 32, 32);
    }
    const particleTex = new THREE.CanvasTexture(canvas);

    const particleMat = new THREE.PointsMaterial({
      size: 0.12,
      map: particleTex,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    setIsReady(true);

    // Interactive Touch & Drag Orbit Controls
    let isDragging = false;
    let prevPointer = { x: 0, y: 0 };
    let targetRotationX = 0;
    let targetRotationY = 0;

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      prevPointer = { x: clientX, y: clientY };
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      const deltaX = clientX - prevPointer.x;
      const deltaY = clientY - prevPointer.y;

      targetRotationY += deltaX * 0.009;
      targetRotationX += deltaY * 0.009;

      prevPointer = { x: clientX, y: clientY };
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    const dom = renderer.domElement;
    dom.addEventListener('mousedown', onPointerDown);
    dom.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);

    dom.addEventListener('touchstart', onPointerDown, { passive: true });
    dom.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);

    const handleResize = () => {
      if (!container || !renderer) return;
      const w = container.clientWidth || 340;
      const h = container.clientHeight || 280;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop with Smooth Levitation & Sparkle Orbit
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Gentle vertical floating levitation
      masterGroup.position.y = Math.sin(elapsed * 1.5) * 0.06;

      if (!isDragging) {
        masterGroup.rotation.y += 0.005; // Slow ambient rotation
      } else {
        masterGroup.rotation.y += (targetRotationY - masterGroup.rotation.y) * 0.12;
        masterGroup.rotation.x += (targetRotationX - masterGroup.rotation.x) * 0.12;
      }

      // Rotate stardust particles in opposite direction
      particles.rotation.y = -elapsed * 0.05;
      particles.rotation.x = Math.sin(elapsed * 0.4) * 0.08;

      // Orbit diamond light for specular facets
      diamondLight.position.x = Math.sin(elapsed * 2) * 1.5;
      diamondLight.position.z = Math.cos(elapsed * 2) * 1.5;

      if (renderer) {
        renderer.render(scene, camera);
      }
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mouseup', onPointerUp);
      window.removeEventListener('touchend', onPointerUp);
      if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
        renderer.dispose();
      }
      cubeRenderTarget.dispose();
      goldMaterial.dispose();
      diamondMaterial.dispose();
      particleMat.dispose();
      particleTex.dispose();
    };
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '290px',
        margin: '6px auto 12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      aria-label="Interactive 3D Royal Gold and Solitaire Diamond Rings"
    >
      {/* Radiant Golden Glow Aura */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '230px',
          height: '230px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(216, 189, 138, 0.28) 0%, rgba(185, 154, 98, 0.1) 45%, transparent 75%)',
          pointerEvents: 'none',
          animation: 'pulseGlow 4s infinite ease-in-out',
        }}
      />

      {/* 3D WebGL Canvas */}
      <div
        ref={containerRef}
        style={{
          width: '100%',
          height: '100%',
          cursor: 'grab',
          touchAction: 'none',
          opacity: isReady ? 1 : 0,
          transition: 'opacity 0.6s ease',
        }}
      />

      {/* Touch & Drag Micro-Instruction */}
      <p
        style={{
          position: 'absolute',
          bottom: '2px',
          textAlign: 'center',
          fontFamily: 'var(--font-body)',
          fontSize: '0.6875rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--color-gold-deep)',
          fontWeight: 600,
          pointerEvents: 'none',
          textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)',
        }}
      >
        ✦ 3D Royal Rings • Drag to Rotate &amp; Inspect ✦
      </p>
    </div>
  );
};
