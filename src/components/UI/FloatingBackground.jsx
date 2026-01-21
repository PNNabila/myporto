import React from 'react';
import { FaHeart, FaStar } from 'react-icons/fa';
import { GiSwan, GiFlowerEmblem, GiButterfly } from 'react-icons/gi'; // Ganti GiCherries jadi GiButterfly
import './FloatingBackground.css';

const FloatingBackground = () => {
    return (
        <div className="floating-bg-container">
            {/* Layer Icon Melayang */}
            <div className="floating-icons">
                <GiSwan className="float-icon icon-swan" />
                <GiButterfly className="float-icon icon-butterfly" /> {/* Ganti Cherry jadi Kupu-kupu */}
                <GiFlowerEmblem className="float-icon icon-flower" />
                <FaHeart className="float-icon icon-heart" />
                <FaStar className="float-icon icon-star" />
                <GiSwan className="float-icon icon-swan-2" />
                <GiFlowerEmblem className="float-icon icon-flower-2" />
            </div>
        </div>
    );
};

export default FloatingBackground;