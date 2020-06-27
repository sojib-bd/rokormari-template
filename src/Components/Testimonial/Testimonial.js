import React from 'react';
import './Testimonial.scss';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Col,Row} from 'react-bootstrap';
import img from './assignment-90.png';

const Testimonial = () => {
    return (
        <div className="testimonial-container">
            <Container className="justify-content-md-center">
                <Row>
                    <Col>
                        <h1 style={{padding:'20px'}}>Testimonial</h1>
                    </Col>
                </Row>
                <Row>
                   
                    <Col sm={4}>
                        <ArrowBackIosOutlinedIcon 
                        style=
                        {{fontSize:'30px',
                        position:'absolute',
                        left:'10px',
                        top:'30px'
                        }}
                        />
                        <img src={img} alt=""/>
                    </Col>
                    <Col sm={6}>
                        <Container>
                            <Row>
                                <Col><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente saepe debitis voluptas veniam quae nihil quis? Dolor, a nihil unde fuga quidem sunt sit aliquid? Aliquam at repellendus facere quis.</p></Col>
                                
                            </Row>
                            <Row>
                                <Col>
                                    <StarBorderOutlinedIcon style={{fill:'gold'}}/> 
                                    <StarBorderOutlinedIcon style={{fill:'gold'}}/> 
                                    <StarBorderOutlinedIcon style={{fill:'gold'}}/> 
                                    <StarBorderOutlinedIcon style={{fill:'gold'}}/> 
                                    <span> User Name- Student</span>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col sm={2}>
                        <ChevronRightOutlinedIcon 
                        style={{fontSize:'50px'}}/> 
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Testimonial;