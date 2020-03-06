import React from 'react';
import '../css/header.css'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <nav className="navigation">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-branch" href="https://loibq.info/portfolio">
                                <img src={require('../img/logo.png')} alt=""/>
                            </a>
                        </div>
                        <div id="navbar" className="navbar-collapse.collapse">
                            <ul className="nav">
                                <li>
                                    <a href="/">HOME</a>
                                </li>
                                <li>
                                    <a href="#about">ABOUT</a>
                                </li>
                                <li>
                                    <a href="#skill">Skill</a>
                                </li>
                                {/* <li>
                                    <a href="#portfolio">PORTFOLIO</a>
                                </li> */}
                                <li>
                                    <a href="#blog">NEWS</a>
                                </li>
                                {/* <li>
                                    <a href="#testimonials">TESTIMONIALS</a>
                                </li> */}
                                <li>
                                    <a href="#contact">CONTACT</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;