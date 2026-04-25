import Nav from './Nav'
import logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom';


function Header () {
    return(
        <header id="header">
            <div className="navContainer">
                <Link className="imgLink" to="/">
                    <img src={logo} alt='littlelemon logo' />
                </Link>
                <Nav/>
            </div>
        </header>
    )
}

export default Header