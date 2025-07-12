import React from 'react';
import {motion} from 'framer-motion';
import {useState, useRef, useEffect} from "react";
import './elements.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {CardActions} from "@mui/material";



function Template() {
    const [count, updateCount] = useState(0);
    return (
        <div>
            <button onClick={() => updateCount(count + 1)}> the current could is: {count} </button>

            <Card>
                <CardContent>
                    <h1> Hello </h1>
                    <CardActions>
                        <h1> Hello </h1>
                    </CardActions>
                </CardContent>
            </Card>
        </div>
    );
}

export default Template;