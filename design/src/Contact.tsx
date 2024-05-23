import React from 'react';
import './Contact.css';
import githubLogo from './github-logo.png';
import phoneLogo from './phone-logo.png';
import linkedinLogo from './linkedin-logo.png';
import gmailLogo from './gmail-logo.png';

const Contact: React.FC = () => {
    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <div className="contact-info">
                <div className="contact-item">
                    <img src={githubLogo} alt="GitHub" />
                    <a href="https://github.com/aayushbagrecha">github.com/aayushbagrecha</a>
                </div>
                <div className="contact-item">
                    <img src={phoneLogo} alt="Phone" />
                    <span>+1 (571) 545 9650</span>
                </div>
                <div className="contact-item">
                    <img src={linkedinLogo} alt="LinkedIn" />
                    <a href="https://www.linkedin.com/in/aayushbagrecha">linkedin.com/in/aayushbagrecha</a>
                </div>
                <div className="contact-item">
                    <img src={gmailLogo} alt="Gmail"/>
                    <span>aayushbagrecha@vt.edu</span>
                </div>
            </div>
        </section>
    );
};

export default Contact;
