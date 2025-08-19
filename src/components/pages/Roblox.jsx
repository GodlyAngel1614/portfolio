import {Card, CardActions, CardHeader, CardMedia, Typography} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import React, {useState, useEffect} from 'react';
import {motion} from "framer-motion";
import './css/Roblox.css'

import components from "./Datatables/RobloxDatatable.jsx";
const data = components()

function Roblox() {
    const [activeDescription, setActiveDescription] = useState(data[0].description)
    const [showModal, setShowModal] = useState(false);
    return (
        <div>
            <motion.main
                className="Header"
                animate={{
                    background: [
                        "linear-gradient(135deg, #0f0f0f, #b22222)", // black to crimson
                        "linear-gradient(135deg, #1a1a1a, #3a89a8)", // dark to teal-blue
                        "linear-gradient(135deg, #3a89a8, #1a1a1a)", // teal-blue to dark again
                    ]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "anticipate",
                }}
            >
                <motion.h1 className={"glow-text"} style={{fontSize: "2.5rem", letterSpacing: "0.4rem"}}
                    animate={{
                        textShadow: ["text-shadow: 0 0 10px #ffffff, 0 0 20px #94e1ff", " 0 0 20px #fa5c89", "0 0 20px #000000",],
                    }}

                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                > Roblox Projects </motion.h1>
                <motion.h2 className={"glow-text"} style={{fontSize: "1.5rem", letterSpacing: "0.3rem"}}
                    animate={{
                        textShadow: ["text-shadow: 0 0 10px #ffffff, 0 0 20px #94e1ff", " 0 0 20px #fa5c89", "0 0 20px #000000",],
                    }}

                           transition={{
                               duration: 15,
                               repeat: Infinity,
                               ease: "anticipate",
                           }}
                > This section highlights some of the Roblox projects I’ve worked on — a mix of personal builds and commissions. From UI design to custom systems and mechanics, it’s just one part of what I do as a developer. Feel free to explore and see what I’ve been up to!

                </motion.h2>
            </motion.main>

            <div className={"card-container"}>
                <div className={"project-one"}>
                    {data.map((card) => {
                        return (
                            <div>
                                <div>
                                    <Card className={"card"}
                                        style={{
                                            backgroundColor: card.bgColor,
                                            boxShadow: card.glowShadow,
                                            color: card.textColor,
                                    }}
                                    >
                                    <CardHeader title={card.title}/>


                                        {showModal && (
                                            <div className="modal-overlay" onClick={() => setShowModal(false)}>
                                                <div className="modal-content" onClick={e => e.stopPropagation()}>
                                                    <button className="close-button" onClick={() => setShowModal(false)}>
                                                        ✕
                                                    </button>
                                                    <div className="scrollable-description">
                                                            <h2> Description </h2>
                                                        {activeDescription.split('\n').map((line, i) => (
                                                            <div style={{whiteSpace: "pre-line", fontSize: "1.2rem"}}>
                                                                <React.Fragment key={i}>
                                                                    {line}
                                                                    <br />
                                                                </React.Fragment>
                                                            </div>
                                                        ))}


                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                     <div className={"video-container"}>
                                         {card.videos?.map((video, index) => (
                                             <div className={"video-wrapper"}>
                                                 <button
                                                     className={"inspect-button"}
                                                    onClick={() => {
                                                        setShowModal(true);
                                                        setActiveDescription(video.description);
                                                    }}>
                                                     Inspect
                                                 </button>

                                                 <motion.video
                                                     key={index}
                                                     className="video-frame"
                                                     src={video.link}
                                                     controls
                                                     autoPlay={false}
                                                     loop={false}
                                                     muted={false}
                                                     playsInline

                                                     whileHover={{
                                                         scale: 1.05,
                                                         textShadow: "2dvh 2dvh 1rem #000",
                                                         borderRadius: "10px",
                                                         border: "5px dotted #fff",
                                                         transition: {
                                                             duration: .4,
                                                             repeatType: "mirror",
                                                             ease: "linear",
                                                         }
                                                     }}
                                                 >
                                                 </motion.video>

                                                 <div className={"video-text"}>
                                                     <h3 key={index}> {video.title} </h3>
                                                 </div>
                                             </div>
                                         ))}
                                     </div>

                                        <div className={"video-container"}>
                                            {card.videoRow2?.map((video, index) => (
                                                <div className={"video-wrapper"}>
                                                    <button
                                                        className={"inspect-button"}
                                                        onClick={() => {
                                                            setShowModal(true);
                                                            setActiveDescription(video.description);
                                                        }}>
                                                        Inspect
                                                    </button>

                                                    <motion.video
                                                        key={index}
                                                        className="video-frame"
                                                        src={video.link}
                                                        controls
                                                        autoPlay={false}
                                                        loop={false}
                                                        muted={false}
                                                        playsInline

                                                        whileHover={{
                                                            scale: 1.05,
                                                            textShadow: "2dvh 2dvh 1rem #000",
                                                            borderRadius: "10px",
                                                            border: "5px dotted #fff",
                                                            transition: {
                                                                duration: .4,
                                                                repeatType: "mirror",
                                                                ease: "linear",
                                                            }
                                                        }}
                                                    >
                                                    </motion.video>

                                                    <div className={"video-text"}>
                                                        <h3 key={index}> {video.title} </h3>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>


                                    <CardMedia className={"media"}>
                                    </CardMedia>
                                    <CardContent>
                                        <Typography variant="p" component="h2"
                                            style={{
                                                color: card.textColor,
                                            }}
                                        >
                                            {card.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Roblox;