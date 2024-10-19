import React from 'react';
import './card.component.jsx';

const Card = () => {
    <div className='card'>
        <h1>Welcome! Here's your summary</h1>
        <div className="cards">
            <div className="card">
                <p><strong>Total Events</strong></p>
                <div className="card-detail">
                    <p><strong>100,000</strong></p>
                    <p></p>
                </div>
            </div>
            <div className="card">
                <p><strong>Active Speakers</strong></p>
                <div className="card-detail">
                    <p><strong>25</strong></p>
                    <p></p>
                </div>
            </div>
            <div className="card">
                <p><strong>Total Registrations</strong></p>
                <div className="card-detail">
                    <p><strong>300</strong></p>
                    <p></p>
                </div>
            </div>
            <div className="card">
                <p><strong>Total Revenue</strong></p>
                <div className="card-detail">
                    <p><strong>$500,000</strong></p>
                    <p></p>
                </div>
            </div>
        </div>
    </div>
}

export default Card;