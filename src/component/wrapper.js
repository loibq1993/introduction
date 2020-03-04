import React from 'react';
import '../css/wrapper.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import {faGlobe} from "@fortawesome/free-solid-svg-icons"


class Wrapper extends React.Component {
    render () {
        return (
            <section id="wrapper" className="hero">
                <div className="container">
                    <div className="personal-pic">
                        <img src={require('../img/personal.jpg')} alt="personal-pic"/>
                    </div>
                    <h2>Hello, This is Loibq</h2>
                    <div>
                        <h1>Web</h1>
                    </div>
                    <ul className="social-links">
                        <li>
                            <a href="https://www.facebook.com/loi.buiquang">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/loi.buiquang">
                                <FontAwesomeIcon icon={faGlobe} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/loi.buiquang">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default Wrapper;