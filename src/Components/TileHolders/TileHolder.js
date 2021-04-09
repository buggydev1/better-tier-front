export default function TileHolder ({tile}){
    const getname = (image) => {
       if (image.anime[0] === undefined) {
           return image.manga[0].name
       } else{
           return image.anime[0].name
       }
    }
    
    return (
        
        <div className='tile-holder'>
            {tile.map((image)=>{
                return  <div className="tile-render" >
                            <span>Name: {image.name} 
                            <br/>Anime: {getname(image)} 
                            </span>
                            <img className='tile' src={image.image_url} alt={image.name} />
                        </div>
            })}
           
        </div>
            
 
    )
}