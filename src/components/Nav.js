import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import burger from '../assets/burger.svg'


function Nav () {

    const[menuOpen, setMenuOpen]= useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }


    return(
        <nav>
            <div className="menu-icon" onClick={toggleMenu}>
              <img className={menuOpen ? "bar open" : "bar"} src={burger}/>
            </div>
            <ul className={menuOpen ? "nav-links active" : "nav-links"}>
              <li><Link to="/">Home</Link></li>
              <li><HashLink smooth to="/#about">About</HashLink></li>
              <li><HashLink smooth to="/#highlights">Menu</HashLink></li>
              <li><Link to="/booking">Reservations</Link></li>
              <li><HashLink smooth to="/#highlights">Order Online</HashLink></li>
              <li><HashLink smooth to="/#">Login</HashLink></li>
            </ul>
        </nav>
    )
}

export default Nav