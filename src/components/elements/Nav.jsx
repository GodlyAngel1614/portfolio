import { motion } from "framer-motion"
import {Link} from "react-router-dom"
const MotionLink = motion.create(Link)
import './elements.css'

function Nav() {
    return (
        <motion.nav className={"Navbar"}>
            <div className={"content"}>
                <li className={"links"}>
                    <MotionLink style={{color: "#fff", textDecoration: "none"}} to={"/"}
                      animate={{
                          color: ['#fff']
                      }}
                    >
                        Home
                    </MotionLink>

                    <MotionLink style={{color: "#fff", textDecoration: "none"}} to={"/about"}
                                animate={{
                                    color: []
                                }}
                    >
                        About
                    </MotionLink >

                    <MotionLink style={{color: "#fff", textDecoration: "none"}} to={"/"}
                                animate={{
                                    color: []
                                }}
                    >
                        Contact
                    </MotionLink>

                </li>
            </div>
        </motion.nav>
    );
}

export default Nav