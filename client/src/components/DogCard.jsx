import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import s from "../styles/dogCard.module.css";

const DogCard = ({ name, id, weight, image, temperaments }) => {
  const history = useHistory();
  function handleClickCard() {
    history.push(`/details/${id}`);
  }
  const dark = useSelector((state) => state.dark);
  return (
    <div onClick={handleClickCard} className={dark?s.dark_card:s.card}>
      <img className={s.image} src={image} alt="" />
      <div className={s.text}>
        <strong>{name}</strong>
        <p className={s.weight}>
          <strong>Weight: </strong>
          {weight?weight:"10-50"}
        </p>
        <p className={s.temperaments}>
          <strong>Temperament: </strong>
          {temperaments}.
        </p>
      </div>
    </div>
  );
};

export default DogCard;
