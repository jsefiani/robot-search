import React from "react";
import Card from './Card';
import uniqid from 'uniqid';

const CardList = ({ robots }) => {
    const cardsArray = robots.map(user => {
        return <Card key={uniqid()} id={user.id} name={user.name} email={user.email} />;
    });

    if(cardsArray.length === 0) {
        return (
            <h2>No search results found</h2>
        )
    } else {
        return (
            <div className="cards">
                {cardsArray}
            </div>
        )
    }
}

export default CardList;