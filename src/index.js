import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

Object.defineProperty(Array.prototype, 'chunk', {
  value: function(chunkSize) {
    var ary = [];
    for (var i=0; i<this.length; i+=chunkSize)
          ary.push(this.slice(i,i+chunkSize));
    return ary;
  }
});

