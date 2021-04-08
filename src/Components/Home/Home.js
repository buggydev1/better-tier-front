import SearchResults from "../SearchResults/SearchResults"
import SearchAnime from "../SearchAnime/SearchAnime";
import React, { useState, useEffect } from 'react';
import SearchHeader from "../SearchResults/SearchHeader"
function Home() {
  const [images, setImages] = useState(null)
  const searchOptions = {
    
    limit: 25,
    rating: 'G',
    api: 'https://api.jikan.moe/v3',
    endpoint: '/search',
    type: '/character'
  };



  const [searchString, setSearchString] = useState('');
  const [lastSearch, setLastSearch] =useState('')
  // useEffect(() => {
  //   getImages(searchString);
  // }, []);
  function getImages(searchString) {
   
    /* Build a URL from the searchOptions object */
    const url = `${searchOptions.api}${searchOptions.endpoint}${searchOptions.type}?q=${searchString}`;
  
    fetch(url)
      .then(response => response.json())
      .then(response => {
        
        setImages(response.results);
        setLastSearch(searchString);
        setSearchString('')
      })
      .catch(console.error);
  }

  function handleChange(event) {
    setSearchString(event.target.value);
    
  }
  
  function handleSubmit(event) {
   
    event.preventDefault();
    getImages(searchString);
  }
  return (
    <div className="App">
      <h1>Hello Home</h1>
      <SearchHeader lastSearch={lastSearch} />
      <SearchAnime
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      searchString={searchString}
      />
      <SearchResults results={images} />
    </div>
  );
}

export default Home;
