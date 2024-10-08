import React from 'react';
import Card from './Card'

const CardList = ({ robots }) => {
    //tHIS ROBOT PROPS IS COMING FROM ROBOT.JS WHICH WE HAVE IMPLEMENT IN THE APP.JS
    return(
        <div>
            {
                robots.map((user, i) =>{
                    return(
                    <Card 
                    key={i} 
                    id={robots[i].id} 
                    name={robots[i].name} 
                    email={robots[i].email} 
                    username={robots[i].username} />
                    );
                })
            }
        </div>
    );
}

export default CardList;