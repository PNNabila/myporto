import React from 'react';
import { FaHeart } from 'react-icons/fa';
import './Preloader.css';

const Preloader = () => {
    return (
        <div className="preloader-container">
            <div className="preloader-content">
                {/* Logo / Text Brand */}
                <h1 className="brand-text">Nahda<span className="dot">.</span></h1>

                {/* Icon Heart Berdetak */}
                <div className="heart-wrapper">
                    <FaHeart className="loading-heart" />
                </div>

                {/* Loading Bar Tipis */}
                <div className="loading-bar-container">
                    <div className="loading-bar"></div>
                </div>

                <p className="loading-text">Loading...</p>
            </div>
        </div>
    );
};

export default Preloader;