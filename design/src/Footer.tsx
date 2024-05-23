import React from 'react';
import './Footer.css'
const Footer: React.FC = () => {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Aayush Bagrecha. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;
