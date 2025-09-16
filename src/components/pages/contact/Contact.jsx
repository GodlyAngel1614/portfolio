import styles from './Contact.module.css';
import Card from '@mui/material/Card';
import { useEffect } from 'react';

export default function ContactUs() {
    const contactInformation = [
        "Discord: yagami_149",
        "Gmail: heavenhobson305@gmail.com",
        "Roblox: Heavenslay2020"
    ];

    // Floating stars / ethereal particles
    useEffect(() => {
        const container = document.querySelector(`.${styles.tvScreen}`);
        const symbols = ["❄"];
        for(let i=0;i<25;i++){
            const span = document.createElement('span');
            span.classList.add(styles.floating);
            span.textContent = symbols[Math.floor(Math.random()*symbols.length)];
            span.style.left = `${Math.random() * 90}%`;
            span.style.fontSize = `${12 + Math.random() * 18}px`;
            span.style.animationDelay = `${Math.random() * 5}s`;
            container.appendChild(span);
        }
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.tvFrame}>
                <div className={styles.tvScreen}>
                    <div className={styles.formContainer}>
                        <iframe
                            src="https://docs.google.com/forms/d/e/1FAIpQLSe0yTv9gVv72pvbIIXxkyt2o6-0HVeMqDLKOw0Y1t1lKv3tSQ/viewform?embedded=true"
                            width="100%"
                            height="2000"
                            frameBorder="0"
                            marginHeight="0"
                            marginWidth="0"
                        />
                    </div>

                    <h1 className={styles.header}>Contact Information</h1>

                    <Card className={styles.card}>
                        <div className={styles.tickerContainer}>
                            <span className={styles.tickerText}>
                                {contactInformation.join('   |   ')}
                            </span>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}

