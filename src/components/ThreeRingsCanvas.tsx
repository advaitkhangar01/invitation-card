import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export const ThreeRingsCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loadError, setLoadError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check for WebGL support
    let renderer: THREE.WebGLRenderer | null = null;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      setLoadError(true);
      setIsLoading(false);
      return;
    }

    const width = container.clientWidth || 320;
    const height = container.clientHeight || 240;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0.8, 3.8);

    // Warm Studio Lighting for Gold & Diamonds
    const ambientLight = new THREE.AmbientLight(0xfff6ea, 1.8);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffeedd, 2.5);
    keyLight.position.set(2, 4, 3);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xd4af37, 1.8);
    fillLight.position.set(-3, -1, 2);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0xffffff, 3.0, 10);
    rimLight.position.set(0, 2, -2);
    scene.add(rimLight);

    // Group to hold the rings
    const ringGroup = new THREE.Group();
    scene.add(ringGroup);

    // Load both rings
    const loader = new GLTFLoader();
    let loadedCount = 0;

    const onModelLoaded = () => {
      loadedCount++;
      if (loadedCount >= 1) {
        setIsLoading(false);
      }
    };

    // Load Primary Solitaire Ring
    loader.load(
      '/assets/3d/Angel_Ring_Gold.glb',
      (gltf) => {
        const ring1 = gltf.scene;
        ring1.scale.set(0.85, 0.85, 0.85);
        ring1.position.set(-0.35, -0.05, 0);
        ring1.rotation.set(0.35, 0.4, -0.15);
        ringGroup.add(ring1);
        onModelLoaded();
      },
      undefined,
      () => {
        // Fallback if glb fails
        setLoadError(true);
        setIsLoading(false);
      }
    );

    // Load Companion Band
    loader.load(
      '/assets/3d/Bijith_Ring.glb',
      (gltf) => {
        const ring2 = gltf.scene;
        ring2.scale.set(0.75, 0.75, 0.75);
        ring2.position.set(0.35, 0.05, -0.2);
        ring2.rotation.set(0.2, -0.5, 0.25);
        ringGroup.add(ring2);
        onModelLoaded();
      },
      undefined,
      () => {
        // Non-blocking fallback for second ring
      }
    );

    // Interactive Touch & Mouse Dragging
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let targetRotationX = 0;
    let targetRotationY = 0;

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      previousMousePosition = { x: clientX, y: clientY };
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      const deltaX = clientX - previousMousePosition.x;
      const deltaY = clientY - previousMousePosition.y;

      targetRotationY += deltaX * 0.008;
      targetRotationX += deltaY * 0.008;

      previousMousePosition = { x: clientX, y: clientY };
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

    // Resize Handler
    const handleResize = () => {
      if (!container || !renderer) return;
      const w = container.clientWidth || 320;
      const h = container.clientHeight || 240;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isDragging) {
        ringGroup.rotation.y += 0.004; // Gentle auto-rotation
      } else {
        ringGroup.rotation.y += (targetRotationY - ringGroup.rotation.y) * 0.1;
        ringGroup.rotation.x += (targetRotationX - ringGroup.rotation.x) * 0.1;
      }

      if (renderer) {
        renderer.render(scene, camera);
      }
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mouseup', onPointerUp);
      window.removeEventListener('touchend', onPointerUp);
      if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
        renderer.dispose();
      }
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '260px', margin: '8px auto 16px' }}>
      {/* Background Golden Particle Shimmer */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(216, 189, 138, 0.22) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* 3D WebGL Canvas Container */}
      {!loadError && (
        <div
          ref={containerRef}
          style={{
            width: '100%',
            height: '100%',
            cursor: 'grab',
            touchAction: 'none',
          }}
          aria-label="Interactive 3D Gold Wedding Rings"
        />
      )}

      {/* Graceful Fallback if WebGL/Model fails */}
      {loadError && (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <img
            src="/assets/florals/roses2.png"
            alt="Wedding Rings Emblem"
            style={{
              width: '160px',
              height: 'auto',
              filter: 'drop-shadow(0 10px 20px rgba(35, 59, 50, 0.2))',
            }}
          />
        </div>
      )}

      {/* Loading Indicator */}
      {isLoading && !loadError && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            color: 'var(--color-gold-deep)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            pointerEvents: 'none',
          }}
        >
          Loading 3D Rings...
        </div>
      )}

      {/* Interactive Micro-Cue */}
      <p
        style={{
          textAlign: 'center',
          fontFamily: 'var(--font-body)',
          fontSize: '0.6875rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--color-ink-muted)',
          marginTop: '-6px',
        }}
      >
        ✦ Interactive 3D Rings • Touch & Drag to Inspect ✦
      </p>
    </div>
  );
};
