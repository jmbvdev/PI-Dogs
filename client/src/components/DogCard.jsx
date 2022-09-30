import React from 'react';
import { useHistory } from 'react-router-dom';
import s from"../styles/dogCard.module.css"

const DogCard = ({name,id,weight,image,temperaments}) => {
 
const history= useHistory()
function handleClickCard() {
    history.push(`/details/${id}`)    
}

    return (
        <div onClick={handleClickCard} className={s.card}>  
                   <img className={s.image} src={image} alt="" />
                   <strong>{name}</strong>
                   <p>Temperament: {id.length>4?temperaments?.map(t=>t.name+ ", "):`${temperaments}`}</p>
                   <p><strong>Weight: </strong>{weight}</p>
        </div>
    );
};

export default DogCard;