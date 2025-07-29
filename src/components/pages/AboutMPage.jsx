import {motion} from "framer-motion";
import './About.scss'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {useEffect, useState} from "react";
import { useAnimate, usePresence } from "framer-motion"
import randomText from "./Datatables/Thoughts.jsx";
import {data} from "framer-motion/m";


function onClick() {

}

function onHover() {

}

const Thought = ({ children }) => {
    const [position, setPosition] = useState({x: 0, y: 0, z: 0});
    const [randomThought, setRandomThought] = useState("")
    const data = randomText();

    useEffect(() => {
        const interval = setInterval(() => {
            const randomItem = data[Math.floor(Math.random() * data.length)].text;
            setRandomThought(randomItem);
        }, 2000)
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setPosition({
                x: Math.floor((Math.random() - 0.5) * 1500),
                y: Math.floor((Math.random() - 2) * 100),
            })
        }, 400)
        return () => clearInterval(interval);
    }, []);

    return (
        <>

            <motion.div
                className="thought"
                animate={{
                    x: position.x,
                    y: position.y,
                    opacity: [0.2, 1, 0.5, 0.2, 0.4],
                }}
                transition={{
                    duration: 0.6,
                    ease: [0.4, 0, 0.3, 1],
                }}
            >
                {randomThought}
            </motion.div>

            <div onScroll={onHover} style={{ overflow: "hidden" }}>
                <h2> my name is silvanus </h2>
                <h1> my name is silvanus </h1>
                <h1> my name is silvanus </h1>
                <h1> my name is silvanus </h1>
                <h1> my name is silvanus </h1>
                <h1> my name is silvanus </h1>
            </div>
        </>
    );
};

function AboutMain() {
    return (
        <div className="about-second-half">

            <div className={"smoke-bg"}>


            </div>

            <Thought />
            <Thought />

            <Thought />
            <Thought />
            <Thought />
            <Thought />
        </div>
    )
}


export default AboutMain;