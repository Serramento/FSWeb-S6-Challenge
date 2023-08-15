import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Header from './components/Header';
import Karakterler from './components/Karakterler';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const[karakterler, setKarakterler] = useState([]);
  useEffect(() => {
    let url= "https://swapi.dev/api/people/";
    axios.get(url)
      .then(response => {
        console.log(response.data);
        setKarakterler(response.data);
      })
      .catch(err => {
        console.log(err);
      })

  },[]);

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <Header />
      <Karakterler karakterler={karakterler} />

      
    </div>
  );
}

export default App;
