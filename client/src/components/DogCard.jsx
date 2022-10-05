import React from "react";
import { useHistory } from "react-router-dom";
import s from "../styles/dogCard.module.css";

const DogCard = ({ name, id, weight, image, temperaments }) => {
  const history = useHistory();
  function handleClickCard() {
    history.push(`/details/${id}`);
  }

  return (
    <div onClick={handleClickCard} className={s.card}>
      <img className={s.image} src={image} alt="" />
      <div className={s.text}>
        <strong>{name}</strong>
        <p className={s.weight}>
          <strong>Weight: </strong>
          {weight}
        </p>
        <p className={s.temperaments}>
          <strong>Temperament:</strong>{" "}
          {id.length > 4
            ? temperaments?.map((t) => t.name + ", ")
            : `${temperaments}`}
        </p>
      </div>
    </div>
  );
};

export default DogCard;
