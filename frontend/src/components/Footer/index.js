import React from 'react';
import './Footer.css';

export default function Footer() {

  return (
    <div className="footer">
      <p className="footer-name">
        Kevin Pitzer
      </p>
      <div className="footer-links">
        <a target="_blank" href="https://github.com/KevKodes">
          <i className="fab fa-github fa-3x"></i>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/kevin-pitzer/">
          <i className="fab fa-linkedin fa-3x"></i>
        </a>
      </div>
    </div>
  )
}