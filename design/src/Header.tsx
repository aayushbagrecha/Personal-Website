import React from 'react';
import './Header.css'
// import { Link, animateScroll as scroll } from "react-scroll";
const Header: React.FC = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
