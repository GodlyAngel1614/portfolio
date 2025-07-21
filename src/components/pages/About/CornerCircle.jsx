import {Html} from "@react-three/drei";
import faceLogo from "../../../assets/faceLogo.png"
export default function CornerCircle() {
    return ( <Html
        position={[0, 0, 0]}
        style={{
            position: 'fixed',
            top: '20px',   // adjust corner
            right: '20px',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            overflow: 'hidden',
            boxShadow: '0 0 10px rgba(0,0,0,0.4)',
            cursor: 'pointer',
            zIndex: 10,
        }}
        transform={false} // this disables camera-follow behavior
    >
        <img
            alt="Circle Icon"
            style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '50%',
            }}
        />
    </Html>
    );
}