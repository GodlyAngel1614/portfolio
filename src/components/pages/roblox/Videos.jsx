import React, {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
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

// Add this in your index.html <head> or import via CSS
// <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">

function TV({ tvItems, onClick }) {
    const [modal, setModal] = useState({
        show: false,
        content: null,
        image: null,
    });

    return (
        <>
            <div
                style={{
                    display: "grid",
                    position: "relative",
                    gridTemplateColumns: "repeat(2, 2fr)",
                    gap: "3rem",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                }}
            >
                {tvItems.map((tv) => (
                    <motion.div
                        key={tv.id}
                        style={{
                            backgroundColor: "transparent",
                            padding: "1.6rem",
                            color: "white",
                            border: "1px solid white",
                            width: "500px",
                            height: "450px",
                            boxSizing: "border-box",
                            cursor: "pointer",
                            overflow: "hidden",
                        }}
                        whileHover={{
                            boxShadow: ["10px 1px 2px #a3d9ff", "10px 5px 10px #13639c"],
                            scale: 1.05,
                        }}
                        transition={{
                            duration: 0.3,
                        }}
                        onClick={() => onClick(tv.id)}
                    >
                        {tv.hasVideo && tv.videoSrc ? (
                            <motion.div
                                style={{
                                    width: "100%",
                                    height: "95%",
                                    objectFit: "cover",
                                    borderRadius: "8px",
                                    border: "1px solid transparent",
                                }}
                            >
                                {/* Description Button */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setModal({
                                            show: true,
                                            content:
                                                tv.description ||
                                                "No description provided. Add one to this item.",
                                        });
                                    }}
                                    style={{
                                        backgroundColor: "transparent",
                                        border: "1px solid grey",
                                        color: "white",
                                        fontSize: "1rem",
                                        cursor: "pointer",
                                        padding: "6px 10rem",
                                        margin: '2px',
                                        transition: "color 0.2s ease, transform 0.1s ease",
                                        fontFamily: "'Poppins', sans-serif",
                                        borderRadius: "10px 10px",
                                    }}
                                    onMouseOver={(e) => (e.currentTarget.style.color = "#444")}
                                    onMouseOut={(e) => (e.currentTarget.style.color = "white")}
                                    onMouseDown={(e) =>
                                        (e.currentTarget.style.transform = "scale(0.96)")
                                    }
                                    onMouseUp={(e) =>
                                        (e.currentTarget.style.transform = "scale(1)")
                                    }
                                >
                                    Description
                                </button>

                                {/* Video */}
                                <motion.video
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        borderRadius: "8px",
                                        border: "1px solid transparent",
                                    }}
                                    src={tv.videoSrc}
                                    controls
                                    autoPlay={false}
                                    loop={false}
                                    muted={false}
                                    playsInline
                                    whileHover={{
                                        border: "1px solid #e3f1ff",
                                        boxShadow: "0 0 10px #a3d9ff",
                                        transition: {
                                            duration: 0.4,
                                            repeatType: "mirror",
                                            ease: "linear",
                                        },
                                    }}
                                />
                            </motion.div>
                        ) : (
                            <div>No Video</div>
                        )}
                    </motion.div>
                ))}
            </div>

            {/* Global Modal */}
            <AnimatePresence>
                {modal.show && (
                    <motion.div
                        key="overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100vw",
                            height: "100vh",
                            backgroundColor: "rgba(0,0,0,0.6)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            zIndex: 1000,
                        }}
                        onClick={() => setModal({ ...modal, show: false })}
                    >
                        <motion.div
                            key="modal"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            style={{
                                backgroundColor: "#000000",
                                color: "white",
                                padding: "20px 30px",
                                borderRadius: "12px",
                                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                                maxWidth: "500px",
                                width: "80%",
                                textAlign: "center",
                                fontFamily: "'Poppins', sans-serif",
                                display: "flex",
                                flexDirection: "column",
                                maxHeight: "80vh", // limit height
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h2 style={{ marginBottom: "10px", fontWeight: "600" }}>
                                Description + Code snippet
                            </h2>

                            {/* Scrollable content */}
                            <div
                                style={{
                                    overflowY: "auto",
                                    flex: 1,
                                    marginBottom: "20px",
                                    paddingRight: "6px",
                                    scrollbarWidth: "thin",
                                }}
                            >
                                <p style={{ lineHeight: "3.3" }}>{modal.content}</p>
                                <img src={modal.image} alt={""} style={{ width: "100%", height: "100%", margin: "5px"}} />
                            </div>

                            <button
                                onClick={() => setModal({ ...modal, show: false })}
                                style={{
                                    backgroundColor: "transparent",
                                    border: "1px solid black",
                                    borderRadius: "6px",
                                    padding: "6px 12px",
                                    cursor: "pointer",
                                    color: "black",
                                    fontSize: "1rem",
                                    fontFamily: "'Poppins', sans-serif",
                                    transition: "transform 0.2s ease, background-color 0.2s ease",
                                }}
                                onMouseOver={(e) =>
                                    (e.currentTarget.style.backgroundColor = "#f0f0f0")
                                }
                                onMouseOut={(e) =>
                                    (e.currentTarget.style.backgroundColor = "transparent")
                                }
                                onMouseDown={(e) =>
                                    (e.currentTarget.style.transform = "scale(0.95)")
                                }
                                onMouseUp={(e) =>
                                    (e.currentTarget.style.transform = "scale(1)")
                                }
                            >
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
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
