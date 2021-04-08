import React from 'react';

function SearchHeader({ lastSearch }) {
  return (
    <header>
      <div className="brand">
  
  <h1>Anime Searcher</h1>
</div>
      <p className="muted">
        Showing results for <strong>{lastSearch}</strong>
      </p>
    </header>
  );
}
export default SearchHeader;