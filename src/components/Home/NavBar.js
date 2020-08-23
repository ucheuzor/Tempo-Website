import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = ({ open, setOpen, inner }) => {
    return (
        <div>

            <button
                open={open}
                onClick={() => setOpen(!open)}
                type="button"
                className="mobile-nav-toggle d-lg-none">
                <i className={open ? " icofont-close" : "icofont-navigation-menu"}></i>
            </button>

            <header id="header" className={inner ? "header-inner-pages fixed-top" : 'fixed-top'}>
                <div className="container d-flex align-items-center">

                    <h1 className="logo mr-auto"><Link to="/">Tempo</Link></h1>
                    {/* Uncomment below if you prefer to use an image logo 
                    <a href="index.html" className="logo mr-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></a> */}
                    <nav className={open ? 'mobile-nav' : "nav-menu d-none d-lg-block"}>
                        <ul>
                            <li className="active"><Link to="/">Home</Link></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#team">Team</a></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li className="drop-down"><a href="">Drop Down</a>
                                <ul>
                                    <li><a href="#">Drop Down 1</a></li>
                                    <li className="drop-down"><a href="#">Deep Drop Down</a>
                                        {/* <ul>
                                            <li><a href="#">Deep Drop Down 1</a></li>
                                            <li><a href="#">Deep Drop Down 2</a></li>
                                            <li><a href="#">Deep Drop Down 3</a></li>
                                            <li><a href="#">Deep Drop Down 4</a></li>
                                            <li><a href="#">Deep Drop Down 5</a></li>
                                        </ul> */}
                                    </li>
                                    <li><a href="#">Drop Down 2</a></li>
                                    <li><a href="#">Drop Down 3</a></li>
                                    <li><a href="#">Drop Down 4</a></li>
                                </ul>
                            </li>
                            <li><a href="#contact">Contact</a></li>

                        </ul>
                    </nav>
                    {open ? <div className="mobile-nav-overly" style={{ display: 'block' }}></div> :
                        <div className="mobile-nav-overly" style={{ display: 'none' }}></div>
                    }
                </div>
            </header>
        </div>
    )
}

export default LandingPage;
