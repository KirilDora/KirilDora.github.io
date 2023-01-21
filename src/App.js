import React, { useEffect, useState } from "react";
import axios from 'axios';//to use GET request from API

import './App.css'

const App = () => {

  const [advice, setAdvice] = useState('');

  useEffect(()=>{
    fetchAdvice();
  }, []);

  const fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
    .then((response)=>{
        setAdvice(response.data.slip.advice);
        console.log(response.data.slip.advice);
    })
    .catch((error)=>{
        console.log(error);
    });
  }

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