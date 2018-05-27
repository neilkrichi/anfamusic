import React, { Component } from 'react';
import Typist from 'react-typist';
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
        <h1 className="app-title">ANFA</h1>
        <div className='contact'>
          <Typist startDelay={2500} cursor={cursor} avgTypingDelay={50}>
            <a href="mailto:license@hivernagerecords.com?subject=Licensing Inquiry">licence@hivernagerecords.com</a>
            </Typist>
            <Typist startDelay={2500} cursor={cursor} avgTypingDelay={60}>
            <a href="mailto:press@hivernagerecords.com?subject=Press Inquiry">press@hivernagerecords.com</a>
          </Typist>
        </div>
      </div>
    );
  }
}
