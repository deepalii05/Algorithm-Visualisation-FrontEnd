import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About Me</h3>
                        <p className='aboutdetails'>Hey people! Myself Deepali,</p>
                        <p className='aboutdetails'>I'm a prefinal year student pursuing Bachelor's Degree in technology from Indira Gandhi Delhi Technical University for Women, Kashmere Gate. </p>
                        <p className='aboutdetails'>You may find me doing a lot stuffs like participating in hackathons, working on research papers,doing frontend stuffs and even working on Blockchain.
                        </p>
                        <ul className='skilllist'>
                            <Row>
                                <h3 className='aboutmetext'>About Me</h3>
                                <Col md={7}>
                                    <li>HTML5/CSS3</li>
                                    <li>JavaScript</li>
                                    <li>Flutter</li>
                                    <li>Machine Learning</li>
                                </Col>
                                <Col md={5}>
                                    <li>React Js</li>
                                    <li>Deep Learning</li>
                                    <li>Git/Github</li>
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage