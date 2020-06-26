import React from 'react';
import './OnlineCourses.scss';

import {Button } from 'react-bootstrap';
import CourseCart from '../CourseCart/CourseCart';
import img1 from './CourseImage/assignment-35.png';
import img2 from './CourseImage/assignment-49.png';
import img3 from './CourseImage/assignment-63.png';
import smallImg1 from './CourseImage/assignment-37.png';
import smallImg2 from './CourseImage/assignment-51.png';
import smallImg3 from './CourseImage/assignment-65.png';

import Demo from '../Demo/Demo';

const OnlineCourses = () => {
    return (
        <div className="course-container">

            <h1 style={{textAlign:'center'}}>Online Courses</h1>
            <div className="courses">

           {/* <CourseCart
           bigImg={img1}
           smallImg={smallImg1}
           />
           <CourseCart
           bigImg={img2}
           smallImg={smallImg2}
           />
           <CourseCart
            bigImg={img3}
            smallImg={smallImg3}
           /> */}
               <Demo />
            </div>

            <Button variant="outline-danger" style={{marginTop:'100px'}}>View All Courses</Button>
        </div>
    );
};

export default OnlineCourses;