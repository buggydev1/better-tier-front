
import {Draggable, Droppable } from 'react-beautiful-dnd';
export default function TileHolder ({tile}){
    const getname = (image) => {
       if (image.anime[0] === undefined) {
           return image.manga[0].name
       } else{
           return image.anime[0].name
       }
    }
    
    return (
        <Droppable droppableId="tier-holder">
              {(provided) =>(
        <div className='tile-holder' {...provided.droppableProps} ref={provided.innerRef}>
             ...
            {provided.placeholder}
            {tile.map((image, index)=>{
                return  <Draggable key={image.name} draggableId={image.name} index={index}>
                            {(provided) => (
                            <div className="tile-render" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
                                <span>Name: {image.name} 
                                <br/>Anime: {getname(image)} 
                                </span>
                                <img className='tile' src={image.image_url} alt={image.name} />
                            </div>)}
                        </Draggable>
            })}
           
        </div> )}
            </Droppable>
 
    )
}