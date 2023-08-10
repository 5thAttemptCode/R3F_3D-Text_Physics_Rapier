import { Center, Text3D } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export default function Font() {
  return (
    <>
      <RigidBody position={[-3, 4, 1]} rotation={[-2, 0, 0]}>
        <Text3D font="./Pricedown_Regular.json"
          curveSegments={ 1 }
          bevelEnabled
          bevelThickness={ 0.1 }
          bevelSize={ 0.1 }
          bevelOffset={ 0 }
          bevelSegments={ 1 }
          size={2}
        >
            WASTED
            <meshStandardMaterial color="#141414" roughness={0} envMapIntensity={2} />
        </Text3D>
      </RigidBody>
    </>

  )
}
