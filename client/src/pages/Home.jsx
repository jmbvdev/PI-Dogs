import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux"
import { useHistory} from "react-router-dom";
import DogCard from '../components/DogCard';
import SearchDogs from '../components/SearchDogs.jsx';
import { filterByOrigin, filterByRaces, filterByTemperaments, getDogs, getTemperaments, orderByAlphabet, orderByWeight } from '../redux/actions';
import s from "../styles/home.module.css"
import icon from "../images/dogiIcon.png"
const Home = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const dogs = useSelector((state) => state.dogs);
  const temperaments = useSelector((state) => state.temperaments);
  const [alphabet, setalphabet] = useState(true);
  const [weight, setWeight] = useState(true);
  const[page, setPage]=useState(1)
  

  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperaments());
  }, []);
  function handleClickCreate() {
    history.push("/create");
  }

  function filterTemperaments(e) {
    dispatch(filterByTemperaments(e.target.value));
    setPage(1)
  }
  function filterRaces(e) {
    dispatch(filterByRaces(e.target.value));
    setPage(1)
  }
  function filterOrigin(e) {
    dispatch(filterByOrigin(e.target.value));
    setPage(1)
  }
  function orderAlphabetical() {
    setalphabet(!alphabet);
    dispatch(orderByAlphabet(alphabet));
    setPage(1)
  }
  function orderWeight() {
    setWeight(!weight);
    dispatch(orderByWeight(weight));
    setPage(1)
  }

  const temperamentsUnic = [];
  for (let i = 0; i < temperaments.length; i++) {
    temperamentsUnic.push(temperaments[i].name);
  }
  const temperamentSelect = [...new Set(temperamentsUnic)];

  const dogsUnic = [];
  for (let i = 0; i < dogs.length; i++) {
    dogsUnic.push(dogs[i].name);
  }
  const raceSelect = [...new Set(dogsUnic)];

  //Pagination
  const dogsPerPage=8;
  const lastIndex=page*dogsPerPage;
  const firstIndex=lastIndex-dogsPerPage; 
  const dogsPaginated=dogs.slice(firstIndex,lastIndex);
  const totalPages=Math.ceil(dogs.length/dogsPerPage);
  let pagesNumber=[]
  for (let i = 0; i < totalPages; i++) {
    pagesNumber.push(i)
  }


  return (
    <div className={s.container}>
      <header className={s.header}>
        <div className={s.header_search}>
          <div className={s.logo}>
          <img src={icon} alt="dog-icon" />
          <h2>PuppypediA</h2>
          </div>
          <div className={s.search}>
            <SearchDogs />
          </div>

          <button onClick={handleClickCreate}>Create dog</button>
        </div>
        <div className={s.filters}>
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
          <button onClick={orderAlphabetical}>{alphabet? "A-Z": "Z-A"}</button>
          <button onClick={orderWeight}>Weight</button>
        </div>
      </header>
      <div className={s.pages}>
      {
        page!==1&&<button onClick={()=>setPage(page-1)}>Previous</button>
      }
      {
        pagesNumber.map(n=>n>0?<button onClick={()=>setPage(n)} key={n}>{n}</button>:null)
      }
      {
        page!==totalPages&& <button onClick={()=>setPage(page+1)}>Next</button>
      }

      </div>
      
      <main className={s.cards}>
        {dogs &&
          dogsPaginated?.map((dog) => (
            <DogCard
              key={dog.id}
              id={dog.id}
              name={dog.name}
              weight={dog.weight}
              height={dog.height}
              yearsLife={dog.yearsLife}
              image={dog.image}
              temperaments={dog.temperaments}
            />
          ))}
      </main>
     
  
    </div>
  );
};

export default Home;