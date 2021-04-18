import React from 'react';
import CardItem from './CardItem';
import '../css/Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src="Images/Img5.jpg"
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="Adventure"
                        path="/services"/>
                        <CardItem
                        src="Images/Img6.jpg"
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="Luxury"
                        path="/services"/>
                        
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src="Images/Img1.jpg"
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="Adventure"
                        path="/services"/>
                        <CardItem
                        src="Images/Img2.jpg"
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="Luxury"
                        path="/services"/>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
