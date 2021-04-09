import Layout from '../TierContainer/TierContainer'
import TileHolder from '../TileHolders/TileHolder'
import SearchResults from "../SearchResults/SearchResults"
import SearchAnime from "../SearchAnime/SearchAnime";
import React, { useState } from 'react';
import SearchHeader from "../SearchResults/SearchHeader"

function Other(props) {
  const [images, setImages] = useState(null)
  const searchOptions = {
    api: 'https://api.jikan.moe/v3',
    endpoint: '/search',
    type: '/character'
  };

  const [ tileData, getTileData] = useState([]); 
  const [searchString, setSearchString] = useState('');
  const [lastSearch, setLastSearch] =useState('')

function tileMaker (tile) {
  getTileData([...tileData, tile])
}

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
      <h1>{props.page}</h1>
      <header>Tier list title</header>
      <div className="tier-layout">
        <div className='anime-search'>
          <SearchHeader lastSearch={lastSearch} />
          <SearchAnime
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          searchString={searchString}
          />
          <SearchResults results={images} tile={tileMaker}/>
        </div>
        <div className="tier-maker">
          <Layout></Layout>
          <Layout></Layout>
          <Layout></Layout>
          <TileHolder tile={tileData}></TileHolder>
        </div>
      </div>
    </div>
  );
}

export default Other;
