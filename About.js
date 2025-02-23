import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import ButtonStyle from '../common/button/Button';
import './About.css';
import first from '../../assets/images/about.png';
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <div className="about">
            <Container>
                <Row>
                    <Col md={12} lg={6}>
                        <div className="image-container">
                            <div className="image-link">
                                <NavLink to='/'>
                                <img src={first} alt="Image1" className='w-100' />
                                </NavLink>
                            </div>
                        </div>
                    </Col>
                    <Col md={12} lg={6}>
                        <div className="about-content">
                            <h5 className="text-uppercase text-blue">About Us</h5>
                            <h2 className="text-dark">
                                We Bring the Power of Data and Science & AI to Business
                            </h2>
                            <p className="text-gray">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                            <ul className="list-unstyled">
                                <li>
                                    <IoMdCheckmarkCircleOutline className="checked-icon" /> Lorem 5 words
                                </li>
                                <li>
                                    <IoMdCheckmarkCircleOutline className="checked-icon" /> Lorem 5 words
                                </li>
                                <li>
                                    <IoMdCheckmarkCircleOutline className="checked-icon" /> Lorem 5 words
                                </li>
                            </ul>
                            <ButtonStyle />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;
