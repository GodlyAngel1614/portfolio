import {Card, CardActions, CardHeader, CardMedia, Typography} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom"
import {motion} from "framer-motion";
const MotionLink = motion.create(Link)
import './Roblox.css'


const cardComponents = [
    {
        id: 1,
        title: "Hollow-Knights",
        description: "This is a storytime game where you can play as either Lucanis or Star and you have 5 different routes",
        className: "",
        bgColor: "#e1cdcf",
        glowShadow: "1rem 0 5rem #85d4ff",

        videolink: "https://www.youtube.com/embed/G0xLWPBsvF8?si=9j87qVLuLnsF6Syf",
        link: "https://www.roblox.com/games/6993566488/Reprise",
        class: "cozy-game"
    },

    {
        id: 2,
        title: "Platformer",
        description: "This is a basic platformer game",
        className: "",
        bgColor: "#a0b0d1",
        glowShadow: "1rem 0 5rem #706eff",

        videolink: "https://www.youtube.com/embed/G0xLWPBsvF8?si=9j87qVLuLnsF6Syf",
        link: "https://www.roblox.com/games/6993566488/Reprise",
        class: "cozy-game"
    },

    {
        id: 3,
        title: "Cafe speed run",
        description: "This is a cafe speed run game" ,
        className: "",
        bgColor: "#000",
        glowShadow: "0 0 10px #000",

        videolink: "https://www.youtube.com/embed/G0xLWPBsvF8?si=9j87qVLuLnsF6Syf",
        link: "https://www.roblox.com/games/6993566488/Reprise",
        class: "cozy-game"
    },

    {
        id: 4,
        title: "Garden valley",
        description: "This is a garden valley game loosely based off of grow a garden with 4 different locations" ,
        className: "",
        bgColor: "#b6a17b",
        glowShadow: "2 2 10px #7dad8a",

        videolink: "https://www.youtube.com/embed/G0xLWPBsvF8?si=9j87qVLuLnsF6Syf",
        link: "https://www.roblox.com/games/6993566488/Reprise",
        class: "cozy-game"
    },
]

function Godot() {
    return (
        <div style={{ padding: '2rem' }}>
            <main className={"Header"}>
                <h1> godot Projects </h1>
            </main>

            <div className={"card-container"}>
                <div className={"project-one"}>
                    {cardComponents.map((card) => {
                        return (
                            <div>
                                <Card className={"card"}
                                      style={{backgroundColor: card.bgColor, boxShadow: card.glowShadow}}
                                >
                                    <CardHeader title={card.title}/>

                                    <iframe
                                        width="780"
                                        height="500"
                                        src= {card.videolink}
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay;
                                        clipboard-write; encrypted-media;
                                        gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen>
                                    </iframe>

                                    <CardMedia>
                                        <MotionLink to={card.link} className={"l"}>
                                            Link to game
                                        </MotionLink>
                                    </CardMedia>
                                    <CardContent>
                                        <Typography variant="p" component="h2">
                                            {card.description}
                                        </Typography>
                                    </CardContent>
                                </Card></div>

                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Godot;