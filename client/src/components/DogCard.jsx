import React from 'react';
import { useHistory } from 'react-router-dom';
import s from"../styles/dogCard.module.css"

const DogCard = ({name,id,weight,image,temperaments}) => {
 
const history= useHistory()
function handleClickCard() {
    history.push(`/details/${id}`)    
}

    return (
        <div onClick={handleClickCard}>
            <ul className='dog-list'>
                <li className='dog-item'>
                   <h4>{name}</h4>
                   <img className={s.image} src={image} alt="" />
                   <p>Temperament: {id.length>4?temperaments.map(t=>t.name+ ", "):`${temperaments}`}</p>
                   {/* <p><strong>Temperament: </strong>{temperaments&&temperaments}</p>  */}
                   <p><strong>Weight: </strong>{weight}</p>
                </li>
            </ul>
        </div>
    );
};

export default DogCard;