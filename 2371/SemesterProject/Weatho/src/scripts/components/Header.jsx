import React from 'react';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <h1 className="logo">Weatho</h1>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/forecast">Forecast</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;