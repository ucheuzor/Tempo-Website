import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Showcase from './components/Showcase';
import CardSection1 from './components/CardSection1';
import Xbox from './components/Xbox';
import CardSection2 from './components/CardSection2';
import Carbon from './components/Carbon';
import Social from './components/Social';
import Footer from './components/Footer';
import Hamburger from './components/Hamburger';


import 'normalize.css/normalize.css';
import './Styles/styles.scss';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Hamburger open={open} setOpen={setOpen} />
      <div className="container">
        <Navbar open = {open} />
        <Showcase />
        <CardSection1 />
        <Xbox />
        <CardSection2 />
        <Carbon />
        <Social />
      </div>
      <Footer />
    </div>
  );
}

export default App;
