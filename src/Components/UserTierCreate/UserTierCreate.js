import {useState} from 'react'
import '../../styles/style.css'
import SearchAnime from '../SearchAnime/SearchAnime'
import SearchHeader from '../SearchResults/SearchHeader'
import SearchResults from '../SearchResults/SearchResults'
import  TileHolderForm from '../TileHolders/TileHolerForm'
const UserTierCreate = () => {
    const [newTier, setNewTier] = useState(null)
    const [tierNumber, setTierNumber ] = useState(5)
    const [title , setTitle] = useState("")
    const colorInputs = Array.from({length:tierNumber})
    const [tileImport, setTileImport] = useState([])

    
    const tierInfoFoam = async () => {
       
       await setNewTier(
                 {
            title: title,
            number_of_tiers: tierNumber,
            tier_info:  defaultTiers
                ,
            tiles: tileImport

        })
         console.log(newTier)
    }
    const addData = async () => {
        console.log(newTier)
        try {
            const res = await fetch('https://better-tier.herokuapp.com/tiers', {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(newTier)
            })
            console.log("do")
            
          } catch (err) {
            console.log(err);
          } 
    }
    
    const defaultTiers = [
        {color:"#DAF7A6",
        tiername:"S"
        },
        {color:"#FFC300",
        tiername:"A"},
        {color:"#FF5733",
        tiername:"B"},
        {color:"#00C7B6",
        tiername:"C"},
        {color:"#0062C7",
        tiername:"D"},
        {color:"#2200C7",
        tiername:"E"},
        {color:"#932C74",
        tiername:"F"},
        {color:"#C70039",
        tiername:"G"},
        {color:"#900C3F",
        tiername:"H"},
        {color:"#581845",
        tiername:"I"},
    ]



    //Anime Search Api
    const [images, setImages] = useState(null)
    const searchOptions = {
      api: 'https://api.jikan.moe/v3',
      endpoint: '/search',
      type: '/character'
    };
    const [ tileData, getTileData] = useState([]); 
    const [searchString, setSearchString] = useState('');
    const [lastSearch, setLastSearch] =useState('')
    
 
    const getname = (image) => {
        if (image.anime[0] === undefined) {
            return image.manga[0].name
        } else{
            return image.anime[0].name
        }
    }
 async function animeTileMaker (tile) {
    getTileData([...tileData, tile])
    let markTile = tile

    importAnimeTile(markTile)

  }
   async function importAnimeTile (tile){
            await setTileImport([...tileImport, {
                image_url: tile.image_url,
                name: tile.name,
                source:getname(tile)
            }])
      
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
  
    function postTier(event) {
        event.preventDefault();
        tierInfoFoam()
        addData()
    }
  

    return(
        <div>
            <h1>Make Your Tier List</h1>
            <form onSubmit={postTier}>
                <div>
                    <label for="title">Name your tierlist!</label>
                    <input type="text" value={title} placeholder="Title"onChange={(e) => setTitle(e.target.value)}></input>
                </div>
                <div>
                    <label for="tiers">How Many Tiers Would You Like?</label>
                    <input type="number" placeholder="2-10" name="tiers" min="2" max="10" defaultValue="5" value={tierNumber} onChange={(e) => setTierNumber(e.target.value)} ></input>
                    {colorInputs.map((group, index) => {
                        return  (<div> <label for={index}>Color for Tier {index + 1} </label>
                        <input type="color" id={index} placeholder={defaultTiers[index].color} onChange={(e) =>  defaultTiers[index].color= e.target.value} ></input>
                        <input type="text"  placeholder={defaultTiers[index].tiername} onChange={(e) => defaultTiers[index].tiername = e.target.value}></input> 
                        </div>)                                
                    })}
                 </div>
                 <h3>Tiles</h3>
                    {/*Create tile form */}
                <div> 
                    
                   </div>
                <div className="galleryt">
                <TileHolderForm tile={tileData} >
                    
              </TileHolderForm>

                </div>
                <input type="submit"></input>
            
            </form>
            <div className="tier-layout">
                <div className='anime-search'>
                    <SearchHeader lastSearch={lastSearch} />
                    <SearchAnime
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        searchString={searchString}
                    />
                    <SearchResults results={images} tile={animeTileMaker}/>
                </div>
            </div>
        </div>
    )
}

export default UserTierCreate;