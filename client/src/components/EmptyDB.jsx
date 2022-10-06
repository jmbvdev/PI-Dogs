import React from 'react';
import s from "../styles/emptyDB.module.css"

const EmptyDB = () => {
    return (
        <div className={s.empty}>
            <h1>The database is empty</h1>
            
        </div>
    );
};

export default EmptyDB;