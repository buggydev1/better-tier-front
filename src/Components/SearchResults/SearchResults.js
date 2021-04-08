const SearchResults = ({ results }) => {
    // return early if there are no images
    if (results === null) {
        {console.log("hi")}
        return <h2>No Images Found!</h2>
      }
    
      
    return (
      <div className="gallery">
          
        {results.map(image => (
            <div key={image.id} className="gif">
                {console.log(JSON.stringify(image,null,4))}
                <img src={image.image_url} alt={image.name} />
               
            </div>
        ))}
      </div>
    )
  }

  export default SearchResults;