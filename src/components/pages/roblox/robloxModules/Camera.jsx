import { useThree, useFrame } from '@react-three/fiber'
import * as THREE from 'three';

function CameraFollow({ targetRef }) {
    const { camera } = useThree()

    useFrame(() => {
        if (targetRef.current) {
            const target = targetRef.current

            // Calculate the direction the avatar is facing (its forward vector)
            const avatarDirection = new THREE.Vector3(0, 0, -1)
            avatarDirection.applyQuaternion(target.quaternion).normalize()

            const reversedDirection = avatarDirection.clone().negate()

            // Position the camera in front of the avatar based on its rotation
            const cameraOffset = reversedDirection.clone().multiplyScalar(-10) // Move 5 units in front
            cameraOffset.y += 2 // Lift the camera a bit

            const desiredPosition = target.position.clone().add(cameraOffset)
            camera.position.lerp(desiredPosition, 0.05)

            // Make the camera look at the avatar's face
            const lookAtTarget = target.position.clone().add(new THREE.Vector3(0, 1.5, 0))
            camera.lookAt(lookAtTarget)
        }
    })

    return null
}

export default CameraFollow
