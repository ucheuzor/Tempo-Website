import React from 'react';
import Logo from '../images/logo.png';

const Navbar = ({ open }) => {
    return (
        <div>
            <nav className="main-nav">
                <a href="/"><img src={Logo} alt="Microsoft" className="logo" /></a>

                {open ?
                    <ul className = "main-menu show">
                        <li><a href="/">Office</a></li>
                        <li><a href="/">Windows</a></li>
                        <li><a href="/">Surface</a></li>
                        <li><a href="/">Xbox</a></li>
                        <li><a href="/">Deals</a></li>
                        <li><a href="/">Support</a></li>
                    </ul> :
                    <ul className="main-menu">
                        <li><a href="/">Office</a></li>
                        <li><a href="/">Windows</a></li>
                        <li><a href="/">Surface</a></li>
                        <li><a href="/">Xbox</a></li>
                        <li><a href="/">Deals</a></li>
                        <li><a href="/">Support</a></li>
                    </ul>
                }

                <ul className="right-menu">
                    <li>
                        <a href="/">
                            <i className="fas fa-search"></i>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <i className="fas fa-shopping-cart"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
