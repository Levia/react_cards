import React, { Component } from 'react';
import Card from './Card.js';
import './CardsContainer.css';

const photosURL = 'https://jsonplaceholder.typicode.com/photos?_limit=1000&_page=1&_sort=title&_order='

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
     this.setState({cards: res, loading: false});
   })
  }

  sort() {
    const order = this.state.order === 'asc' ? 'desc' : 'asc';
    console.log(order);
    const cards = this.state.cards.sort(this.compare(order))
    this.setState({cards: cards, order: order})
  }

  compare(order) {
    return (a,b) => {
      if (a.title < b.title) {
          return order === 'asc' ? -1 : 1;
      }
      if (a.title > b.title) {
          return order === 'asc' ? 1 : -1;
      }
      return 0;
    }
  }

  sortIcon() {
    return this.state.order === 'asc' ? 'fa fa-arrow-up' : 'fa fa-arrow-down'
  }

  render() {
    const { loading } = this.state;

    if(loading) {
      return (
        <div id='cards_container'>
          <div id='cards' className='loading'>
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
            this.state.cards.map((card, index) => (
              <Card key={card.id} card={card}/>
            ))
          }
        </div>
      </div>
    );
  }
}

export default CardsContainer;
