import React from 'react';
import { motion } from 'framer-motion';

const LandingPage = () => {
    return (
        <section id="hero">
            <motion.div
                className="hero-container"
                animate={{ rotate: 360 }}
                transition={{ duration: 2 }}
            >
                <h3>Welcome to <strong>Tempo</strong></h3>
                <h1>We're Creative Agency</h1>
                <h2>We are team of talanted designers making websites with CSS and JavaScript Framework</h2>
                <motion.a
                    href="#about"
                    className="btn-get-started scrollto"
                    whileHover={{
                        scale: 1.05,
                        boxShadow: '0px 0px 8px rgb(255,255,255)'
                    }}
                >Get Started</motion.a>
            </motion.div>
        </section>
    )
}

export default LandingPage;
