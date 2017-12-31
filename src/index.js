import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import { provider } from 'react-redux';
import { Home, Mine,  About, Search } from './screens';

const Index = ({pathname}) => {
  switch(pathname) {
    case '/search':
     return <Search />;
     case '/about':
      return <About />;
        case '/mine':
        return <Mine />;
      default: 
      return <Home />;

     }
    }    

let pathname = window.location.pathname;


ReactDOM.render(<Index pathname={pathname} />, 
  document.getElementById('root'));

window.addEventListener('popstate', () => {
    pathname = window.location.pathname;
});

