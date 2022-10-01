import React from 'react';
import s from "../styles/alert.module.css"

const AlertTemperament = ({setTemperamentAlert}) => {
   
        function handleClick() {
            setTemperamentAlert(false)
        }
    return (
        <div className={s.alert} >
            <button onClick={handleClick}><i class="fa-solid fa-xmark"></i></button>
                <i class="fa-solid fa-triangle-exclamation"></i>
                <h2>You can't add more than six temperaments!</h2>
            </div>
    );
};

export default AlertTemperament;