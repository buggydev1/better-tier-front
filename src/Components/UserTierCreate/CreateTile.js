

export default function CreateTile () {
    const uploadKey = process.env.CLOUDNAME
   const showWidget = () =>{
        
        widget.open()
    }
    let widget = window.cloudinary.createUploadWidget({
        cloudName: {uploadKey}, uploadPreset: 'mdsiby6z', folder: 'Tiles', cropping: true}, 
        (error, result)  => { console.log(error, result) })

        return(
            <div id='photo-form-container'>
                <button onClick={showWidget}>Upload Photos</button>
            </div>
        
            
        )
    
}