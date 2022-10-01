import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import s from "../styles/ladingPage.module.css"
import dog from "../images/dogi.png"

const LandingPage = () => {
    const histoy= useHistory()
    function handleClick() {
        histoy.push("/home")
    }
    return (
        <div className={s.landing}>
            <div className={s.text_container}>
                <h1 className={s.title}>PuppypediA</h1>
                <p>Learn about the characteristics and behaviors of your dog's breed and group. </p>
                <div className={s.icon_container}>
                  <button onClick={handleClick} className={s.btn}><Link to="/home">Entry</Link></button>
                  <a href="https://github.com/jmbvdev/PI-Dogs" target="_blank" rel="noopener noreferrer" >
                      <i className="fa-brands fa-github" ></i>
                  </a>

                </div>

             
            </div>
            <img className={s.image} src={dog} alt="dog" />

        </div>
    );
};

export default LandingPage;