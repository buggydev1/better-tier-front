const SearchResults = ({ results, tile }) => {
    // return early if there are no images
   
    if (results === null) {        
        return <h2>No Images Found!</h2>
      }
    
      
    return (
      <div className="gallery">
          
        {results.map(image => (
            <div onClick={() => tile(image)} key={image.id} className="gif">
                
                <input type='image' className='results' src={image.image_url} alt={image.name} />
               
            </div>
        ))}
      </div>
    )
  }

  export default SearchResults;