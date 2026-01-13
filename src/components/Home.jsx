import React from 'react';
import {motion} from "framer-motion";
import "./pages/css/Home.css"
import {Link} from "react-router-dom"
import robloxLogo from "../assets/robloxLogo.png"
import godotLogo from "../assets/godotLogo.png"
import discordLogo from "../assets/discordLogo.png"

const MotionLink = motion.create(Link)

function hostLinks() {
    const links = [
        {id: 1, Name: "Roblox", img: robloxLogo, link: "/roblox"},
       // {id: 2, Name: "Godot", img: godotLogo, link: "/godot"},
       // {id: 3, Name: "Websites", img: "", link: "/website"},
       // {id: 4, Name: "Discord", img: discordLogo, link: "/discord"},
    ]

    return (
        links.map((link) => {
            return (
                <MotionLink className={"link"} to={link.link}
                            style = {{
                                backgroundColor: "#0b1b2c",
                            }}
                            whileHover={{
                                scale: [1, 1.1, 1.2, 1],
                                textShadow: "2dvh 2dvh 1rem #000",
                            }}

                            transition={{
                                duration: 2,
                            }}
                >
                    {link.Name}

                    <motion.img
                        src={link.img}
                        alt={""}
                        style={{width: "20px", height: "20px", position: "unset"}}
                        initial={{
                            opacity: 0,
                        }}
                        animate = {{
                            opacity: 1,
                            scale: [1, 1.1, 1.2, 1],
                            textShadow: "2dvh 2dvh 1rem #000",
                            rotate: 360,
                        }}
                        transition={{
                            duration: 2,
                            bounce: 0.5,
                            repeat: Infinity,
                            repeatType: "mirror",
                            repeatDelay: 1,
                        }}
                    >

                    </motion.img>

                </MotionLink>
            )
        })
    )
}

function Home() {

    return (
        <div className={"outer-screen"}>
            <motion.div className={"inner-screen"}
                onDoubleClick={() => console.log("clicked")}
                onScrollCapture={() => console.log("scrolled")}

                animate={{
                    backgroundColor: [
                        '#738a9f',
                        '#0b1b2c',
                        '#364e6c',
                    ],

                    opacity: [
                        .5,
                        .8,
                        .4,
                        .6
                    ]
                }}

                transition={{
                    duration: 10,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                }}
            >
                <motion.div className={"glitch"}
                    animate={{
                                backgroundColor: [
                                    '#5981b1',
                                    '#33557a',
                                    '#89aacd',
                                    '#0a56a1',
                                    '#5c6a77',
                                    '#fff',
                                ],
                                y: [
                                    -150, -10, -30, 50, 90, 100, 150, 200, 250, 300, -150
                                ],
                                opacity: [0.05, 0],
                    }}
                            transition={{
                                repeat: Infinity,
                                duration: 10,
                                ease: "easeInOut",
                            }}
                >
                </motion.div>

                <main>
                    <h1 style={{padding: "20px", margin: "30px"}} className={"title"}>
                        Sakura's portfolio
                    </h1>
                </main>


                <li className={"link-tree"}>
                    {hostLinks()}
                </li>
            </motion.div>
        </div>

    );
}

export default Home;