import * as THREE from 'three'
import { useMemo, useRef, useCallback, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PointMaterial, Preload } from '@react-three/drei'

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomColor() {
  return new THREE.Color(Math.random(), Math.random(), Math.random());
}

function Particles({ count, position, color, scale }) {
  const defaultColor = new THREE.Color(color)
  const hoverColor = new THREE.Color('hotpink')
  const [positions, colors, scales] = useMemo(() => {
    const positions = [...new Array(count * 3)].map(() => getRandomArbitrary(-3, 3))
    const colors = [...new Array(count)].flatMap(() => defaultColor.toArray())
    const scales = new Float32Array([...new Array(count)].map(() => getRandomArbitrary(0.5, 10) * scale))
    return [new Float32Array(positions), new Float32Array(colors), scales]
  }, [count, defaultColor, scale])

  const points = useRef(null)
  const hover = useCallback((e) => {
    e.stopPropagation()
    hoverColor.toArray(points.current.geometry.attributes.color.array, e.index * 3)
    points.current.geometry.attributes.color.needsUpdate = true
    scales[e.index] *= 2
    points.current.geometry.attributes.scale.needsUpdate = true
  }, [hoverColor, scales])

  const unhover = useCallback((e) => {
    defaultColor.toArray(points.current.geometry.attributes.color.array, e.index * 3)
    points.current.geometry.attributes.color.needsUpdate = true
    scales[e.index] /= 2
    points.current.geometry.attributes.scale.needsUpdate = true
  }, [defaultColor, scales])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    positions.forEach((p, i) => (positions[i] += Math[i % 2 ? 'sin' : 'cos'](1000 * i + t) / 300))
    points.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={points} onPointerOver={hover} onPointerOut={unhover} position={position}>
      <bufferGeometry>
        <bufferAttribute usage={THREE.DynamicDrawUsage} attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute usage={THREE.DynamicDrawUsage} attach="attributes-color" args={[colors, 3]} />
        <bufferAttribute usage={THREE.DynamicDrawUsage} attach="attributes-scale" args={[scales, 1]} />
      </bufferGeometry>
      <PointMaterial transparent vertexColors size={getRandomArbitrary(10, 100)} sizeAttenuation={false} depthWrite={false} toneMapped={false} />
    </points>
  )
}

const ParticlesCanvas = () => {
  const particleSystems = useMemo(() => {
    const systems = []
    for (let i = 0; i < 120; i++) {
      systems.push({
        count: Math.floor(getRandomArbitrary(1, 100)),
        position: [getRandomArbitrary(-50, 50), getRandomArbitrary(-50, 50), getRandomArbitrary(-50, 50)],
        color: getRandomColor(),
        scale: getRandomArbitrary(1, 10)
      })
    }
    return systems
  }, [])

  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas orthographic camera={{ zoom: 40, position: [200, 200, 200] }} raycaster={{ params: { Points: { threshold: 0.2 } } }}>
        <Suspense>
          {particleSystems.map((system, index) => (
            <Particles key={index} count={system.count} position={system.position} color={system.color} scale={system.scale} />
          ))}
          <OrbitControls
            autoRotate
            autoRotateSpeed={0.3}
            enableZoom={false}
          />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  )
}

export default ParticlesCanvas
