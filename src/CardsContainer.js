import React, { Component } from 'react';
import Card from './Card.js';
import './CardsContainer.css';

const photosURL = 'https://jsonplaceholder.typicode.com/photos?_limit=9&_page=1&_sort=title&_order=asc'
const chunkSize = 3;

class CardsContainer extends Component {

  constructor() {
    super();
    this.state = { cards: [] }
  }

  fetchPhotos() {
    return fetch(photosURL)
      .then(res => res.json())
      .catch(error => { console.log(error) });
  }

  componentDidMount() {
   this.fetchPhotos().then(res => {
     this.setState({cards: res.chunk(chunkSize)})
   })
  }

  render() {
    return (
      <div id='cards_container'>
        <div id='cards'>
          {
            this.state.cards.slice(0,2).map((cards, index) => (
              <div className='row' key={index}>
                { cards.map(card => (
                    <Card key={card.albumId} card={card}/> )
                  )
                }
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default CardsContainer;
