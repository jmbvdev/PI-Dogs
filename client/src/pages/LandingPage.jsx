import React from "react";
import { Link, useHistory } from "react-router-dom";
import s from "../styles/ladingPage.module.css";
import dog from "../images/dogi.png";
import { useDispatch } from "react-redux";
import { changeLoading } from "../redux/actions";


const LandingPage = () => {
  const dispatch= useDispatch()
  const histoy = useHistory();
  function handleClick() {
    histoy.push("/home");
   dispatch(changeLoading(false))
  }
  return (
    <div className={s.landing}>
      <div className={s.text_container}>
        <h1 className={s.title}>PuppypediA</h1>
        <p>
          Learn about the characteristics and behaviors of your dog's breed and
          group.
        </p>
        <div className={s.icon_container}>
          <button onClick={handleClick} className={s.btn}>
            <Link to="/home">Entry</Link>
          </button>
          <a
            href="https://github.com/jmbvdev/PI-Dogs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
      <img className={s.image} src={dog} alt="dog" />
    </div>
  );
};

export default LandingPage;
