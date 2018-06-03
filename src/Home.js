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

const Home = () => {
  return (
    <div className="app">
      <img className="app-logo" src={logo} />
        {/*
          <Typist startDelay={2500} cursor={cursor} avgTypingDelay={80}>
          <a href="mailto:press@hivernagerecords.com?subject=Press Inquiry">Press</a>
          </Typist>
          <Typist startDelay={2500} cursor={cursor} avgTypingDelay={70}>
          <a href="mailto:license@hivernagerecords.com?subject=Licensing Inquiry">License</a>
          </Typist>
          */}
          <div className="container">
            <a className="link" href="mailto:press@hivernagerecords.com?subject=Press Inquiry">Press</a>
            <a className="link" href="mailto:license@hivernagerecords.com?subject=Licensing Inquiry">License</a>
          </div>

          <iframe src="https://open.spotify.com/follow/1/?uri=spotify:artist:757AjSPjO6nQZgHR9lsVst&size=basic&theme=light&show-count=0"
            allowtransparency="true" >
          </iframe>
      </div>
    );
  }

  export default Home;
