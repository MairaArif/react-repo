import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdLocationPin } from 'react-icons/md';
import './Footer.css';
import logo from '../../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg={4} md={6}>
                        <div className="logo">
                            <div className='d-flex align-items-center'>
                                <img src={logo} alt="Logo" />
                                <h2>DIVERGE AI</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <div className="social-links">
                                <NavLink className='rounded-circle border-1' to="#"><FaFacebook /></NavLink>
                                <NavLink className='rounded-circle border-1' to="#"><FaTwitter /></NavLink>
                                <NavLink className='rounded-circle border-1' to="#"><FaLinkedin /></NavLink>
                            </div>
                        </div>
                    </Col>
                    <Col lg={2} md={6}>
                        <div className="quick-links">
                            <p>Useful Links</p>
                            <ul>
                                <li><NavLink to="#">
                                    <FaArrowRight className='me-2' />
                                    Home
                                </NavLink></li>
                                <li><NavLink to="#">
                                    <FaArrowRight className='me-2' />
                                    About
                                </NavLink></li>
                                <li><NavLink to="#">
                                    <FaArrowRight className='me-2' />
                                    Services
                                </NavLink></li>
                                <li><NavLink to="#"><FaArrowRight className='me-2' />Projects</NavLink></li>
                                <li><NavLink to="#"><FaArrowRight className='me-2' />Contact Us</NavLink></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={3} md={6}>
                        <div className="services">
                            <p>Our Services</p>
                            <ul>
                                <li><NavLink to="#"><FaArrowRight className='me-2' />Robotic Automation</NavLink></li>
                                <li><NavLink to="#"><FaArrowRight className='me-2' />Predictive Analysis</NavLink></li>
                                <li><NavLink to="#"><FaArrowRight className='me-2' />Machine Learning</NavLink></li>
                                <li><NavLink to="#"><FaArrowRight className='me-2' />Data Security</NavLink></li>
                                <li><NavLink to="#"><FaArrowRight className='me-2' />IT Management</NavLink></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={3} md={6}>
                        <div className="contact-info">
                            <p>Contact Us</p>
                            <div className="contact-details">
                                <BsFillTelephoneFill /><span>+613 8376 6284</span>
                            </div>
                            <div className="contact-details">
                                <FaEnvelope /><span>info@divergeai.com</span>
                            </div>
                            <div className="contact-details">
                                <MdLocationPin /><span>21 King Street Melbourne, 3000, Australia</span>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="copyright border-top pt-4 pb-0" xs={12}>
                        <p>&copy; 2023, DivergeAI.com. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
