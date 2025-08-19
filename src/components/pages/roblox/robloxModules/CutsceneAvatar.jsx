import {useEffect, useRef, useState} from "react"
import { useFrame } from "@react-three/fiber"
import { Avatar } from "./Avatar.jsx"
import CameraFollow from "./Camera.jsx"
import * as THREE from 'three';
import Orb from "./NavigationOrb.jsx";

function CutsceneAvatar() {
    const avatarRef = useRef()
    const [step, setStep] = useState(0)

    useEffect(() => {
        if (avatarRef.current) {
            avatarRef.current.position.set(0, 2, 20)
            avatarRef.current.rotation.set(0, 0, 0)
        }
    }, [])

    useFrame(() => {
        if (step === 0 && avatarRef.current) {
            // Walk forward along the z-axis
            avatarRef.current.position.z -= 0.05

            // Stop walking when z reaches 20
            if (avatarRef.current.position.z <= 0) {
                setStep(1)
            }
        }

        if (step === 1 && avatarRef.current) {
            avatarRef.current.rotation.y -= 0.05

            if (avatarRef.current.rotation.y <= THREE.MathUtils.degToRad(-92.5)) {
             setStep(2)
            }
        }
        if (step === 2 && avatarRef.current) {
            let leftDone = false
            let rightDone = false

            avatarRef.current.traverse(child => {
                if (child.isMesh) {
                    const targetRotation = -Math.PI / 2;

                    if (child.name === "Left_Arm") {
                        child.rotation.x = THREE.MathUtils.lerp(child.rotation.x, targetRotation, 0.1)
                        if (Math.abs(child.rotation.x - targetRotation) < 0.01) {
                            leftDone = true
                            child.rotation.set(100, 0, 0)
                        }
                    }

                    if (child.name === "Right_Arm") {
                        child.rotation.x = THREE.MathUtils.lerp(child.rotation.x, targetRotation, 0.1)
                        if (Math.abs(child.rotation.x - targetRotation) < 0.01) {
                            child.rotation.set(100, 0, 0)
                            rightDone = true
                        }
                    }
                }
            });

            if (leftDone && rightDone) {
                setStep(3);
            }
        }
    })

    return (
        <>
            <Avatar ref={avatarRef} />
            <CameraFollow targetRef={avatarRef} />

            {step >= 3 && <Orb />}
        </>
    )
}

export default CutsceneAvatar