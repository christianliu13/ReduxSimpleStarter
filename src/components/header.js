import React from 'react';
import SearchBar from '../containers/search_bar';

export default function Header() {
  return (
    <header>
      <h1 id="title">My Weather App</h1>
      <SearchBar />
    </header>
  );
}