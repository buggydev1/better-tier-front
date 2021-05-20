import './App.css';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Other from './Components/Other/Other'
import Home from './Components/Home/Home'
import './styles/style.css'
import UserTierCreate from './Components/UserTierCreate/UserTierCreate'
import NavBar from './Components/NavBar/NavBar.js';


// Save the Component, key and path in an array of objects for each Route
// You could write all routes by hand but I'm lazy annd this lets me use
// the map method to just loop over them and make my routes
// SWITCH is used so that it only ever matches one route at a time
// If you don't want to use react router just rewrite the app component to not use it

const routes = [
  {
    Component: Other,
    key: 'Other',
    path: '/other'
  },
  {
    Component: Other,
    key: 'Another',
    path: '/another'
  },
  {
    Component: Home,
    key: 'Home',
    path: '/'
  },
{   
   Component: UserTierCreate,
    key: 'UserTierCreate',
    path: '/createpage'
},
]

export default function App () {

  return (
    <Router>
      
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/" render={()=> <Home />}/>
        <Route exact path="/Other" render={() => <Other/>} />
        <Route exact path="/CreatePage" render={() => <UserTierCreate/>} />
      </Switch>
    </Router>
  )
}
