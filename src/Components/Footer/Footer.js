import React from 'react';
import './Footer.scss';
import {Container,Row,Col,Form, Button,FormControl} from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="main-container">
            <div className="footer-container">
                <div className="curve1"></div>
                <div className="subscription-body">
                    <Container >
                        <Row>
                            <Col sm={6}>
                                <h2 style={{color:'#0C00D1'}}>Subscribe to Our Newsletter</h2>
                                <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Magni cumque sint voluptatem.</small></p>
                            </Col>
                            <Col sm={6} style={{marginTop:'30px'}}>
                                <Form inline>
                                    <FormControl type="email" placeholder="Email Address" className="mr-sm-2" style={{background:'#E5E5ED',width:'300px'}}/>
                                    <Button variant="danger">Subscribe</Button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="footer-info">
                    <Container>
                        <Row>
                            <Col>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut rem deleniti similique error minus rerum alias beatae</p><br/>
                                <p><small>copyright © 2020 rokomari.com</small></p>
                            </Col>
                            <Col>
                                <ul>
                                    <li>
                                        <h3>Courses</h3>
                                    </li>
                                    <li>Graphics</li>
                                    <li>Web Development</li>
                                    <li>Business</li>
                                    <li>Marketing</li>
                                </ul>
                            </Col>
                            <Col>
                                
                                <ul>
                                    <li><h3>Terms</h3></li>
                                    <li>Terms of Policy</li>
                                    <li>Refund Policy</li>
                                    <li>Policy of Support</li>
                                    <li>Terms of Use</li>
                                </ul>
                            </Col>
                            <Col>
                                
                                <ul>
                                    <li><h3>Useful Link</h3></li>
                                    <li>Learning community</li>
                                    <li>Become a contributor</li>
                                    <li>Support Forum</li>
                                    <li>FAQ</li>
                                    <li>Contact Us</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default Footer;