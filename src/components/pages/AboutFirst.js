import React from 'react'
import Container from 'react-bootstrap/Container';
import './About.css';
import AboutPic from '../imgs/about_pic.png';

function AboutFirst() {
    return (
        <Container>
                <img id="aboutpic" src={AboutPic} className="text-decoration-underline" alt="about" />
                <p className="aboutMe">
                    <span className="bigtext">Toronto-based artist </span> <a href="/otherworks" className="bigtext" id="freddyk">Freddy Kwon </a> <span className="bigtext">began the project freddyboy in 2018 with a handful of experimental bedroom ideas recorded on his thrifted tape machine. </span>  
                </p>
        </Container>
    )
}

export default AboutFirst