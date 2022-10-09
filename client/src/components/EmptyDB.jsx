import React from 'react';
import s from "../styles/emptyDB.module.css"

const EmptyDB = ({dogs, allDogs}) => {
    return (
        <div className={s.empty}>
            
           
            {
                dogs.message?
                <h2>{dogs&&dogs.message}</h2>:
                typeof allDogs[0].id!=="number"?

            <h1>Can't find dogs in database</h1>:
            <h1>Database empty</h1>
        
            }   
        </div>
    );
};

export default EmptyDB;