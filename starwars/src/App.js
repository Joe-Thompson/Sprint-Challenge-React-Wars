import React, { useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import CharacterCard from "./components/CharacterCard";
import Header from "./components/Header";

const App = () => {

  const [person, setPerson] = useState([]);

  useEffect(() => {
      axios
          .get('https://swapi.co/api/people')
          .then(res => setPerson(res.data.results))
          .catch(err => console.log(err))
  },[]);

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <Header/>
        {person.map((item, index) => {
            return (
                <CharacterCard index={index} key={index} data={item} />
            )
        })}
    </div>
  );
}

export default App;
