import './App.css';
import { HashRouter as Router, Route, Switch} from 'react-router-dom'
import Other from './Components/Other/Other'
import Home from './Components/Home/Home'
import './styles/style.css'
import UserTierCreate from './Components/UserTierCreate/UserTierCreate'
import NavBar from './Components/NavBar/NavBar.js';
import {useState, useEffect} from 'react'
import TeirDetail from './Components/TeirDetail/TeirDetail';


export default function App () {
  const [teirData, setTeirData] = useState([])
  
  const getTeir = async () => {
    try {
      const response = await fetch("https://better-tier.herokuapp.com/tiers");
      const data = await response.json();
      setTeirData([...data]);
    } catch (error) {
      console.error(error);
    }
  }
    useEffect(() => {
      getTeir();
    }, []);
  
  return (
    <Router>
      
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/" render={()=> <Home ListData={teirData}/>}/>
        <Route exact path="/Other" render={() => <Other/>} />
        <Route exact path="/CreatePage" render={() => <UserTierCreate/>} />
        {teirData.map((item) =>{
            return(
          <Route path={`/template/${item._id}`} render={() => <TeirDetail temp={item}/>} />
          )
          })}
      </Switch>
    </Router>
  )
}
