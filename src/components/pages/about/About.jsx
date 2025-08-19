import React from 'react';
import '../css/About.scss'
import {motion} from "framer-motion";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {CardActions} from "@mui/material";
import {Button} from "@mui/material";
import {CardMedia} from "@mui/material";
import {Typography} from "@mui/material";
import {Box} from "@mui/material";
import {Grid} from "@mui/material";
import {Avatar} from "@mui/material";
import {CardHeader} from "@mui/material";
import {useState} from "react";

import TVScene from "./aboutModules/TVScene.jsx";

import faceLogo from "../../../assets/faceLogo.png"

function About(){
        return (
            <div className={"Main"}>
                <TVScene/>
            </div>
        );
    }

export default About;