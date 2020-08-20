import React from 'react';
import About from './About';
import Services from './Services';
import Features from './Features';
import CTA from './CTA';
import Portfolio from './Portfolio';
import Pricing from './Pricing';
import FAQ from './Faq';
import Team from './Team';
import Contact from './Contact';

const Main = () => {
    return (
        <main id="main">
            <About />
            <Services />
            <Features />
            <CTA />
            <Portfolio />
            <Pricing />
            <FAQ />
            <Team />
            <Contact />
        </main>
    )
}

export default Main;
