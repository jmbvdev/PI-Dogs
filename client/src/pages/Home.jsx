import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux"
import { useHistory} from "react-router-dom";
import DogCard from '../components/DogCard';
import SearchDogs from '../components/SearchDogs.jsx';
import { filterByOrigin, filterByRaces, filterByTemperaments, getDogs, getTemperaments } from '../redux/actions';

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
  function filterRaces(e) {
    dispatch(filterByRaces(e.target.value));
  }
  function filterOrigin(e) {
    dispatch(filterByOrigin(e.target.value));
  }

  
  const temperamentsUnic=[]
  for (let i = 0; i < temperaments.length; i++) {
   temperamentsUnic.push(temperaments[i].name)
   
  }
 const temperamentSelect=[...new Set(temperamentsUnic)]

const dogsUnic=[]
for (let i = 0; i < dogs.length; i++) {
 dogsUnic.push(dogs[i].name)
}
const raceSelect=[...new Set(dogsUnic)]

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
              {temperamentSelect?.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div className="filter-container">
            <select
              name="filterByRace"
              defaultValue={"default"}
              onChange={(e) => filterRaces(e)}
            >
              <option value="all">All races</option>
              {raceSelect?.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>
          <div className="filter-container">
            <select
              name="filterByOrigin"
              defaultValue={"default"}
              onChange={(e) => filterOrigin(e)}
            >
              <option value="all">Api and DB</option>
              <option value="api">Only Api</option>
              <option value="db">Only DB</option>
              
            </select>
          </div>
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