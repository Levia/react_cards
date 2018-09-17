import React, { Component } from 'react';
import LazyLoad from 'react-lazy-load';
import './Card.css';

class Card extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      albumId: props.card.albumId,
      id: props.card.id,
      title: props.card.title,
      url: props.card.url,
      thumbnailUrl: props.card.thumbnailUrl
    }
  }
  render() {
    return(
      <div className='card'>
        <div className='thumbnail'>
          <a href={this.state.url}>
            <LazyLoad>
              <img src={this.state.thumbnailUrl}></img>
            </LazyLoad>
          </a>
        </div>
        <div className='title'>
          <p>{ this.state.title }</p>
        </div>
      </div>
    )
  }
}

export default Card;
