import React from 'react';
import './Banner.scss';
import bannerImg from './BannerImages/assignment-3.png';

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="intro">
                <p>Are you ready to learn?</p>
                <h1>Start learning <br/>
                new things Daily</h1>
                <button>Let's start</button>
            </div>
            <div className="banner-image">
                <img src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;