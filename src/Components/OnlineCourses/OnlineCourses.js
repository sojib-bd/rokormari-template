import React from 'react';
import './OnlineCourses.scss';
import CourseCart from '../CourseCart/CourseCart';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import bgImage from './assignment-107.png';

const OnlineCourses = () => {
    const myStyle={
        position: 'absolute',
        left: '0px',
        top:'800px',
       
        color: 'white'
    }
    return (
        <div className="course-container">
            <h1>ONLINE COURSES</h1>
            <CourseCart/>
            <Button variant="outline-danger" className="courseReviewBtn">View All Courses </Button>
            <img src={bgImage} alt="" width="250px" height="200px" style={myStyle}/>
        </div>
    );
};

export default OnlineCourses;