import React from 'react';
import './Category.scss';
import CategoryElement from '../CategoryElement/CategoryElement';
import img1 from './CategoryImages/assignment-111.png';
import img2 from './CategoryImages/assignment-121.png';
import img3 from './CategoryImages/assignment-131.png';
import img4 from './CategoryImages/assignment-141.png';

const Category = () => {
    return (
        <div className="category-container">            
            <CategoryElement
                img ={img1}
                title = '1500+ Topic'
            />
            <CategoryElement
                img ={img2}
                title='1800+ Students'
            />
            <CategoryElement
                img={img3}
                title='9K+ Test Token'
            />
            <CategoryElement
                img={img4}
                title='2000 A+'
            />

        </div>
    );
};

export default Category;