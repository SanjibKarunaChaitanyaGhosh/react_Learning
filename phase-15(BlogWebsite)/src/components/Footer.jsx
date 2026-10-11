import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h2>
            Blog-<span>Website</span>
          </h2>
          <p>
            Explore ideas, learn new skills, and discover
            something new every day.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/login">Login</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Blog-Website. All rights reserved.
        </p>
        <p>Made with ❤️ by Sanjib</p>
      </div>
    </footer>
  );
};

export default Footer;