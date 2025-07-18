import ThreeBox from '../ThreeBox.jsx'

function Godot() {
    console.log("Godot component loaded")

    return (
        <div className={"Godot"} style={{width: "100%", height: "100%"}}>
            <ThreeBox />
        </div>
    );
}

export default Godot;