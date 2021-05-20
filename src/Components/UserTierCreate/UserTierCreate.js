import {useState, useEffect} from 'react'
import CreateTile from './CreateTile'


const UserTierCreate = () => {
    const [newTier, setNewTier] = useState(null)
    const [tierNumber, setTierNumber ] = useState(2)
    const colorInputs = Array.from({length:tierNumber})
    return(
        <div>
            <h1>Make Your Tier List</h1>
            <form>
                <div>
                    <label for="title">Name your tierlist!</label>
                    <input type="text" placeholder="Title"></input>
                </div>
                <div>
                    <label for="tiers">How Many Tiers Would You Like?</label>
                    <input type="number" placeholder="2-10" name="tiers" min="2" max="10" onChange={(e) => setTierNumber(e.target.value)} ></input>
                    {colorInputs.map((group, index) => {
                        return  (<div> <label for={index}>Color for Tier {index} </label>
                        <input type="color" id={index} ></input>
                        <input type="text" placeholder="Name of Tier"></input> 
                        </div>)                                
                    })}
                 </div>
                 <h3>Tiles</h3>
                    {/*Create tile form */}
                <div>
                    <CreateTile></CreateTile>
                   </div>
                <div className="Holder">
                    {}

                </div>

            
            </form>
        </div>
    )
}

export default UserTierCreate;