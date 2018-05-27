import React, { Component } from 'react';
import Typist from 'react-typist';
import logo from './assets/logo.eps.svg'
import './style.css';

const cursor = {
  show: true,
  blink: true,
  element: '',
  hideWhenDone: true,
  hideWhenDoneDelay: 0,
}

export default class Home extends Component {
  render() {
    return (
      <div className="app">
        <img className="app-logo" src={logo} />
        <div className='contact'>
          <Typist startDelay={2500} cursor={cursor} avgTypingDelay={60}>
            <a href="mailto:press@hivernagerecords.com?subject=Press Inquiry">Press</a>
          </Typist>
          <Typist startDelay={2500} cursor={cursor} avgTypingDelay={50}>
            <a href="mailto:license@hivernagerecords.com?subject=Licensing Inquiry">License</a>
          </Typist>
        </div>
      </div>
    );
  }
}
