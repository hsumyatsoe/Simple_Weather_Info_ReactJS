import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Titles from './components/titles.js';
import Form from'./components/form.js';
import Weather from './components/weather.js';

class App extends Component {
  
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {

    const Api_Key = "2d876269dc1f053a6a29612003201cc3";
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    // const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=2d876269dc1f053a6a29612003201cc3`)

    // const response = await api_call.json()

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=2d876269dc1f053a6a29612003201cc3&units=imperial`)
    .then(result => {
      return result.json()
    }).then(response => {
      console.log(response)
      if(city && country){
        this.setState({
          temperature: response.main.temp,
          city: response.name,
          country: response.sys.country,
          humidity: response.main.humidity,
          description: response.weather[0].description,
          error: ""
        })

      }else{
        this.setState({
          error: "Please enter the value...."
        })
      }
    })
  }

  render() {
    return (
      <div className="weather-div">
        <div className="title-section">
          <Titles />
        </div>
        <div className="body-section">
          <div className="form-section">
            <Form loadWeather={this.getWeather} />
          </div>
          <div className="weather-section">
            <Weather 
              temperature= {this.state.temperature}
              city= {this.state.city}
              country= {this.state.country}
              humidity= {this.state.humidity}
              description= {this.state.description}
              error= {this.state.error}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
