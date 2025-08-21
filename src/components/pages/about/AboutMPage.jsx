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

I go by a lot of names, but you're free to call me Un6dinary or Sakura.

My socials are:
- Discord: Un6dinary
- Roblox: Heavenslay2020

I have other socials, but these are the only ones for client communications.`
    },
    {
        Title: "What do you do?",
        id: 2,
        text: `I've worked on a lot of different things, but I can give you a quick run-through:

- Websites: This site was built with JSX and JS, hosted on Vercel, and posted to GitHub. I also use Express.
- Discord Bots: My Discord page isn’t up at the moment, but I’ve worked with Discord webhooks connected to APIs (Roblox, websites).
- Languages I know: Python, Java, Ren'Py, Luau/Lua, GDScript, TypeScript, C#.

I’ve been programming for almost 4 years, doing commissioned work for 1 year. You can commission me for Luau projects, websites, or Discord bots!`
    },
    {
        Title: "How does commissioning you work?",
        id: 3,
        text: `At the moment, I don't have the Google Sheets form up for my contact page, but generally:

1. Message me on Discord (@Un6dinary). I do not respond to Roblox messages.
2. Provide a solid plan. Show your progress if applicable.
3. For installment payments, state total and per-feature payment.
4. Include deadlines if relevant.
5. Respect my time; I may not be online constantly during the school year.

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
    const [card, currentCardIndex, setCardIndex] = useState(0)


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