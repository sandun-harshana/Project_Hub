import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ padding: '1rem', background: '#f0f0f0' }}>
      <nav>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/marketplace" style={{ marginRight: '1rem' }}>Marketplace</Link>
        <Link to="/submit-project">Submit Project</Link>
      </nav>
    </header>
  );
};

export default Header;