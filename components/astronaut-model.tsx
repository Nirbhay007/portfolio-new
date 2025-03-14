"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { gsap } from 'gsap';

const AstronautModel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const astronautRef = useRef<THREE.Object3D | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup
    const container = containerRef.current;
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45, 
      container.clientWidth / container.clientHeight, 
      0.1, 
      1000
    );
    camera.position.z = 5;
    camera.position.y = 1;
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const blueLight = new THREE.PointLight(0x3498db, 2, 10);
    blueLight.position.set(-2, 1, 3);
    scene.add(blueLight);

    const purpleLight = new THREE.PointLight(0x9b59b6, 2, 10);
    purpleLight.position.set(2, -1, 3);
    scene.add(purpleLight);

    // Load astronaut model
    const loader = new GLTFLoader();
    
    // Using a placeholder URL - replace with actual model URL
    loader.load(
      'https://threejs.org/examples/models/gltf/Astronaut.glb',
      (gltf) => {
        const astronaut = gltf.scene;
        astronaut.scale.set(1, 1, 1);
        astronaut.position.y = 0;
        scene.add(astronaut);
        astronautRef.current = astronaut;

        // Animation
        gsap.to(astronaut.rotation, {
          y: Math.PI * 2,
          duration: 20,
          repeat: -1,
          ease: "none"
        });

        gsap.to(astronaut.position, {
          y: "+=0.2",
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut"
        });
      },
      undefined,
      (error) => {
        console.error('An error occurred loading the model:', error);
      }
    );

    // Handle resize
    const handleResize = () => {
      if (!container || !camera || !renderer) return;
      
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Mouse movement for interactive rotation
    const handleMouseMove = (event: MouseEvent) => {
      if (!astronautRef.current) return;
      
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      
      gsap.to(astronautRef.current.rotation, {
        x: mouseY * 0.3,
        z: mouseX * 0.3,
        duration: 1,
        ease: "power2.out"
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      
      if (rendererRef.current && rendererRef.current.domElement && container) {
        container.removeChild(rendererRef.current.domElement);
      }
      
      if (astronautRef.current) {
        sceneRef.current?.remove(astronautRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-[400px] md:h-[500px] relative"
      style={{ perspective: '1000px' }}
    />
  );
};

export default AstronautModel;