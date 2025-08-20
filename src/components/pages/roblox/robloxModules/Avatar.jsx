import { useGLTF } from '@react-three/drei'

export function Avatar(props) {
    const { scene } = useGLTF('models/Character.glb')

    return (
        <primitive
            object={scene}
            scale={[1, 1, 1]}
            position={[0, 4, 10]}
            {...props}
        />
    )
}

export default Avatar
