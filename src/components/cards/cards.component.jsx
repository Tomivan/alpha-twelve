import React from 'react';
import Card from '../card/card.component';
import Up from '../../assets/images/up.svg';
import Down from '../../assets/images/down.svg';
import './cards.component.css';

const Cards = () => {
    return(
        <div className='card-component'>
            <h1>Welcome! Here's your summary</h1>
            <div className="cards">
                <Card title="Total Events" value="100,000" image={Up} percentage='+5.0%'/>
                <Card title="Active Speakers" value="25" image={Down} percentage="-5.2%"/>
                <Card title="Total Registrations" value="300" image={Up} percentage="+5.0%" />
                <Card title="Total Revenue" value="$500,000" image={Up} percentage="+5.0%" />
            </div>
        </div>
    )
}

export default Cards;