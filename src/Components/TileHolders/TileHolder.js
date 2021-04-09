



export default function TileHolder ({tile}){
  
    return (
        
        <div className='tile-holder'>
            {tile.map((image)=>{
                return  <div className="tile-render" >
                        <span>Name: {image.name} <br/>Anime: {image.anime[0].name} </span>
                        <img className='tile' src={image.image_url} alt={image.name} />
                        </div>
            })}
           
        </div>
            
 
    )
}