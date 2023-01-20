import React, { useEffect, useState } from "react";
import axios from 'axios';//to use GET request from API

import './App.css'

const App = () => {
  const [state, setState] = useState('');
  const { advice } = state;
  const fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
    .then((response)=>{
        const { advice } = response.data.slip;
        setState({advice});
        //state = { advice };
        //or we can use { advice } instead { advice: advice }
        //cause of the rule if property and value has the same name
    })
    .catch((error)=>{
        console.log(error);
    });
  }
  useEffect(()=>{}, [state]);
  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="button" onClick={fetchAdvice}>
          <span>GIVE ADVICE</span>
        </button>
      </div>
    </div> 
  );
}

export default App;