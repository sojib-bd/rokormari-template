import React from 'react';
import './TopNavigation.scss'
import img from './assignment-19.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

const TopNavigation = () => {
    return (
        <div className="nav-container">
         <Container>
            <Row className="justify-content-md-center">
              <Col xs lg="2">
                <img src={img} alt=""/>
              </Col>
              <Col md="auto">
                <input type="text" placeholder="BOOK |search by book name"/><span>
                <SearchOutlinedIcon style={{fontSize:'38px',background:'blue',color:'white',marginTop:'-5px'}}/>
                </span>
              </Col>
              <Col  xs lg="3">
                <ShoppingCartOutlinedIcon style={{fontSize:'35px'}}/>
                <PeopleAltOutlinedIcon style={{fontSize:'35px'}}/>
              </Col>
            </Row>
         </Container>
        </div>
    );
};

export default TopNavigation;