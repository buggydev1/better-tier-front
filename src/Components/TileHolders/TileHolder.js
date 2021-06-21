import { Draggable, Droppable } from "react-beautiful-dnd"

export default function TileHolder ({tiles,}){

     
    return (
       
           
        <div className='tile-holder' >
            
            {tiles.map((image, index)=>{
                {console.log(image)}
                return (
                    <Draggable key={image._id}  index={index} draggableId={image._id}>
                        {(provided) =>(
                                <div className="tile-render" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                    <span>
                                        Name: {image.name} 
                                        <br/>Source: {image.source} 
                                    </span>
                                    <img className='tile' src={image.image_url} alt={image.name} />
                                </div>)
                                }
                        </Draggable>
            )})}
           
        </div> )
            
 
    
}