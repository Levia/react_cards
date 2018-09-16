import React, { Component } from 'react';
import CardsContainer from './CardsContainer.js';
import Pagination from './Pagination.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id='container'>
          <CardsContainer />
          <Pagination />
        </div>
      </div>
    );
  }
}

export default App;
