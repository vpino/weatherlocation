import React, { Component } from 'react';
import WeatherLocation from './components/WeatherLocation';
import './App.css';
import 'antd/dist/antd.css'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherLocation></WeatherLocation>
      </div>
    );
  }
}

export default App;
