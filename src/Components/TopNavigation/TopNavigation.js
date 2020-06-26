import React from 'react';
import './TopNavigation.scss'
import img from './assignment-19.png';
import img2 from './assignment-14.png';
import img3 from './assignment-21.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';

const TopNavigation = () => {
    return (
        <div className="nav-container">
         <Container>
            <Row>
              <Col>HELLO WORLD</Col>
              <Col>END OF WORLD</Col>
            </Row>
         </Container>
        </div>
    );
};

export default TopNavigation;