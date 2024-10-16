import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="p-4 flex justify-between items-center" style={{ backgroundColor: '#008B8B' }}>
     
      <h1 className="text-white text-xl font-bold">
        <Link to="/">Recipe Finder</Link>
      </h1>
      <nav>
       
        <Link to="/" className="text-white text-sm mr-4 hover:underline">Home</Link>
        <Link to="/about-us" className="text-white text-sm hover:underline">About Us</Link>
      </nav>
    </header>
  );
};

export default Header;
