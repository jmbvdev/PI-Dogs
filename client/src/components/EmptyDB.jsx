import React from 'react';
import s from "../styles/emptyDB.module.css"

const EmptyDB = ({dogs, allDogs}) => {
    return (
        <div className={s.empty}>
            
           
            {
                dogs.message?
                <h2>{dogs&&dogs.message}</h2>:
                typeof allDogs[0].id!=="number"?

            <h2>Can't find dog with that temperament</h2>:
            <h2>Database empty</h2>
        
            }   
        </div>
    );
};

export default EmptyDB;