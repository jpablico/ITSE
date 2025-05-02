import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="brand">
        <img src="/src/assets/Weatho.png" alt="Weatho Logo" className="brand-logo" />
      <h1 className="brand-name" alt="Weatho">Weatho</h1>
      </div>
      <nav className="nav">
        
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