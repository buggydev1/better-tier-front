const SearchResults = ({ results }) => {
    // return early if there are no images
    if (!results) {
        return <h2>No Images Found!</h2>
      }
    
  
    return (
      <div className="gallery">
        {results.map(image => (
            <div key={image.id} className="gif">
                <img src={results.images_url} alt={results.name.title} />
                <p>{results}</p>
            </div>
        ))}
      </div>
    )
  }

  export default SearchResults;