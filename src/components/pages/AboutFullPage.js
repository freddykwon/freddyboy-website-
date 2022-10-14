import React from 'react'
import Container from 'react-bootstrap/Container';
import ReactFullpage from '@fullpage/react-fullpage';
import AboutFirst from './AboutFirst';
import './About.css';
import AboutSecond from './AboutSecond';

function AboutFullPage() {
  return (
    <Container>
      <AboutFirst />
      <AboutSecond />
    </Container>
)
  }

export default AboutFullPage