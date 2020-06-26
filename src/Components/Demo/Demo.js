import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {CardDeck,Card,Container,Row,Col,Button} from 'react-bootstrap';
import img1 from '../OnlineCourses/CourseImage/assignment-35.png';
import img2 from '../OnlineCourses/CourseImage/assignment-49.png';
import img3 from '../OnlineCourses/CourseImage/assignment-63.png';
import img4 from '../OnlineCourses/CourseImage/assignment-37.png';
import img5 from '../OnlineCourses/CourseImage/assignment-51.png';
import img6 from '../OnlineCourses/CourseImage/assignment-65.png';
import log1 from '../CourseCart/Images/assignment-72.png';
import log2 from '../CourseCart/Images/assignment-73.png';


const Demo = () => {

    const myStyle={
        background:'#CCCCCC',
        border: '1px solid white',
       
        borderRadius:'70%',
        marginTop:'-15px'
    }

    const btnStyle={
        color:'white',
        border:'none',
        width:'100px'
    }

    return (
        <div>
            <CardDeck>
  <Card>
    <Card.Img variant="top" src={img1} />
    <Card.Body>
        <Container style={{marginTop:'-35px'}}>
            <Row ClassName="text-start">
                <Col sm={4}><img src={img4} alt="" style={myStyle}/></Col>
                <Col sm={4}></Col>
                <Col sm={4}><Button size="sm" style={btnStyle}>Free</Button></Col>
            </Row>
            <Row>
                <Col style={{textAlign:'start'}}>
                    <h4>Modern Psychology</h4>
                    <p>Designation</p>
                    <Button size="sm" variant="danger" style={{color:'white',
        border:'none',marginLeft:'-10px'}}>Buy Course</Button>
                </Col>
            </Row>
        </Container>
    </Card.Body>
    <Card.Footer>
      <Container>
        <Row>
            <Col><img src={log2} alt=""/><span> Start: 20 July, 2020</span></Col>
            <Col><img src={log1} alt=""/><span> 60 seats</span></Col>
        </Row>
      </Container>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={img2} />
    <Card.Body>
       <Container style={{marginTop:'-35px'}}>
            <Row ClassName="text-start">
                <Col sm={4}><img src={img5} alt="" style={myStyle}/></Col>
                <Col sm={4}></Col>
                <Col sm={4}><Button size="sm" style={btnStyle}>Free</Button></Col>
            </Row>
            <Row>
                <Col style={{textAlign:'start'}}>
                    <h4>HR Management</h4>
                    <p>Designation</p>
                    <Button size="sm" variant="danger" style={{color:'white',
        border:'none',marginLeft:'-10px'}}>Buy Course</Button>
                </Col>
            </Row>
        </Container>
    </Card.Body>
    <Card.Footer>
      <Row>
            <Col><img src={log2} alt=""/><span> Start: 20 July, 2020</span></Col>
            <Col><img src={log1} alt=""/><span> 60 seats</span></Col>
        </Row>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={img3} />
    <Card.Body>
       <Container style={{marginTop:'-35px'}}>
            <Row ClassName="text-start">
                <Col sm={4}><img src={img6} alt="" style={myStyle}/></Col>
                <Col sm={4}></Col>
                <Col sm={4}><Button size="sm" style={btnStyle}>Free</Button></Col>
            </Row>
            <Row>
                <Col style={{textAlign:'start'}}>
                    <h4>Modern psychology</h4>
                    <p>Designation</p>
                    <Button size="sm" variant="danger" style={{color:'white',
        border:'none',marginLeft:'-10px'}}>Buy Course</Button>
                </Col>
            </Row>
        </Container>
    </Card.Body>
    <Card.Footer>
      <Row>
            <Col><img src={log2} alt=""/><span> Start: 20 July, 2020</span></Col>
            <Col><img src={log1} alt=""/><span> 60 seats</span></Col>
        </Row>
    </Card.Footer>
  </Card>
</CardDeck>
        </div>
    );
};

export default Demo;