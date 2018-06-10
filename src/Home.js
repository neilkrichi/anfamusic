import React, { Component } from 'react';
import logodark from './assets/logodark.eps.svg'
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
  constructor(props) {
    super(props);
    this.state = {
      dark: false,
      background: "light"
    }
  }

  toggleMode() {
    this.setState({dark: !this.state.dark})
  }

  renderLight() {
    return (
      <div className="app-light">
        <img className="app-logo" src={logo} />
        {/*<button onClick={this.toggleMode.bind(this)} className="mode">Dark</button>*/}
        <div className="container">
          <a className="link" href="mailto:press@hivernagerecords.com?subject=Press Inquiry">Media</a>
          <br/>
          <a className="link" href="mailto:licensing@hivernagerecords.com?subject=Licensing Inquiry">License</a>
        </div>

        <iframe src="https://open.spotify.com/follow/1/?uri=spotify:artist:757AjSPjO6nQZgHR9lsVst&size=basic&theme=light&show-count=0"
          allowtransparency="true" >
        </iframe>
      </div>
    )
  }

  renderDark() {
    return(
      <div className="app-dark">
        <img className="app-logo" src={logodark} />
        <button onClick={this.toggleMode.bind(this)} className="mode">Light</button>
        <div className="container">
          <a className="link-dark" href="mailto:press@hivernagerecords.com?subject=Press Inquiry">Media</a>
          <br/>
          <a className="link-dark" href="mailto:licensing@hivernagerecords.com?subject=Licensing Inquiry">License</a>
        </div>

        <iframe src="https://open.spotify.com/follow/1/?uri=spotify:artist:757AjSPjO6nQZgHR9lsVst&size=basic&theme=light&show-count=0"
          allowtransparency="true" >
        </iframe>
      </div>
    )
  }

  renderPage(){
    return  this.renderLight() 
  }

  render() {
    return(
      <div className="app">
        {this.renderPage()}
      </div>
    )
  }
}
