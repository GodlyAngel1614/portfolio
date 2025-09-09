import './Contact.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {CardActions} from "@mui/material";

export default function ContactUs() {
    return (
        <>
            <div style={{ width: '100%', height: '125vh', overflow: 'hidden' }}>
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSe0yTv9gVv72pvbIIXxkyt2o6-0HVeMqDLKOw0Y1t1lKv3tSQ/viewform?embedded=true"
                    width="1000"
                    height="2000"  // increase height
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                ></iframe>
            </div>

            <Card
                style={{
                    width: '50%',
                    height: '15vh',
                }}
            >

            </Card>
            <h1 style={{color:"white"}} >
                Contact information
            </h1>
        </>
    )
}