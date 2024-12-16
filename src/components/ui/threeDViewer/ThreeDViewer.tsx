"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

interface ThreeDViewerProps {
  modelPaths: { [color: string]: string }; // Mapeo de colores a rutas de modelos 3D
  selectedColor: string; // Color seleccionado
}

const ThreeDViewer: React.FC<ThreeDViewerProps> = ({ modelPaths, selectedColor }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) {
      console.error("Container not found");
      return;
    }

    // Configuración de la escena, cámara y renderizador
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0xd3d3d3); // Fondo gris claro
    container.appendChild(renderer.domElement);

    // Iluminación para colores naturales
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
    scene.add(hemisphereLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.2);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Controles interactivos (rotación y zoom)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.zoomSpeed = 1.2;
    controls.minDistance = 2;
    controls.maxDistance = 10;
    controls.update();

    // Cargar modelo según el color seleccionado
    const loader = new GLTFLoader();
    const modelPath = modelPaths[selectedColor];

    if (!modelPath) {
      console.error(`No model found for color: ${selectedColor}`);
      return;
    }

    loader.load(
      modelPath,
      (gltf) => {
        const model = gltf.scene;

        // Ajustar materiales del modelo
        model.traverse((node) => {
          if (node.isMesh) {
            const material = node.material as THREE.MeshStandardMaterial;
            material.metalness = 0; // Sin reflejos metálicos
            material.roughness = 1; // Superficie mate
          }
        });

        // Centrar el modelo
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);

        model.scale.set(2, 2, 2);
        scene.add(model);
      },
      undefined,
      (error) => {
        console.error("Error loading 3D model:", error);
      }
    );

    camera.position.set(0, 2, 4);

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      renderer.dispose();
      controls.dispose();
      container.removeChild(renderer.domElement);
    };
  }, [selectedColor, modelPaths]);

  return <div ref={mountRef} style={{ width: "100%", height: "500px", background: "#d3d3d3" }} />;
};

export default ThreeDViewer;
