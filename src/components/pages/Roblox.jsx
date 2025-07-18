import {Card, CardActions, CardHeader, CardMedia, Typography} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import React, {useState, useEffect} from 'react';
import {motion} from "framer-motion";

import G1 from "../../videos/GW/1.mp4"
import G2 from "../../videos/GW/2.mp4"
import G3 from "../../videos/GW/3.mp4"
import G4 from "../../videos/GW/4.mp4"
import G5 from "../../videos/GW/5.mp4"
import G6 from "../../videos/GW/6.mp4"
import G7 from "../../videos/GW/7.mp4"

import D1 from "../../videos/DL/1.mp4"
import D2 from "../../videos/DL/2.mp4"

import F1 from "../../videos/FPS/1.mp4"
import F2 from "../../videos/FPS/2.mp4"
import F3 from "../../videos/FPS/3.mp4"
import F4 from "../../videos/FPS/4.mp4"
import F5 from "../../videos/FPS/5.mp4"
import F6 from "../../videos/FPS/6.mp4"

import F7 from "../../videos/FPS/7.mp4"
import F8 from "../../videos/FPS/8.mp4"
import F9 from "../../videos/FPS/9.mp4"
import F10 from "../../videos/FPS/10.mp4"
import F11 from "../../videos/FPS/11.mp4"

import R1 from "../../videos/Random/1.mp4"
import R2 from "../../videos/Random/2.mp4"
import R3 from "../../videos/Random/3.mp4"
import R4 from "../../videos/Random/4.mp4"

import W1 from "../../videos/W/1.mp4"
import W2 from "../../videos/W/2.mp4"

import './Roblox.css'

