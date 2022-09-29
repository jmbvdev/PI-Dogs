import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux"
import { useHistory} from "react-router-dom";
import DogCard from '../components/DogCard';
import SearchDogs from '../components/SearchDogs.jsx';
import { filterByTemperaments, getDogs, getTemperaments } from '../redux/actions';


const Home = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const dogs = useSelector((state) => state.dogs);
  const temperaments = useSelector((state) => state.temperaments);

  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperaments());
  }, []);
  function handleClickCreate() {
    history.push("/create");
  }

  function filterTemperaments(e) {
    dispatch(filterByTemperaments(e.target.value));
  }

  return (
    <div>
      <header>
        <div>
          <h1>Dogs</h1>
          <div>
            <SearchDogs />
          </div>

          <button onClick={handleClickCreate}>Create dog</button>
        </div>
        <div>
          <div className="filter-container">
            <select
              name="filterBytemperament"
              defaultValue={"default"}
              onChange={(e) => filterTemperaments(e)}
            >
              <option value="all">All Temperaments</option>
              {temperaments?.map((t) => (
                <option key={t.id} value={t.name}>
                  {t.name}
                </option>
              ))}
            </select>
          </div>
          <select>
            <option value="bulldog">Race</option>
          </select>
          <button>A-Z</button>
          <button>Weight</button>
        </div>
      </header>
      <main>
        {dogs &&
          dogs?.map((dog) => (
            <DogCard
              key={dog.id}
              id={dog.id}
              name={dog.name}
              weight={dog.weight}
              height={dog.height}
              yearsLife={dog.yearsLife}
              image={dog.image}
              temperaments={dog.temperaments}
              // temperaments={dog.id.length>4?dog?.temperaments?.[0]?.name:dog?.temperaments}
            />
          ))}
      </main>
    </div>
  );
};

export default Home;