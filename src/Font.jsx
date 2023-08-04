import { Center, Text3D } from '@react-three/drei'

export default function Font() {
  return (
    <mesh position-y={0.5} rotation={[-0.5, 0, 0]}>
        <Center>
            <Text3D font="./Poppins_Bold.json">
                HELLO
                <meshStandardMaterial color="blue" />
            </Text3D>
        </Center>
    </mesh>
  )
}
