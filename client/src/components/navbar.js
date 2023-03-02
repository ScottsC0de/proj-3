import React from 'react';
import { useState } from 'react';

const Navbar = () => {
  const [searchText, setSearchText] = useState('');
  const handleSearchSubmit = (searchText) => {

  }
  return (
    <nav className='navbar'>
      <span>Hello</span>
      <form
        onSubmit={handleSearchSubmit}>
        <input
        name='search'
        type='text'
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder={'Search'}
        />
      </form>
      <a href='/'>Login</a>
    
    
    </nav>
  )
}

export default Navbar;