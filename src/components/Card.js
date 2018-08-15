import React from 'react';

const Card = ({id, name, email}) => {
    return (
        <div className="card">
            <img className="card__image" src={`https://robohash.org/${id}200x200`} alt="robot"/>
            <div>
                <h2 className="card__name">{name}</h2>
                <p className="card__email">{email}</p>
            </div>
        </div>
    )
}

export default Card