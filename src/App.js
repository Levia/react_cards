import React, { Component } from 'react';
import Card from './Card.js';
import Pagination from './Pagination.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id='container'>
          <div id='cards_container'>
            <div id='cards'>
              <div className='row'>
                <Card />
                <Card />
                <Card />
              </div>
              <div className='row'>
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </div>
          <Pagination />
        </div>
      </div>
    );
  }
}

export default App;
