import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom';


function Nav () {
    return(
        <nav>
            <ul>
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