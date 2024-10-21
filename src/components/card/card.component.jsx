import React from 'react';
import './card.component.css';

const Card = ({ title, value, image, percentage }) => {
    return(
        <div className="card">
            <p className='title'><strong>{title}</strong></p>
            <div className="card-detail">
                <p><strong>{value}</strong></p>
                <img src={image} alt='' className='card-image' />
                <p>{percentage}</p>
            </div>
        </div>
    )
}

export default Card;