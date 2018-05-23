import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';

var http = require("http");
setInterval(function() {
    http.get("http://anfamusic.herokuapp.com");
}, 1500000); // every 25 minutes

ReactDOM.render(<Home />, document.getElementById('root'));
