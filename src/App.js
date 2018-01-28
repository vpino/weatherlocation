import React, { Component } from 'react';
import LocationList from './components/LocationList';
import './App.css';
import 'antd/dist/antd.css'; 

const cities = [
	'Los Teques,ve',
	'Buenos Aires,ar',
	'Caracas,ve',
];

class App extends Component {

  handleSelectionLocation = city => {
  	console.log(`handleSelectionLocation ${city}`);
  }

  render() {
    return (
      <div className="App">
        <LocationList 
        	cities={cities} 
        	onSelectedLocation={this.handleSelectionLocation} />
      </div>
    );
  }
}

export default App;
