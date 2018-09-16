import React, { Component } from 'react';
import Card from './Card.js';
import './CardsContainer.css';

const photosURL = 'https://jsonplaceholder.typicode.com/photos?_limit=9&_page=1&_sort=title&_order='
const chunkSize = 3;

class CardsContainer extends Component {

  constructor() {
    super();
    this.state = {
      cards: [],
      order: 'asc'
    }

    this.sort = this.sort.bind(this);
  }

  fetchPhotos(order) {
    const sort_order = order || this.state.order;
    return fetch(photosURL + sort_order)
      .then(res => res.json())
      .catch(error => { console.log(error) });
  }

  componentDidMount() {
   this.fetchPhotos().then(res => {
     this.setState({cards: res.chunk(chunkSize)})
   })
  }

  sort() {
    const order = this.state.order === 'asc' ? 'desc' : 'asc';
    console.log(order);
    this.fetchPhotos(order).then(res => {
      this.setState({cards: res.chunk(chunkSize), order: order})
    });
  }

  render() {
    return (
      <div id='cards_container'>
        <a href='#' onClick={this.sort}>Title</a>
        <div id='cards'>
          {
            this.state.cards.slice(0,2).map((cards, index) => (
              <div className='row' key={index}>
                {
                  cards.map(card => (
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
