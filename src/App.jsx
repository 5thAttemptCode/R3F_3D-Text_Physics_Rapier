
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Font from './Font'
import { Box, ContactShadows, Environment, OrbitControls, Plane } from '@react-three/drei'
import { Physics } from '@react-three/rapier'
import { RigidBody } from '@react-three/rapier'


export default function App( ) {
  return (
    <Canvas camera={{position:[1, 8, 4], fov: 55}}> 

      <ambientLight />
      <directionalLight position={[-10, 10, 0]} />
      <Environment preset="city" />

      <spotLight intensity={1} angle={0.2} penumbra={1} position={[30, 30, 30]} castShadow shadow-mapSize={[512, 512]} />
      <OrbitControls />
      <ContactShadows position-y={1} blur={0.9} opacity={1}/>

      <Suspense>
        <Physics>
          <RigidBody type="fixed" restitution={1}>
            <Plane receiveShadow position={[0, 0, 0]} args={[30, 30]} rotation-x={-Math.PI / 2}>
              <meshStandardMaterial color="#592693" roughness={0.4} envMapIntensity={2} />
            </Plane>
          </RigidBody>
          <Font />
        </Physics>
      </Suspense>

    </Canvas>
  )
}
