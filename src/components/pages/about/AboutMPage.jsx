import {motion} from "framer-motion";
import '../css/About.scss'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";


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
                whileHover={{
                    boxShadow: "4px 4px #a1d5ff"
                }}
            >

             <Card className="about-cards">
                We all love the pain
             </Card>

                <Card className="about-cards">
                    We all love the pain
                </Card>

                <Card className="about-cards">
                    We all love the pain
                </Card>
            </motion.div>
        </div>
    )
}


export default AboutMain;