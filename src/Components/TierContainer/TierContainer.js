

export default function Layout ({lable, color}) {
return(
    <div>
        
        <div className='tier-container'>
            <div className='tier-row'>
                <div className='labal'>
                    <span>{lable}</span>
                </div >
                    
                    
                    <div className='tier-sort' style={{"background-color": color}} >
                        
                    </div>
                    
            </div>
        </div>
    </div>
)
}