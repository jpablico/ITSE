import React from 'react';
import WeatherSearch from './WeatherSearch';

function Header() {
  return (
    <header className="header">
      <div className="brand">
        <img src="/src/assets/Weatho-logo-transparent.png" alt="Weatho Logo" className="brand-logo" />
        <h1 className="brand-name" alt="Weatho">Weatho</h1>
      </div>
    </header>
  );
}

export default Header;