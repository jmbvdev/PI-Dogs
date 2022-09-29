import { Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import './App.css';
import LandingPage from './pages/LandingPage.jsx';
import DogDetails from './pages/DogDetails.jsx';
import CreateDog from './pages/CreateDog.jsx';

import { useEffect } from 'react';
function App() {
  useEffect(() => {
    window.process = {
      ...window.process,
    };
  }, []);
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/details/:id" component={DogDetails}/>
      <Route exact path="/create" component={CreateDog}/>
    </div>
  );
}

export default App;
