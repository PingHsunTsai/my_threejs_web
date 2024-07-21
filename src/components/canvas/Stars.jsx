import { useState, useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = ({ mouse, randomMove }) => {
  const ref = useRef();
  const [positions, setPositions] = useState(() => random.inSphere(new Float32Array(10000), { radius: 2 }));
  
  useFrame((state, delta) => {
    const targetX = randomMove ? randomMove.x : mouse.x * 0.1;
    const targetY = randomMove ? randomMove.y : mouse.y * 0.1;

    // Smoothly interpolate to the target rotation and position
    ref.current.rotation.x += (targetY - ref.current.rotation.x) * delta;
    ref.current.rotation.y += (targetX - ref.current.rotation.y) * delta;

    // Update the position of the points
    ref.current.position.x += (targetX - ref.current.position.x) * delta * 0.5;
    ref.current.position.y += (targetY - ref.current.position.y) * delta * 0.5;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]} position={[0, 0, 0]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};


const StarsCanvas = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [randomMove, setRandomMove] = useState(null);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const randomMovementRef = useRef(null);

  const handleMouseMove = (event) => {
    setIsMouseOver(true);
    setMouse({
      x: (event.clientX / window.innerWidth) * 2 - 1,
      y: -(event.clientY / window.innerHeight) * 2 + 1,
    });
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  useEffect(() => {
    if (!isMouseOver) {
      randomMovementRef.current = setInterval(() => {
        setRandomMove({
          x: (Math.random() - 0.5) * 0.05,
          y: (Math.random() - 0.5) * 0.05,
        });
      }, 3000); // Change random position every second
    } else {
      clearInterval(randomMovementRef.current);
      setRandomMove(null); // Stop random movement when mouse is over
    }

    return () => clearInterval(randomMovementRef.current);
  }, [isMouseOver]);

  return (
    <div
      className='w-full h-auto absolute inset-0 z-[-1]' //z=[-1]
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars mouse={mouse} randomMove={randomMove} />
        </Suspense>
        <Preload all />
      </Canvas>

    </div>
  );
};

export default StarsCanvas;
