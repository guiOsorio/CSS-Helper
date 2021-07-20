import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    render() { 
        return (
            <nav className="nav navbar navbar-expand-lg">
            <div className="container-fluid">
                <a href="/CSS-Helper/" className="home-link navbar-brand">HOME</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
                    {this.props.icon}
                </button>
                <div className="links collapse navbar-collapse" id="navbarNavDropdown">
                    <a href="/CSS-Helper/demo">Demo</a>
                    <a href="https://react-bootstrap.github.io/components/navbar/" rel="noreferrer" target="_blank">React-Bootstrap</a>
                    <a href="/CSS-Helper/about">About</a>
                    <a href="/CSS-Helper/contact">Contact</a>
                </div>
            </div>
        </nav>
        );
    }
}
 
export default Navbar;

