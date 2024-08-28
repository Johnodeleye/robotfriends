import React from 'react';
//this is the card that the robots are placed in 

const Card = ({name, email, id, username }) => {
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?200x200`} alt='robots'/>
            <div>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{username}</p>
            </div>
        </div>
    )
}

export default Card;