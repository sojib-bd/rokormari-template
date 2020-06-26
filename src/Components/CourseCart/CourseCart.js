import React from 'react';
import './CourseCart.scss';
import img1 from './Images/assignment-72.png';
import img2 from './Images/assignment-73.png';

const CourseCart = (props) => {
    return (
        <div className="courseCart-container">
            <img src={props.bigImg} alt=""/>
            <div className="middle">
                <img src={props.smallImg} alt=""/>
                <button>Free</button>
            </div>
            <h3>Modern</h3>
            <p>Designation</p>
            <button>Buy Course</button>
            <hr style={{width: '350px'}}/>
            <div className="bottom">
                <img src={img2} alt="" className="dateImg"/><span> start jun 10 2020</span>
                <img src={img1} alt="" className="seatImg"/><span> 60 seats</span>
            </div>
        </div>
    );
};

export default CourseCart;