import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() { 
        return (
            <footer className="footer">
                <div className="footerLinks">
                    <a href="/admin">Admin</a>
                </div>
                <p>&copy; OSORIO 2021</p>
            </footer>
        );
    }
}
 
export default Footer;
