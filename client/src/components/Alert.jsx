import React from 'react';
import s from "../styles/alert.module.css"

const Alert = ({setCompleteAlert}) => {
    function handleClick() {
        setCompleteAlert(false)
    }
    return (
            <div className={s.created}>
                <span>dog successfully created</span>
                <button onClick={handleClick}><i className="fa-solid fa-rectangle-xmark"></i></button>
            </div>
       
    );
};

export default Alert;