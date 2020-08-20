import React from 'react';

const LandingPage = () => {
    return (
        <div>

            <button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i>
            </button>
            <header id="header" className="fixed-top ">
                <div className="container d-flex align-items-center">

                    <h1 className="logo mr-auto"><a href="index.html">Tempo</a></h1>
                    {/* Uncomment below if you prefer to use an image logo 
                    <a href="index.html" className="logo mr-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></a> */}

                    <nav className="nav-menu d-none d-lg-block">
                        <ul>
                            <li className="active"><a href="index.html">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#team">Team</a></li>
                            <li><a href="blog.html">Blog</a></li>
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
                </div>
            </header>
        </div>
    )
}

export default LandingPage;
