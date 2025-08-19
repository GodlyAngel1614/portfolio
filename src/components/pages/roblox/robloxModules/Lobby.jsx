import * as THREE from 'three';
import {Canvas} from "@react-three/fiber";
import {Plane} from "@react-three/drei";
import { OrbitControls } from '@react-three/drei'
import CutsceneAvatar from './CutsceneAvatar.jsx';
import Stars from "./Stars.jsx";
import nightSky from '../../../../assets/nightSky.gif';

function CreateBox() {
    return (
        <>
            {/* Floor */ }

            <mesh position={[0, -0.5, 0]}>
                <boxGeometry args={[10, 1, 50]} />
                <meshStandardMaterial color={"#000000"} />
            </mesh>

            {/* Left wall */ }

            <Plane args={[50, 20]} rotation={[0, Math.PI / 2, 0]} position={[-5, 5, 0]}>
                <meshStandardMaterial color={"#e5ecf5"} />
            </Plane>
        </>
    )
}

export default function Lobby() {
    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                position: 'fixed',
                top: 0,
                left: 0,
                backgroundImage: `url(${nightSky})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',

            }}
        >
        <Canvas camera={{ position: [0, 4, 25], fov: 60, rotation: [0, 0, 0]}}>
            <CutsceneAvatar />
            <ambientLight color={"#000000"} intensity={0.5}/>
            <directionalLight color={"#ffffff"} intensity={0.5}/>
            <CreateBox />
            <Stars count={500} />
        </Canvas>
        </div>
    )
}