import React from "react";
import axios from 'axios';//to use GET request from API

import './App.css'

class App extends React.Component {
  state = { advice:'' };

  componentDidMount(){
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
    .then((response)=>{
        const { advice } = response.data.slip;
        this.setState({ advice });
        //or we can use { advice } instead { advice: advice }
        //cause of the rule if property and value has the same name
    })
    .catch((error)=>{
        console.log(error);
    });
  }

  render () {
    const { advice } = this.state;

    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{advice}</h1>
          <button className="button" onClick={this.fetchAdvice}>
            <span>GIVE ADVICE</span>
          </button>
        </div>
      </div>
      
    );
  }
}

export default App;