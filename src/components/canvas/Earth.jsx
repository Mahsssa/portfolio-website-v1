import { Suspense, useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, meshBounds } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = ({ isMobile }) => {
  const earth = useGLTF("./planet/HumanPlanet_low_res.glb");

  return (
    <primitive
      object={earth.scene}
      scale={isMobile ? 0.3 : 0.31}
      position-y={0}
      rotation-y={35}
    />
  );
};

const Light = () => {
  const lightPositionPositive = [1, 0, 0];
  const lightPositionNegetive = [-1, 0, 0];

  return (
    <>
      <hemisphereLight intensity={1} groundColor="black" />
      {/* Directional Light */}
      <directionalLight
        position={lightPositionPositive}
        color="white"
        intensity={0.5}
      />

      <directionalLight
        position={lightPositionNegetive}
        color="white"
        intensity={0.5}
      />

      {/* Hemisphere Light */}
      <hemisphereLight skyColor="blue" groundColor="grey" intensity={0.8} />

      {/* Ambient Light */}
      <ambientLight color="white" intensity={0.4} />
    </>
  );
};

const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-3.5, 3.5, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2.4}
          minPolarAngle={Math.PI / 2.4}
        />
        <Light />
        <Earth isMobile={isMobile} />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
