import logo from '../assets/lemon-logo3.png'
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

function Footer () {
    return(
        <footer className="footer">
            <div>
                <img src={logo} alt="imagen footer" />
            </div>
            <div>
                <h4>Doormat Navigation</h4>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><HashLink smooth to="/#about">About</HashLink></li>
                    <li><HashLink smooth to="/#highlights">Menu</HashLink></li>
                    <li><Link to="/booking">Reservations</Link></li>
                    <li><HashLink smooth to="/#highlights">Order Online</HashLink></li>
                    <li><HashLink smooth to="/#">Login</HashLink></li>
                </ul>
            </div>
            <div>
                <h4>Contact</h4>
                <ul>
                    <li><a href={'#'}>Adress</a></li>
                    <li><a href={'#'}>Phone Number</a></li>
                    <li><a href={'#'}>Email</a></li>
                </ul>
            </div>
            <div>
                <h4>Social Media Links</h4>
                <ul>
                    <li><a href={'#'}>X</a></li>
                    <li><a href={'#'}>Facebook</a></li>
                    <li><a href={'#'}>Instagram</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer