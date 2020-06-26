import React from 'react';
import './CategoryElement.scss';

const CategoryElement = (props) => {
    const {img, title} = props
    return (
        <div className="element-container">
            <div className="circular-image">
                <img src={img} alt=""/>
            </div>
            <h3>{title}</h3>
            <p><small>learn anything</small></p>
        </div>
    );
};

export default CategoryElement;