import logo from '../assets/lemon-logo3.png'

function Footer () {
    return(
        <footer className="footer">
            <div>
                <img src={logo} alt="imagen footer" />
            </div>
            <div>
                <h4>Doormat Navigation</h4>
                <ul>
                    <li><a href={'#'}>Home</a></li>
                    <li><a href={'#'}>About</a></li>
                    <li><a href={'#'}>Menu</a></li>
                    <li><a href={'#'}>Reservations</a></li>
                    <li><a href={'#'}>Order Online</a></li>
                    <li><a href={'#'}>Login</a></li>
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