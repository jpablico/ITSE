import React from 'react';
import '../styles/Owl.css';

function OwlCard({ title, description, image }) {
    return (
        <div className="owl-card">
            <h2 className='owl-title'>{title}</h2>
            <p className='owl-description'>{description}</p>
            <img src={image} alt={title} />
        </div>
    );
}

export default OwlCard;