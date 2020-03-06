import React from 'react';
import '../css/about.css';

class About extends React.Component {

    render() {
        return (
           <section id="about">
               <div className="container">
                    <div className="title">
                        <h2>About me</h2>
                    </div>
                    <div className="content"></div>
                </div>
           </section>
        );
    }
}

export default About; 