import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import DogCard from "../components/DogCard";
import SearchDogs from "../components/SearchDogs.jsx";
import {
  filterByOrigin,
  filterByRaces,
  filterByTemperaments,
  getDogs,
  getTemperaments,
  orderByAlphabet,
  orderByWeight
} from "../redux/actions";
import s from "../styles/home.module.css";
import icon from "../images/dogiIcon.png";
import Loading from "../components/Loading";
import Config from "../components/Config";
import EmptyDB from "../components/EmptyDB";
const { temperamentsUnic, dogsUnic } = require("../utils/unics");

const Home = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.dogs);
  const allDogs = useSelector((state) => state.allDogs);
  const isLoading = useSelector((state) => state.loading);
  const temperaments = useSelector((state) => state.temperaments);
  const dark = useSelector((state) => state.dark);
  const [alphabet, setAlphabet] = useState(true);
  const [weight, setWeight] = useState(true);
  const [page, setPage] = useState(1);
  const [config, setConfig] = useState(false);
  const [dogsPerPage, setDogsPerPage] = useState(8);
  const buffering = useSelector((state) => state.buffering);


  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperaments());

  }, [dispatch]);

  //Handler Click----------------------------------------
  function handleClickCreate() {
    history.push("/create");
  }
  function handleClickImage() {
    history.push("/");
  }
  function handleConfig() {
    setConfig(!config);
  }

  // Filters---------------------------------------
  function filterTemperaments(e) {
    dispatch(filterByTemperaments(e.target.value));
    setPage(1);
  }
  function filterRaces(e) {
    dispatch(filterByRaces(e.target.value));
    setPage(1);
  }
  function filterOrigin(e) {
    dispatch(filterByOrigin(e.target.value));
    setPage(1);
  }
  function orderAlphabetical() {
    setAlphabet(!alphabet);
    dispatch(orderByAlphabet(alphabet));
    setPage(1);
  }
  function orderWeight() {
    setWeight(!weight);
    dispatch(orderByWeight(weight));
    setPage(1);
  }

  //-------------Pagination--------------------------------------------

  const lastIndex = page * dogsPerPage; 
  const firstIndex = lastIndex - dogsPerPage; 
 const dogsPaginated = dogs.length? dogs.slice(firstIndex, lastIndex):dogs;
  const totalPages = Math.ceil(dogs.length / dogsPerPage);
  let pagesNumber = [];
  for (let i = 0; i < totalPages; i++) {
    pagesNumber.push(i);
  }

  //---------------------------------------------------------------


  return (
    <div className={dark ? s.dark_container : s.container}>
      <header className={s.header}>
        <div className={dark ? s.dark_header_search : s.header_search}>
          <img
            onClick={handleClickImage}
            className={s.logo}
            src={icon}
            alt="dog-icon"
          />
          <div className={s.search}>
            <h1>PuppypediA</h1>
            <SearchDogs dark={dark} buffering={buffering}/>
            {
              buffering&&
            <img className={s.buffer} src="https://thumbs.gfycat.com/ImpressiveGenuineHen-max-1mb.gif" alt="buffer" />
            }
          </div>
          <button
            className={dark ? s.dark_create : s.create}
            onClick={handleClickCreate}
          >
            <i className="fa-solid fa-plus"></i>Add dog
          </button>
        </div>
        <div className={s.filters}>
          <div className={dark ? s.dark_select : s.select}>
            <select
              name="filterBytemperament"
              defaultValue={"default"}
              onChange={(e) => filterTemperaments(e)}
            >
              <option value="all">Temperaments</option>
              {temperamentsUnic(temperaments)?.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div className={dark ? s.dark_select : s.select}>
            <select
              name="filterByRace"
              defaultValue={"default"}
              onChange={(e) => filterRaces(e)}
            >
              <option value="all">Breeds</option>
              {dogsUnic(dogs)?.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>
          <div className={dark ? s.dark_select : s.select}>
            <select
              name="filterByOrigin"
              defaultValue={"default"}
              onChange={(e) => filterOrigin(e)}
            >
              <option value="all">DB-API</option>
              <option value="api">Only Api</option>
              <option value="db">Only DB</option>
            </select>
          </div>
          <button
            className={dark ? s.dark_alpha : s.alpha}
            onClick={orderAlphabetical}
          >
            {alphabet ? (
              <i className="fa-solid fa-arrow-up-a-z"></i>
            ) : (
              <i className="fa-solid fa-arrow-down-z-a"></i>
            )}
          </button>
          <button
            className={dark ? s.dark_alpha : s.alpha}
            onClick={orderWeight}
          >
            <i className="fa-solid fa-weight-hanging"></i>
            {weight ? (
              <i className="fa-solid fa-up-long"></i>
            ) : (
              <i className="fa-solid fa-down-long"></i>
            )}
          </button>
        </div>
      </header>
      <div className={s.pages}>
        {page !== 1 && (
          <button
            className={dark ? s.dark_page_number : s.page_number}
            onClick={() => setPage(page - 1)}
          >
            <i className="fa-solid fa-circle-left"></i>
          </button>
        )}
        {pagesNumber.map((n) =>
          n > 0 ? (
            <button
              className={dark ? s.dark_page_number : s.page_number}
              onClick={() => setPage(n)}
              key={n}
            >
              {n}
            </button>
          ) : null
        )}
        {page !== totalPages && (
          <button
            className={dark ? s.dark_page_number : s.page_number}
            onClick={() => setPage(page + 1)}
          >
            <i className="fa-solid fa-circle-right"></i>
          </button>
        )}
      </div>

      <main className={s.cards}>
        {allDogs.length && !dogs.length ? (
         <EmptyDB dogs={dogs} allDogs={allDogs}/>
        ) : (
          <>
            {isLoading && dogs.length ? (
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
              ))
            ) : (
              <Loading />
            )}
          </>
        )}
      </main>
      {config ? (
        <Config
          setConfig={setConfig}
          setDogsPerPage={setDogsPerPage}
          dark={dark}
        />
      ) : (
        <div className={dark ? s.dark_config : s.config}>
          <button onClick={handleConfig}>
            <i className="fa-solid fa-gear"></i>
          </button>
        </div>
      )}
      <div className={s.bone}>
        <span>#{page}</span>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Bone_noun_71979_cc.svg/1280px-Bone_noun_71979_cc.svg.png"
          alt="bone"
        />
      </div>
    </div>
  );
};

export default Home;