const cardComponents = [
   // {
   //     id: 1,
    //    title: "Reprise",
   //     description: "Cultivate peace in a cozy garden sim with 4 unique zones, soft wind, and soil-stained joy.",
    //    bgColor: "#e2c9a0",
   //     glowShadow: "-1rem 1rem 20px #ffe7b2",
  //      textColor: "#2f1e1e", // earthy brown
   //     link: "https://www.roblox.com/games/6993566488/Reprise",

   //     videolink: "https://www.youtube.com/embed/G0xLWPBsvF8?si=9j87qVLuLnsF6Syf",
//
   //     videolink1: "https://www.youtube.com/embed/G0xLWPBsvF8?si=9j87qVLuLnsF6Syf",
//
   //     videolink2: "https://www.youtube.com/embed/G0xLWPBsvF8?si=9j87qVLuLnsF6Syf",
//
   //     videolink3: "https://www.youtube.com/embed/G0xLWPBsvF8?si=9j87qVLuLnsF6Syf",
//
   //     videolink4: "https://www.youtube.com/embed/G0xLWPBsvF8?si=9j87qVLuLnsF6Syf",

 //   },

  //  {
   //     id: 2,
    //    title: "Soul-Union",
    //    description: "An RPG adventure bound by fate — enter missions, wield magic, and traverse soul-linked realms. - Coming soon.",
    //    bgColor: "#141414",
    //    glowShadow: "0 0 30px #8de1ff",
    //    textColor: "#d1f3ff",
    //    link: "https://www.roblox.com/games/6993566488/Reprise",
   //     videolink: "https://www.youtube.com/embed/G0xLWPBsvF8?si=9j87qVLuLnsF6Syf"
 //   },

  //  {
    //    id: 3,
    //    title: "Soul-Tycoon",
   //     description: "Build an eerie soul-harvesting empire in this pastel-dark tycoon inspired by haunted hospitals.",
    //    bgColor: "#1a1a2e",
    //    glowShadow: "0 0 15px #ff99cc",
     //   textColor: "#ffe6f7",
     //   link: "https://www.roblox.com/games/6993566488/Reprise",
     //   videolink: "https://www.youtube.com/embed/G0xLWPBsvF8?si=9j87qVLuLnsF6Syf"
  //  },

    {
        id: 4,
        title: "Galactic War",
        description: "Lightsabers clash in a galactic skirmish built for speed, style, and blaster chaos.",
        bgColor: "#050d2f",
        glowShadow: "1px 0 5rem #7fcfff",
        textColor: "#e6f4ff",

        videos: [
            {
                title: "⚔️ Sword Combat",
                description: "🗡️ Combo Attacks\n" +
                    "Chain up to 4 unique sword \n animations in sequence.\\n" +

                    "🪫 Each swing costs:\n" +
                    "– 1 charge\n" +
                    "– 10 stamina\n\n" +
                    "🔘 Toggle Saber (Q)\n" +
                    "– Activate: Extends the saber and flickers to life.\n" +
                    "– Deactivate: Retracts the saber and flickers off." +
                    "",
                code: " ",
                link: G1,
            },

            {
                title: "🪂 Mobility",
                description: "Double Jump (Space)" +
                    "While mid-air, press Space again to perform a second jump." +
                    "🪫 Costs 10 stamina (initial jump costs 5)" +
                    "" +
                    "Dash (R)" +
                    "Hold R to dash in your current direction." +
                    "🪫 Costs 10 stamina" ,
                code: "",
                link: G2,
            },

            {
                title: "Throwing + Catching + Ragdoll",
                description: "🌀 Saber Throw (T)" +
                    "Throw your saber forward in the direction you're facing." +
                    "Automatically returns after reaching 10 units." +
                    "🪫 Costs 5 stamina" +
                    "" +
                    "🤜 Grapple (E)" +
                    "If your hand touches another player’s body part, ragdoll them for 2 seconds." +
                    "🪫 Costs 5 stamina" +
                    "",
                code: "",
                link: G3,
            },

            {
                title: "🛡️ Blocking (Test Mode)",
                description: "For testing, the NPC target is automatically added to the player’s blocking table." +
                    "" +
                    "Stun Window:" +
                    "During the first 2 seconds of blocking, incoming hits will stagger the player." +
                    "" +
                    "Full Block:" +
                    "After 2 seconds, if the player is still blocking, they become immune to damage." ,
                code: "",
                link: G4,
            },
        ],

        videoRow2: [
            {
                title: "🔫 Blaster Mechanics",
                description: "Shooting & Reloading\n" +
                    "Fires ammo with distinct sounds for headshots and body shots." +
                    "Each shot consumes 1 ammo, and you can reload at any time." +
                    "" +
                    "Zoom & Aim" +
                    "Hold Left Mouse Button to zoom into first-person view." +
                    "Hold Shift to have your player’s body follow the cursor." +
                    "",
                code: " ",
                link: G5,
            },

            {
                title: "🤜 Barrel Bash (E)",
                description: "Press E and hit another player with your gun’s barrel to ragdoll them for 2 seconds.\n" +
                    "\n" +
                    "🪫 Costs 10 stamina\n" +
                    "\n" ,
                code: "",
                link: G6,
            },

            {
                title: "🎮 Demo Mode",
                description: "Just messing around to showcase the UI elements and core mechanics in action.\n" +
                    "\n" +
                    "Perfect for testing and exploring features without pressure." ,
                code: "",
                link: G7,
            },

        ],

    },

    {
        id: 5,
        title: "Discord Webhook",
        description: "A sleek backend tool that lets Roblox whisper directly into Discord — automation magic.",
        bgColor: "#2c2f7e",
        glowShadow: "0 0 18px #a3a6ff",
        textColor: "#ffffff",

        videos: [
            {
                title: "🔗 Discord Stats Integration\n",
                description: "💬 Use in-game chat commands to trigger real-time messages sent directly to your Discord server!\n" +
                    "– Supports custom payloads for advanced use cases\n" +
                    "– Call from either the module or server script\n" +
                    "– Add rich field data or send simple default messages\n" +
                    "– Perfect for logging stats, notifications, or game events" ,
                code: " ",
                link: W1,
            },

            {
                title: "🧩 Discord Webhook Commands",
                description: "Trigger custom Discord messages directly from in-game chat commands!\n" +
                    "– 👤 Tracks which player used the command and when\n" +
                    "– 🛠️ Supports customizable behavior per command\n" +
                    "– 🔄 Seamlessly bridges Roblox to Discord with full control\n" +
                    "– 📦 Built command system, webhook logic, and data pipeline" ,
                code: "",
                link: W2,
            },
        ],
    },

    // {
    //    id: 6,
     //   title: "Horror Game",
    //    description: "Coming soon: shadows stir, doors creak, and something follows. Stay tuned...",
    //    bgColor: "#000000",
     //   glowShadow: "0 0 35px #ff4d4d",
     //   textColor: "#ffcccc",
     //   link: "https://www.roblox.com/games/6993566488/Reprise",
   // },

    {
        id: 7,
        title: "Ability Showcase",
        description: "Lightsabers clash in a galactic skirmish built for speed, style, and blaster chaos.",
        bgColor: "#050d2f",
        glowShadow: "1px 0 5rem #7fcfff",
        textColor: "#e6f4ff",

        videos: [
            {
                title: "⚔️ Sword Combat",
                description: "Combo Attacks" +
                    "Chain up to 4 unique sword animations in sequence." +
                    "🪫 Each swing costs 1 charge and 10 stamina" +
                    "" +
                    "1 Saber (Q)" +
                    "– Activate: Extend the saber and flicker to life" +
                    "– Deactivate: Retract the saber and flicker off" +
                    "",
                code: " ",
                link: G1,
            },

            {
                title: "🪂 Mobility",
                description: "Double Jump (Space)" +
                    "While mid-air, press Space again to perform a second jump." +
                    "🪫 Costs 10 stamina (initial jump costs 5)" +
                    "" +
                    "Dash (R)" +
                    "Hold R to dash in your current direction." +
                    "🪫 Costs 10 stamina" ,
                code: "",
                link: G2,
            },

            {
                title: "Throwing + Catching + Ragdoll",
                description: "🌀 Saber Throw (T)" +
                    "Throw your saber forward in the direction you're facing." +
                    "Automatically returns after reaching 10 units." +
                    "🪫 Costs 5 stamina" +
                    "" +
                    "🤜 Grapple (E)" +
                    "If your hand touches another player’s body part, ragdoll them for 2 seconds." +
                    "🪫 Costs 5 stamina" +
                    "",
                code: "",
                link: G3,
            },

            {
                title: "🛡️ Blocking (Test Mode)",
                description: "For testing, the NPC target is automatically added to the player’s blocking table." +
                    "" +
                    "Stun Window:" +
                    "During the first 2 seconds of blocking, incoming hits will stagger the player." +
                    "" +
                    "Full Block:" +
                    "After 2 seconds, if the player is still blocking, they become immune to damage." ,
                code: "",
                link: G4,
            },
        ],

        videoRow2: [
            {
                title: "🔫 Blaster Mechanics",
                description: "Shooting & Reloading\n" +
                    "Fires ammo with distinct sounds for headshots and body shots." +
                    "Each shot consumes 1 ammo, and you can reload at any time." +
                    "" +
                    "Zoom & Aim" +
                    "Hold Left Mouse Button to zoom into first-person view." +
                    "Hold Shift to have your player’s body follow the cursor." +
                    "",
                code: " ",
                link: G5,
            },

            {
                title: "🤜 Barrel Bash (E)",
                description: "Press E and hit another player with your gun’s barrel to ragdoll them for 2 seconds.\n" +
                    "\n" +
                    "🪫 Costs 10 stamina\n" +
                    "\n" ,
                code: "",
                link: G6,
            },

            {
                title: "🎮 Demo Mode",
                description: "Just messing around to showcase the UI elements and core mechanics in action.\n" +
                    "\n" +
                    "Perfect for testing and exploring features without pressure." ,
                code: "",
                link: G7,
            },

        ],

    },

    {
        id: 8,
        title: "Donation Leaderboard",
        description: "A commissioned project featuring a sleek donation leaderboard. I designed both the UI and backend logic — a smooth and rewarding system to build.",
        bgColor: "#1a0b0b",
        glowShadow: "0 0 35px #ff3e3e",
        textColor: "#ffe6b8",
        videos: [
            {
                title: "🎁 Basic Donation",
                description: "Donate under 100 Robux to appear on the global leaderboard.\n" +
                    "The entire server receives an announcement of your donation.\n" +
                    "\n" +
                    "💡 This system is fully customizable:\n" +
                    "– Swap out the UI\n" +
                    "– Personalize donation messages\n" +
                    "– Add custom gamepasses\n" +
                    "– Modify logos and branding\n" +
                    "\n",
                code: " ",
                link: D1,
            },

            {
                title: "💎 Advanced Donations",
                description: "Donate 100 Robux or more to appear on the global leaderboard with a special badge.\n" +
                    "You can also send a custom message (up to 100 characters) to the entire server.\n" +
                    "\n" +
                    "💡 Fully customizable:\n" +
                    "– Adjust message character limits\n" +
                    "– Redesign the UI\n" +
                    "– Define your own donation tier for “special” status" ,
                code: "",
                link: D2,
            },
        ],
    },

    {
        id: 9,
        title: "First Person Shooter",
        description: "A commision system for a full first person shooter with a first person model and weldable gun equipable and unequipable and animations for the player",
        bgColor: "#0f1c2e",
        glowShadow: "0 0 30px #4cbaff",
        textColor: "#cceaff",

        videos: [
            {
                title: "Idle & Walk – Unarmed",
                description: "🚶 Smooth walking animation synced to the first-person camera when no weapon is equipped. Viewmodel movement matches head bob and body inertia.",
                code: " ",
                link: F1,
            },

            {
                title: "Run Cycle – Unarmed",
                description: "🏃 Hold Shift to sprint. Triggers a dynamic viewmodel run animation with forward lean and motion blur cues.",
                code: " ",
                link: F2,
            },

            {
                title: "Mobility Suite – Unarmed",
                description: "🔁 Includes jump, fall, crouch (Hold C), and prone (Hold Z) — all custom viewmodel animations fully synced to camera momentum.",
                code: " ",
                link: F3,
            },

            {
                title: "Gun Equip & Holster",
                description: "⚡ Smooth weapon equip and unequip animations with custom walking cycles in all directions, fully synced to the viewmodel.",
                code: " ",
                link: F4,
            },

            {
                title: "Shooting Mechanics",
                description: "🔫 Fire your weapon with realistic camera shake. Console logs hit vectors, hit body parts, and supports custom bullet drop via raycasting. Includes reload system with Ammo and Damage tags for flexible weapon integration.",
                code: " ",
                link: F5,
            },

            {
                title: "Armed Movement",
                description: "🏃‍♂️ Sprint and strafe animations while holding a weapon, seamlessly blending movement and combat readiness.",
                code: " ",
                link: F6,
            },
        ],
        videoRow2: [
            {
                title: "🚶 Unarmed Idle & Walk",
                description: "Custom idle and walk animations for the player when no weapon is equipped. Smooth, natural pacing perfect for immersive exploration.",
                code: " ",
                link: F7,
            },

            {
                title: "🧎‍♂️ Crouch & Prone (Unarmed)",
                description: "Hold [C] to crouch and [Z] to go prone. Viewmodel and body animations respond dynamically to player input for stealthy movement.",
                code: " ",
                link: F8,
            },

            {
                title: "🏃 Sprint, Jump & Fall (Unarmed)",
                description: "Includes custom animations for sprinting, jumping, and falling. Each action is synced to player motion for fluid traversal.",
                code: " ",
                link: F9,
            },

            {
                title: "🔫 Armed Walk & Shoot",
                description: "Weapon-equipped walking, idle, and shooting animations. Firing triggers recoil feedback and body movement synced with shots.",
                code: " ",
                link: F10,
            },

            {
                title: "🪖 Crouch & Prone (Armed)",
                description: "Crouch and prone animations when holding a weapon. Holds [C] or [Z] for responsive low-profile movements during combat.",
                code: " ",
                link: F11,
            },
        ],
    },

    {
        id: 10,
        title: "Dev Sampler Pack",
        description: "\"A mashup of experimental features and one-off commissions. Each project demonstrates a unique aspect of scripting, system logic, or backend integration. \" +\n" +
            "    \"Some UI and visuals were collaborative — I focused on core mechanics and functionality.\"",
        bgColor: "#2a2438",
        glowShadow: "0 0 30px #c471ed",
        textColor: "#e7ddff",

        videos: [
            {
                title: "Yandere killing effect",
                description:  "☠️ Custom kill mechanic that triggers a scripted blood effect. " +
                    "Visuals (blood pool, UI) were made by another dev — my contribution was the elimination logic and module integration.",
                code: " ",
                link: R1,
            },

            {
                title: "🎮 Ace-Inspired Main Menu",
                description:  "\"Stylized main menu inspired by Ace Attorney — features custom UI, dynamic camera panning, gradient loading effects, and original menu music for dramatic flair.\"\n" +
                    "\n",
                code: " ",
                link: R2,
            },

            {
                title: "🔁 Sequenced Hit Combo\n" +
                    "\n",
                description:  "💥 A commissioned melee system featuring a 4-hit attack chain — each swing is synced with unique hit sounds and an active hitbox, triggering on impact with players or NPCs. Responsive, satisfying, and designed for combo clarity.\n" +
                    "\n",
                code: " ",
                link: R3,
            },

            {
                title: "🥊 Strength Simulator" +
                    "\n",
                description:  "💡 Project Summary:\n" +
                    "A quirky little passion project built out of boredom—but surprisingly deep!\n" +
                    "\n" +
                    "🔧 Features:\n" +
                    "\n" +
                    "Punching bag mechanics with emoji feedback 💥\n" +
                    "\n" +
                    "Dynamic warning system if strength is too low ⚠️\n" +
                    "\n" +
                    "Auto-battle with NPCs based on strength meter 🤖\n" +
                    "\n" +
                    "Damage calculation per round until win or defeat\n" +
                    "\n" +
                    "Win tracking with DataStores (auto-saves victories + stats) 🧠\n" +
                    "\n" +
                    "Strength-based access to new fights + opponents\n" +
                    "\n" +
                    "Easily expandable with new modes, effects, or challenges! 🌱\n" +
                    "\n" +
                    "🧪 Future potential:\n" +
                    "Could evolve into a full mini-fighting sim with animations, sounds, and even PVP duels.\n" +
                    "\n" +
                    "\n",
                code: " ",
                link: R4,
            },
        ],
    },
];


function Roblox() {
    const [activeDescription, setActiveDescription] = useState(cardComponents[0].description)
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
                    {cardComponents.map((card) => {
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