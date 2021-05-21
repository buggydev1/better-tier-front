
import {Cloudinary} from 'cloudinary-core';


export default function CreateTile () {

   const showWidget = (event) =>{
       event.preventDefault()
        widget.open()
    }
    let widget = window.cloudinary.createUploadWidget({
        cloudName: 'dhgz7lpcq', uploadPreset: 'mdsiby6z', 
        sources: [ 'local', 'url', 'dropbox', 'google_drive'],
        folder: 'Tiles',
         cropping: true}, 
        (error, result = {event: "publicid",
                            info:{id: "my-public-id"}
                            }) => { if(result.event === "success") { console.log(result.info.secure_url)} })

        return(
            <div id='photo-form-container'>
                <button onClick={showWidget}>Upload Images for Tiles</button>
            </div>
        
            
        )
    
}