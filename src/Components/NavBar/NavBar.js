import {Link} from 'react-router-dom';

export default function NavBar (){
    return (
        <header >

            <nav>

                <Link to="/" exact >Home</Link>
                
                <Link to="/CreatePage">Add New</Link>
            </nav>
        </header>
    )
}