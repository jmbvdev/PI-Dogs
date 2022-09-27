import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux"
import { useHistory} from "react-router-dom";
import DogCard from '../components/DogCard';
import { getDogs } from '../redux/actions';


const Home = () => {
const dispatch= useDispatch();
let history = useHistory();
const dogs= useSelector(state=>state.dogs)

useEffect(()=>{
dispatch(getDogs())
},[])
function handleClickCreate() {
    history.push("/create");
  }



    return (
        <div>
            <header>
                <div>
                    <h1>Dogs</h1>
                    <div>
                        <input type="text" />
                        <button>Search</button>
                     </div>

                    <button onClick={handleClickCreate}>Create dog</button>
                </div>
                <div>
                    <select>
                        <option value="funny">Temperaments</option>
                    </select>
                    <select>
                         <option value="bulldog">Race</option>
                    </select>
                    <button>A-Z</button>
                    <button>Weight</button>
                </div>
            </header>
            <main>
                 {
                   dogs&& dogs?.map(dog=>(
                        <DogCard
                        key={dog.id}
                        id={dog.id}
                        name={dog.name}
                        weight={dog.weight}
                        // height={dog.height}
                        // yearsLife={dog.yearsLife}
                        image={dog.image}
                        temperaments={dog.id.length>4?dog.temperaments?.[0]?.name:dog.temperaments}
                        />
                    ))
                } 
            </main>
            
        </div>
    );
};

export default Home;