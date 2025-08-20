import React from "react";
import {motion} from "framer-motion";
import {useNavigate, useParams} from "react-router-dom";
import {allRooms} from "./robloxModules/allRooms.jsx";

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
                    position: 'relative',
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
    const { type } = useParams();
    const tvData = allRooms[type] || [];

    const handleTVClick = (id) => {
        console.log(`TV ${id} clicked`);
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',     // ✅ centers TVs horizontally
                width: '100%',
                minHeight: '100vh',       // allow scroll if taller than viewport
                backgroundColor: 'black', // or transparent if you want
                overflowY: 'auto',        // ✅ scroll like a feed
                padding: '2rem',
                boxSizing: 'border-box',
            }}
        >
            <h1 style={{ color: 'white', marginBottom: '14rem' }}>{type}</h1>

            <TV tvItems={tvData} onClick={handleTVClick} />
        </div>
    );
}

export default function VideoLoad() {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    minHeight: '100vh',
                }}
            >
                <VideoRoomScene />
            </div>

            <BackButton />
        </>
    );
}
