import React, { Component } from 'react';
import Card from './Card.js';
import './CardsContainer.css';

const photosURL = 'https://jsonplaceholder.typicode.com/photos?_limit=9&_page=1&_sort=title&_order='
const chunkSize = 3;
const rows = 2;

class CardsContainer extends Component {

  constructor() {
    super();
    this.state = {
      cards: [],
      order: 'asc',
      loading: true
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
     this.setState({cards: res.chunk(chunkSize), loading: false});
   })
  }

  sort() {
    const order = this.state.order === 'asc' ? 'desc' : 'asc';
    console.log(order);
    this.fetchPhotos(order).then(res => {
      const cards = res.chunk(chunkSize);
      this.setState({cards: cards, order: order})
    });
  }

  sortIcon() {
    return this.state.order === 'asc' ? 'fa fa-arrow-up' : 'fa fa-arrow-down'
  }

  render() {
    const { loading } = this.state;

    if(loading) {
      return (
        <div id='cards_container'>
          <div id='cards'>
            <span className='fa fa-spinner fa-spin'></span>
          </div>
        </div>
      )
    }

    return (
      <div id='cards_container'>
        <div id='cards'>
          <a href='#' onClick={this.sort} className="sort">
            <span>Title</span>
            <span className={this.sortIcon()}></span>
          </a>
          {
            this.state.cards.map((cards, index) => (
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
