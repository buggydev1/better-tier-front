import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/style.css'
function Home({ListData}) {
  


 return(
   <div>
   <h1>Welcome to Better Tier</h1>
    {ListData.map((list, index)=>{
      return(
        <div key={index}>
          <Link to={`/template/${list._id}`} exact>
          <h2>{list.title}</h2>
          </Link>
          </div>
      )
    })}

   </div>
 )
}
export default Home;
