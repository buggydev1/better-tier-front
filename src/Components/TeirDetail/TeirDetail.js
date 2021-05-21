import { DragDropContext } from "react-beautiful-dnd"
import Layout from "../TierContainer/TierContainer"
import TileHolder from "../TileHolders/TileHolder"

export default function TeirDetail(temp) {
    

    const number = Array.from({length:temp.temp.number_of_tiers})
    if (temp === undefined){
        return <h1>Theses are not the teirs you are looking for!</h1>
    }
    return(
        <DragDropContext onDragEnd={this.onDragEnd}>
        <div>
            <h1>{temp.temp.title}</h1>
            
            {console.log(temp.temp.tiles)}
            {number.map((stuff, index) =>{
            return(
                <div>
                <Layout key lable={temp.temp.tier_info[index].tiername} color={temp.temp.tier_info[index].color}></Layout>
                </div>
            )
            })}
                <TileHolder tiles={temp.temp.tiles}></TileHolder>
            
        </div>
        </DragDropContext>
    )
}
