import React, { Component } from 'react';
import Typist from 'react-typist';
import './style.css';

export default class Home extends Component {
  render() {
    return (
      <div className="app">
        <h1 className="app-title">ANFA</h1>
        <div className='contact'>
          <a href="mailto:license@hivernagerecords.com?subject=Licensing Inquiry">licence@hivernagerecords.com</a>
          <a href="mailto:press@hivernagerecords.com?subject=Press Inquiry">press@hivernagerecords.com</a>
        </div>
      </div>
    );
  }
}
