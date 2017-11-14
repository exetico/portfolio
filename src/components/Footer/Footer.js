import React, { Component } from 'react';
import './style/Footer.css';
var Copyright = require('react-copyright');

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
          <ul>
          <li>
              <a href="http://tobiasnordahl.dk/"
                rel="noopener noreferrer"
                target="_blank"
                className="btn btn--default">About me</a>
            </li>
            <li>
              <a href="https://github.com/exetico"
                rel="noopener noreferrer"
                target="_blank"
                className="btn btn--default">my github</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/tobias-nordahl-43b295103/"
                rel="noopener noreferrer"
                target="_blank"
                className="btn btn--default">my linkedin</a>
            </li>
          </ul>
        <div>
          <p className="copyright"><Copyright></Copyright></p>
          <p className="credits">Source code by <a href="https://github.com/interaminense" rel="noopener noreferrer" target="_blank">Adriano</a> and <a href="https://github.com/jessuircleydson" rel="noopener noreferrer" target="_blank">Jessuir</a> | Simplified by Nordahl.io</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
