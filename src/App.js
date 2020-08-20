import React, { useState } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from '../src/components/Home/Home';
import NavBar from '../src/components/Home/NavBar';
import './Styles/styles.scss';

import './Styles/styles.scss';

function App() {


  return (
    <div>
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
