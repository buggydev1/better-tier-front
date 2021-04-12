import {Droppable } from 'react-beautiful-dnd';

export default function Layout ( {id} ) {
return(
    <div>
        
        <div className='tier-container'>
            <div className='tier-row'>
                <div className='labal'>
                    <span>lable</span>
                </div>
                <Droppable droppableId={id}>
                    {(provided) => (
                    <div className='tier-sort'{...provided.droppableProps} ref={provided.innerRef}>
                          ...
                        {provided.placeholder}
                    </div>
                    )}
                </Droppable>
                <div className='setting'>
                    <span>Put Settings here</span>
                </div>
                <div className='move-buttons'>
                    <span>adjust TBA</span>
                    
                </div>
            </div>
        </div>
    </div>
)
}