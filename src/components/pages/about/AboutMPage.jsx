import {motion} from "framer-motion";
import '../css/About.scss'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {useState} from "react";
const MotionCard = motion(Card);

const cardData = [
    {
        Title: "Who I am!",
        id: 1,
        text: `Welcome to the About Me site! I see you made it out of the glitching cube.

Clients call me a lot of different names, but you're free to call me Un6dinary/Un6/Sakura etc.

My socials are:
- Discord: Un6dinary / yagami_149
- Roblox: Heavenslay2020

These are the only cones avaliable for client communications `
    },
    {
        Title: "What do you do?",
        id: 2,
        text: `Look no further!:

- Websites: This site was built with JSX and JS, hosted on Vercel, and posted to GitHub. I also use Pyflask for backend / express.
- Discord Bots: My Discord page isn’t up at the moment, but I’ve worked with Discord webhooks connected to APIs (Roblox, websites) and plain discord bots for my servers.
- Languages I know: Python, Java, Ren'Py, Luau/Lua, GDScript, TypeScript, C#.

I’ve been programming for 4 years+, doing commissioned work for 2 years. You can commission me for roblox projects, websites, or Discord bots!`
    },
    {
        Title: "How does commissioning you work?",
        id: 3,
        text: `I have a google form open but you can also message me in discord:

1. I do not respond to roblox messages if you friend me and message me you will be ignored \n
2. If offering percentage there should be some proof of concept, and if you're commissioning me for a project have a clear plan \n
3. For installment payments, state total and per-feature payment. \n
4. Include deadlines if relevant. \n
5. Respect my time! I'm on 3-4 hours a day during the week and 7-8 during the weekend. 

That’s it! I hope we can work together well.`
    }
];

function MyCardFunc() {
    return (
        <div className="about-background">
            <div className="cards-row">
                {cardData.map((card) => (
                    <MotionCard
                        key={card.id}
                        className="about-cards"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0, backgroundImage:"linear-gradient(to bottom right, #5c6370, #7885ad)"}}
                        whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(255, 255, 255, 0.3)' }}
                        transition={{ duration: 1 }}
                    >
                        <h2>{card.Title}</h2>
                        <p style={{ whiteSpace: 'pre-line' }}>{card.text}</p>
                        <div className="stars"></div>
                    </MotionCard>
                ))}
            </div>
        </div>
    );
}


function AboutMain() {
    return (

        <div className="about-background">
            <motion.div
                className="about-card-main"
                animate={{
                    opacity:["0%",  "100%" ],
                }}
                transition={{
                    duration: 2,
                }}
            >
               <MyCardFunc />

            </motion.div>
        </div>
    )
}


export default AboutMain;