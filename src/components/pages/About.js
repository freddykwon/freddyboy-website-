import React from 'react'
// import { Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import './About.css';
import AboutPic from '../imgs/aboutpic.jpg';

function About() {
    return (
        <Container>
                <img id="aboutpic" src={AboutPic} className="text-decoration-underline" />
                <p className="aboutMe">
                    Toronto-based artist Freddy Kwon began the project freddyboy in 2018 with a handful of experimental bedroom ideas recorded on his thrifted tape machine. 
                    Through dreamy synths filtered in fuzz, sparkly guitars and gentle vocals, freddyboy crafts warm, melodic silhouettes of his ordinary life. His youthful sound playfully swings between introversion and unfazed self-expression, capturing the quiet complexities of growing up in your mid-twenties.  
                </p>
        </Container>
    )
}

export default About
