

export default function TileHolder ({tiles,}){

     
    return (
       
           
        <div className='tile-holder' >
            
            {tiles.map((image, index)=>{
                {console.log(image)}
                return  <div key={image._id}  index={index}>
                            
                            <div className="tile-render" >
                                <span>Name: {image.name} 
                                <br/>Source: {image.source} 
                                </span>
                                <img className='tile' src={image.image_url} alt={image.name} />
                            </div>
                     </div>
            })}
           
        </div> )
            
 
    
}