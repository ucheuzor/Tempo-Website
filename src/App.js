import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../src/components/Home/Home';
import NavBar from '../src/components/Home/NavBar';
import Blog from '../src/components/Blog/Blog';
import './Styles/styles.scss';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <Router >
      <body className={open ? "mobile-nav-active" : ""} >
        <NavBar open={open} setOpen={setOpen} />
        <Switch>
          <Route
            path='/' component={Home}
            exact
          />
          <Route
            path='/blog'
          >
          <Blog   open = {open} setOpen = {setOpen} />
          </Route>

        </Switch>
      </body>
    </Router>
  );
}

export default App;
