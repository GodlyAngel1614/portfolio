import { motion } from "framer-motion"
import {Link} from "react-router-dom"
const MotionLink = motion.create(Link)
import './elements.css'
import React, {useState, useEffect} from 'react';

function DropDown() {
    const [selectedValue, setSelectedValue] = useState(' ');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    }

    return (
        <select value={selectedValue} onChange={handleChange} className={"dropdown"} style={{textAlign: "left", padding: "10px"}}>
            <option value="1" > Roblox  </option>
            <option value="2"> Godot </option>
            <option value="3"> Websites </option>
            <option value="4"> Visual studio code </option>
            <option value="5"> Unity </option>
            <option value="6"> Discord </option>
        </select>
    );
}

function Nav() {
    return (
        <nav className={"Navbar"}>
            <div className={"content"}>
                <li className={"links"}>
                    <MotionLink style={{color: "#fff", textDecoration: "none"}} to={"/"}
                      animate={{
                          color: ['#fff']
                      }}
                    >
                        Home
                    </MotionLink>

                    <MotionLink style={{color: "#fff", textDecoration: "none"}} to={"/"}
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
        </nav>
    );
}

export default Nav