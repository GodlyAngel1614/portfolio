import {Html} from "@react-three/drei";
import faceLogo from "../../../assets/faceLogo.png"



export default function CornerCircle() {
    return (
        <Html
            position={[-6.5, 4.2, -4.9]}
            transform={false}
            occlude={true}
        >
            <div
                style={{
                    backgroundColor: 'white',
                    borderRadius: 4,
                    width: "10rem",
                    height: "10rem",
                    boxShadow: "5rem 5rem 2px #000000",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "2rem",
                    cursor: "pointer",
                    opacity: 0.5,
            }}

            >
                <h1 style={{ textAlign: 'center', fontSize: 15, fontWeight: 'bold' }}>
                   Welcome to the glitch cade!
                </h1>
            </div>


    </Html>
    );
}