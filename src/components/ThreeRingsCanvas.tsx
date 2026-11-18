import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const ThreeRingsCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    // Detect WebGL capability
    const testGl = canvas.getContext('webgl2') || canvas.getContext('webgl');
    if (!testGl) {
      setHasWebGL(false);
      return;
    }

    let isDisposed = false;
    let animationFrameId: number;

    // Dimensions
    const getDims = () => {
      const w = Math.min(container.clientWidth || 320, 360);
      const h = Math.round(w * 0.62); // 1.618 golden aspect
      return { w: Math.max(w, 240), h: Math.max(h, 150) };
    };

    let { w, h } = getDims();

    // Scene & Perspective Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, w / h, 0.1, 100);
    camera.position.set(0, 3.4, 7.8);
    camera.lookAt(0, -0.12, 0);

    // High-performance WebGL Renderer
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
      renderer.setSize(w, h, false);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.08;
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    } catch {
      setHasWebGL(false);
      return;
    }

    // High-Contrast Jewellery Studio Environment Cubemap
    // Metallic gold requires high-contrast softbox gradients and dark flags for realistic reflections
    const envScene = new THREE.Scene();
    envScene.background = new THREE.Color(0x181410);

    const topLight = new THREE.Mesh(
      new THREE.PlaneGeometry(14, 14),
      new THREE.MeshBasicMaterial({ color: 0xffffff })
    );
    topLight.position.set(0, 8, 0);
    topLight.rotation.x = Math.PI / 2;
    envScene.add(topLight);

    const keySoftbox = new THREE.Mesh(
      new THREE.PlaneGeometry(8, 14),
      new THREE.MeshBasicMaterial({ color: 0xfff6ec })
    );
    keySoftbox.position.set(6, 4, 7);
    keySoftbox.lookAt(0, 0, 0);
    envScene.add(keySoftbox);

    const fillSoftbox = new THREE.Mesh(
      new THREE.PlaneGeometry(8, 12),
      new THREE.MeshBasicMaterial({ color: 0xf5dca3 })
    );
    fillSoftbox.position.set(-7, 3, 6);
    fillSoftbox.lookAt(0, 0, 0);
    envScene.add(fillSoftbox);

    const blackFlag = new THREE.Mesh(
      new THREE.PlaneGeometry(6, 14),
      new THREE.MeshBasicMaterial({ color: 0x050403 })
    );
    blackFlag.position.set(0, 0, 8);
    blackFlag.lookAt(0, 0, 0);
    envScene.add(blackFlag);

    const floorBounce = new THREE.Mesh(
      new THREE.PlaneGeometry(16, 16),
      new THREE.MeshBasicMaterial({ color: 0xfaf6ef })
    );
    floorBounce.position.set(0, -5, 0);
    floorBounce.rotation.x = -Math.PI / 2;
    envScene.add(floorBounce);

    const pmremGen = new THREE.PMREMGenerator(renderer);
    const envTexture = pmremGen.fromScene(envScene, 0.04).texture;
    pmremGen.dispose();
    scene.environment = envTexture;

    // Direct Lighting
    const ambientLight = new THREE.AmbientLight(0xfff5ea, 0.55);
    scene.add(ambientLight);

    const mainKey = new THREE.DirectionalLight(0xfff6eb, 2.4);
    mainKey.position.set(4, 8, 5);
    mainKey.castShadow = true;
    mainKey.shadow.mapSize.width = 1024;
    mainKey.shadow.mapSize.height = 1024;
    mainKey.shadow.bias = -0.0003;
    mainKey.shadow.radius = 3;
    scene.add(mainKey);

    const warmRim = new THREE.DirectionalLight(0xf2ddb6, 1.25);
    warmRim.position.set(-6, 4, -4);
    scene.add(warmRim);

    // Realistic Contact AO Shadow Decal on Card Surface
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 512;
    shadowCanvas.height = 256;
    const sCtx = shadowCanvas.getContext('2d');
    if (sCtx) {
      // Left ring contact shadow
      const g1 = sCtx.createRadialGradient(185, 145, 6, 185, 145, 88);
      g1.addColorStop(0, 'rgba(45, 30, 12, 0.44)');
      g1.addColorStop(0.35, 'rgba(65, 45, 18, 0.20)');
      g1.addColorStop(0.75, 'rgba(90, 65, 28, 0.06)');
      g1.addColorStop(1, 'rgba(0, 0, 0, 0)');
      sCtx.fillStyle = g1;
      sCtx.beginPath();
      sCtx.ellipse(185, 145, 88, 38, -0.15, 0, Math.PI * 2);
      sCtx.fill();

      // Right ring contact shadow
      const g2 = sCtx.createRadialGradient(325, 142, 6, 325, 142, 84);
      g2.addColorStop(0, 'rgba(45, 30, 12, 0.42)');
      g2.addColorStop(0.35, 'rgba(65, 45, 18, 0.18)');
      g2.addColorStop(0.75, 'rgba(90, 65, 28, 0.05)');
      g2.addColorStop(1, 'rgba(0, 0, 0, 0)');
      sCtx.fillStyle = g2;
      sCtx.beginPath();
      sCtx.ellipse(325, 142, 84, 35, 0.18, 0, Math.PI * 2);
      sCtx.fill();
    }

    const contactTex = new THREE.CanvasTexture(shadowCanvas);
    const contactMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(6.6, 3.3),
      new THREE.MeshBasicMaterial({ map: contactTex, transparent: true, depthWrite: false })
    );
    contactMesh.rotation.x = -Math.PI / 2;
    contactMesh.position.set(0, -1.02, 0.22);
    scene.add(contactMesh);

    // 18K Luxury Warm Yellow Gold PBR Physical Materials
    const goldMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0xd9b366),
      emissive: new THREE.Color(0x181104),
      metalness: 0.98,
      roughness: 0.11,
      clearcoat: 0.18,
      clearcoatRoughness: 0.07,
      reflectivity: 0.9,
      envMapIntensity: 1.6,
    });

    const bridalGoldMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0xdeb872),
      emissive: new THREE.Color(0x191205),
      metalness: 0.98,
      roughness: 0.09,
      clearcoat: 0.22,
      clearcoatRoughness: 0.06,
      reflectivity: 0.92,
      envMapIntensity: 1.65,
    });

    // Function to generate continuous, physically valid D-shaped comfort-fit court profiles
    function createCourtProfileRing(ringRadius: number, bandWidth: number, thickness: number, radialSeg = 160) {
      const pts: THREE.Vector2[] = [];
      const hw = bandWidth / 2;
      const steps = 14;
      // Outer domed curvature
      for (let i = 0; i <= steps; i++) {
        const a = (i / steps) * Math.PI - Math.PI / 2;
        const x = Math.cos(a) * thickness;
        const y = Math.sin(a) * hw;
        pts.push(new THREE.Vector2(ringRadius + x, y));
      }
      // Inner comfort-fit soft curve (gentle concave curvature)
      for (let i = steps; i >= 0; i--) {
        const a = (i / steps) * Math.PI - Math.PI / 2;
        const x = Math.cos(a) * (thickness * 0.28);
        const y = Math.sin(a) * (hw * 0.85);
        pts.push(new THREE.Vector2(ringRadius - x, y));
      }
      return new THREE.LatheGeometry(pts, radialSeg);
    }

    const ringsRoot = new THREE.Group();

    // 1. Groom's Band (Left ring: 5.0mm proportion, classic comfort-fit court band)
    const groomGeo = createCourtProfileRing(1.35, 0.48, 0.22, 160);
    const groomRing = new THREE.Mesh(groomGeo, goldMaterial);
    groomRing.castShadow = true;
    groomRing.receiveShadow = true;
    groomRing.position.set(-0.72, -0.05, -0.18);
    groomRing.rotation.set(0.64, -0.36, 0.20);
    ringsRoot.add(groomRing);

    // 2. Bride's Band (Right ring: 3.6mm proportion, resting propped against Groom's band with zero collision)
    const brideGeo = createCourtProfileRing(1.26, 0.36, 0.18, 160);
    const brideRing = new THREE.Mesh(brideGeo, bridalGoldMaterial);
    brideRing.castShadow = true;
    brideRing.receiveShadow = true;
    brideRing.position.set(0.68, -0.12, 0.18);
    brideRing.rotation.set(0.50, 0.40, -0.24);
    ringsRoot.add(brideRing);

    scene.add(ringsRoot);

    // Responsive Resize Handler
    const handleResize = () => {
      if (isDisposed || !container) return;
      const dims = getDims();
      w = dims.w;
      h = dims.h;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Interactive Restrained Micro-Tilt (Subtle response to cursor/touch; no continuous spinning)
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      mouseX = (e.clientX - cx) / (rect.width / 2);
      mouseY = (e.clientY - cy) / (rect.height / 2);
      targetRotX = mouseY * 0.05; // max ±3 degrees
      targetRotY = mouseX * 0.06;
    };

    const handlePointerLeave = () => {
      targetRotX = 0;
      targetRotY = 0;
    };

    container.addEventListener('pointermove', handlePointerMove);
    container.addEventListener('pointerleave', handlePointerLeave);

    // Render Loop with Smooth Damped Settle
    const animate = () => {
      if (isDisposed) return;
      animationFrameId = requestAnimationFrame(animate);

      // Smooth lerp to target rotation
      ringsRoot.rotation.x += (targetRotX - ringsRoot.rotation.x) * 0.06;
      ringsRoot.rotation.y += (targetRotY - ringsRoot.rotation.y) * 0.06;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      isDisposed = true;
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerleave', handlePointerLeave);

      // Clean disposal of WebGL resources
      groomGeo.dispose();
      brideGeo.dispose();
      goldMaterial.dispose();
      bridalGoldMaterial.dispose();
      contactTex.dispose();
      envTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="scene-block reveal"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '360px',
        margin: '6px auto 14px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
      aria-label="Two interlocking 18K gold wedding bands in physically based 3D"
    >
      {hasWebGL ? (
        <canvas
          ref={canvasRef}
          style={{
            display: 'block',
            width: '100%',
            maxWidth: '360px',
            aspectRatio: '1.618 / 1',
            touchAction: 'none',
            userSelect: 'none',
          }}
        />
      ) : (
        /* Graceful high-fidelity static fallback if WebGL is unavailable */
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '360px',
            aspectRatio: '1.618 / 1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src="/assets/3d/wedding_rings_gold_3d.png"
            alt="Two 18K gold wedding bands"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      )}
    </div>
  );
};
