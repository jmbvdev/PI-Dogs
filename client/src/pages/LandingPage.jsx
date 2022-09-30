import React from 'react';
import { Link } from 'react-router-dom';
import s from "../styles/ladingPage.module.css"
import dog from "../images/dogi.png"

const LandingPage = () => {
    return (
        <div className={s.landing}>
            <div className={s.text_container}>
                <h1 className={s.title}>PuppypediA</h1>
                <p>Learn about the characteristics and behaviors of your dog's breed and group. </p>
                <div className={s.icon_container}>
                  <button className={s.btn}><Link to="/home">Entry</Link></button>
                  <i class="fa-brands fa-github"></i>

                </div>

             
            </div>
            <img className={s.image} src={dog} alt="dog" />

        </div>
    );
};

export default LandingPage;