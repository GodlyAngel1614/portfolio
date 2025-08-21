import React from 'react';
import {motion} from "framer-motion";
import "./css/Home.css"
import {Link} from "react-router-dom"
import robloxLogo from "../../assets/robloxLogo.png"
import godotLogo from "../../assets/godotLogo.png"

const MotionLink = motion.create(Link)

function Home() {
    return (
        <div className={"outer-screen"}>
            <motion.div className={"inner-screen"}
                onDoubleClick={() => console.log("clicked")}
                onScrollCapture={() => console.log("scrolled")}

                animate={{
                    backgroundColor: [
                        '#738a9f',
                        '#0e2137',
                        '#5586bd',
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
                        Sakura's Portfolio
                    </h1>
                </main>

                <li className={"link-tree"}>
                    <MotionLink className={"link"} to={"/roblox"}
                      whileHover = {{
                        scale: [1, 1.1, 1.2, 1],
                        textShadow: "2dvh 2dvh 1rem #000",
                      }}

                      transition = {{
                          duration: 2,
                      }}


                    >
                        Roblox

                        <motion.img
                            src={robloxLogo}
                            alt={"Roblox Logo"}
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

                    <MotionLink className={"link"} to={"/godot"}
                        whileHover = {{
                            scale: [1, 1.1, 1.2, 1],
                            textShadow: "2dvh 2dvh 1rem #bed0ed",
                        }}

                        transition={{
                            duration: 2,
                        }}
                    >

                        <motion.img
                            src = {godotLogo}
                            style={{width: "20px", height: "20px", position: "unset", padding: "2px", marginRight: "4px"}}
                            initial={{
                                opacity: 0,
                            }}
                            animate = {{
                                opacity: 1,
                                scale: [1, 1.1, 1.2, 1],
                                textShadow: "2dvh 2dvh 1rem #bed0ed",
                                rotate: 360,
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "mirror",
                                repeatDelay: 1,
                            }}
                        >

                        </motion.img>
                        Godot
                    </MotionLink>

                    <MotionLink className={"link"} to={"/web"}

                    >
                        Websites
                    </MotionLink>

                    <MotionLink className={"link"} to={"/web"}

                    >
                        Python/Java/C##/Renpy
                    </MotionLink>

                    <MotionLink className={"link"} to={"/web"}

                    >
                        Discord
                    </MotionLink>
                </li>
            </motion.div>
        </div>

    );
}

export default Home;