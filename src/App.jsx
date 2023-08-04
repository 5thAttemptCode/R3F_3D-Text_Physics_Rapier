
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Font from './Font'
import { ContactShadows, OrbitControls } from '@react-three/drei'

export default function App( ) {
  return (
    <Canvas camera={{position:[2, 2, 3], fov: 75}}>
      <ContactShadows blur={0.9} opacity={0.2}/>
      <mesh rotation-x={-Math.PI / 2} position-y={-0.1}>
        <planeGeometry args={[5, 5]} />
      </mesh>
      <ambientLight />
      <OrbitControls />
      <Font/>
    </Canvas>
  )
}
