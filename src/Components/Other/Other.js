import Layout from '../TierContainer/TierContainer'
import TileHolder from '../TileHolders/TileHolder'
import SearchResults from "../SearchResults/SearchResults"
import SearchAnime from "../SearchAnime/SearchAnime";
import React, { useState } from 'react';
import SearchHeader from "../SearchResults/SearchHeader"
import { DragDropContext} from 'react-beautiful-dnd';


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



  
  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(tileData);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    getTileData(items);
    console.log(result)
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
        <DragDropContext onDragEnd={handleOnDragEnd}>
           
                
            <Layout id="tier1"></Layout>
            <Layout id={"tier2"}></Layout>
            <Layout id={"tier3"}></Layout> 
            
              
              <TileHolder tile={tileData} dropId={"holder"} >
              
              </TileHolder>
            
          </DragDropContext>
        </div>
      </div>
    </div>
  );
}

export default Other;
