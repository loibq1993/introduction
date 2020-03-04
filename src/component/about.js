import React from 'react';
import '../css/about.css';

const data = {
    'frontend' : {
        'bootstrap': '90%',
        'ajax': '80%',
        'sass': '80%',
        'npm': '70%',
        'react': '70%',
    },
    'backend' : {
        'php': '90%',
        'laravel': '80%',
        'wordpress': '85%',
        'mysql': '75%',
        'sqlserver': '70%',
    },
    'server' : {
        'linux': '80%',
        'nginx': '80%',
        'aws': '80%',
        'docker' : '50%'
    }
};

class About extends React.Component {
    progressBar = (type, skill) => {
        return data[type][skill];
    }

    render() {
        return (
            <section id="about" className="about-me">
                <div className="container">
                    <div className="title">
                        <h2>About me</h2>
                    </div>
                    <div className="content">
                        <div className="col left-col">
                            <h3>Frontend skills</h3>
                            <div className="skills">
                                <div className="skill">
                                    <h6>Bootstrap</h6>
                                    <div className="progress">
                                        <div className="progress-bar" style={{width: this.progressBar('frontend','bootstrap')}}></div>
                                        <span></span>
                                    </div>
                                </div>
                                <div className="skill">
                                    <h6>Jquery, Ajax</h6>
                                    <div className="progress">
                                        <div className="progress-bar" style={{width: this.progressBar('frontend','ajax')}}></div>
                                        <span></span>
                                    </div>
                                </div>
                                <div className="skill">
                                     <h6>Sass</h6>
                                    <div className="progress">
                                        <div className="progress-bar" style={{width: this.progressBar('frontend','sass')}}></div>
                                        <span></span>
                                    </div>
                                    
                                </div>
                                <div className="skill">
                                    <h6 >npm</h6>
                                    <div className="progress">
                                        <div className="progress-bar" style={{width: this.progressBar('frontend','npm')}}></div>
                                        <span></span>
                                    </div>
                                </div>
                                <div className="skill">
                                    <h6>React</h6>
                                    <div className="progress">
                                        <div className="progress-bar" style={{width: this.progressBar('frontend','react')}}></div>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col right-col">
                            <h3>Backend skills</h3>
                            <div className="skills">
                                <div className="skill">
                                    <h6>PHP</h6>
                                    <div className="progress">
                                        <div className="progress-bar" style={{width: this.progressBar('backend','php')}}></div>
                                        <span></span>
                                    </div>
                                </div>
                                <div className="skill">
                                    <h6>Laravel</h6>
                                    <div className="progress">
                                        <div className="progress-bar" style={{width: this.progressBar('backend','laravel')}}></div>
                                        <span></span>
                                    </div>
                                </div>
                                <div className="skill">
                                    <h6>Wordpress</h6>
                                    <div className="progress">
                                        <div className="progress-bar" style={{width: this.progressBar('backend','wordpress')}}></div>
                                        <span></span>
                                    </div>
                                </div>
                                <div className="skill">
                                    <h6>Mysql</h6>
                                    <div className="progress">
                                        <div className="progress-bar" style={{width: this.progressBar('backend','mysql')}}></div>
                                        <span></span>
                                    </div>
                                </div>
                                <div className="skill">
                                    <h6>Sql Server</h6>
                                    <div className="progress">
                                        <div className="progress-bar" style={{width: this.progressBar('backend','sqlserver')}}></div>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col left-col">
                            <h3>Server skills</h3>
                            <div className="skills">
                                <div className="skill">
                                    <h6>Linux, centos, ubuntu</h6>
                                    <div className="progress">
                                        <div className="progress-bar" style={{width: this.progressBar('server','linux')}}></div>
                                        <span></span>
                                    </div>
                                </div>
                                <div className="skill">
                                    <h6>Nginx, Apache</h6>
                                    <div className="progress">
                                        <div className="progress-bar" style={{width: this.progressBar('server','nginx')}}></div>
                                        <span></span>
                                    </div>
                                </div>
                                <div className="skill">
                                    <h6>AWS, hosting, vps, google cloud</h6>
                                    <div className="progress">
                                        <div className="progress-bar" style={{width: this.progressBar('server','aws')}}></div>
                                        <span></span>
                                    </div>
                                </div>
                                <div className="skill">
                                    <h6>Docker, Kubernet</h6>
                                    <div className="progress">
                                        <div className="progress-bar" style={{width: this.progressBar('server','docker')}}></div>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About; 