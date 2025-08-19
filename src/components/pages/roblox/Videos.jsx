import React from "react";
import {motion} from "framer-motion";
import {useNavigate, useParams} from "react-router-dom";


import V2 from "./videos/video1.mp4"


import D1 from "./videos/DL/2.mp4"
import D2 from "./videos/DL/1.mp4"
import F1 from "./videos/FPS/1.mp4"

const allRooms = {
    "Combat Systems": [
        {id: 1, hasVideo: true, videoSrc: D1},
        {id: 2, hasVideo: false},
        {id: 3, hasVideo: true, videoSrc: V2},
        {id: 4, hasVideo: true, videoSrc: V2},
    ],
    "Discord": [
        {id: 4, hasVideo: true, videoSrc: '/videos/music1.mp4'},
        {id: 5, hasVideo: false},
        {id: 6, hasVideo: true, videoSrc: '/videos/music2.mp4'},
    ],
    "Abilities": [
        {id: 7, hasVideo: true, videoSrc: D1},
        {id: 8, hasVideo: false},
        {id: 9, hasVideo: true, videoSrc: D2},
        {id: 10, hasVideo: true, videoSrc: F1},
    ]
};


function BackButton() {
    const navigate = useNavigate();

    return (
        <motion.button
            style={{
                backgroundColor: "transparent",
                padding: '15px 30px',
                color: 'white',
                border: '1px solid white',
                fontWeight: 'bold',
                backdropFilter: 'blur(4px)',
                whiteSpace: 'nowrap',
                borderRadius: '8px',
                cursor: 'pointer',
                marginLeft: '93pc',
                marginTop: '71pc',
            }}
            whileHover={{}}
            onClick={() => {
                navigate("/roblox")
            }}
        >
            Back button
        </motion.button>
    );
}

function TV({tvItems, onClick}) {
    return (
        <>
            <div
                style={{
                    display: 'grid',
                    position: 'fixed',
                    gridTemplateColumns: 'repeat(2, 2fr)',
                    gap: '3rem',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignContent: 'center',
                }}
            >
                {tvItems.map((tv) => (


                    <motion.div
                        key={tv.id}
                        style={{
                            backgroundColor: 'transparent',
                            padding: '1rem',      // small padding inside each cell
                            color: 'white',
                            border: '1px solid white',
                            width: '450px',
                            height: '350px',        // fixed height for uniformity
                            boxSizing: 'border-box',
                            cursor: 'pointer',
                            overflow: 'hidden',     // prevent overflow from large content
                        }}
                        whileHover={{
                            boxShadow: ['10px 1px 2px #a3d9ff', '10px 5px 10px #13639c'],
                            scale: 1.05,
                        }}
                        transition={{
                            duration: 0.3,
                        }}
                        onClick={() => onClick(tv.id)}
                    >
                        {tv.hasVideo && tv.videoSrc ? (
                            <motion.video
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderRadius: '8px',
                                    border: '1px solid transparent',
                                }}

                                src={tv.videoSrc}
                                controls
                                autoPlay={false}
                                loop={false}
                                muted={false}
                                playsInline
                                whileHover={{
                                    border: '1px solid #e3f1ff',
                                    boxShadow: '0 0 10px #a3d9ff',
                                    transition: {
                                        duration: 0.4,
                                        repeatType: 'mirror',
                                        ease: 'linear',
                                    },
                                }}
                            />
                        ) : (
                            <div>No Video</div>
                        )}
                    </motion.div>
                ))}
            </div>
        </>
    );
}


function VideoRoomScene() {
    const {type} = useParams();
    const tvData = allRooms[type] || [];

    const handleTVClick = (id) => {
        console.log(`TV ${id} clicked`);
    };

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: 'transparent',
                    overflow: 'hidden',
                }}
            />

            <TV tvItems={tvData} onClick={handleTVClick}/>
            <ambientLight intensity={0.3}/>
            <pointLight position={[0, 5, 0]} intensity={1.2}/>
        </>
    );
}


export default function VideoLoad() {
    return (
        <>
        <div
            style={{
            position: 'fixed',
            display: 'flex',
            width: '100vw',
            height: '100vh',
            alignItems: 'center',
            alignContent: 'bottom',
            justifyContent: 'center',
            alignSelf: 'bottom',
            overflow: 'hidden',
        }}


        >
            <VideoRoomScene />
        </div>

          <BackButton />
        </>
    );
}