import React from 'react';
import './About.css';
import aboutImage from './about-image.png';
const About: React.FC = () => {
    return (
        <div id="about">
            <div className="content">
                    <h1>Hi, I'm Aayush Bagrecha.</h1>
                    <h1>I'm a Computer Science Grad at Virginia Tech.</h1>

                    <p>Crafting tech solutions with precision and passion. From coding to problem-solving,
                        I thrive on turning challenges into innovative solutions.
                        If you have a great project that needs help, I'm your guy.</p>
            </div>
            <div className="photo"><img src={aboutImage}/></div>
        </div>
    );
};

export default About;
