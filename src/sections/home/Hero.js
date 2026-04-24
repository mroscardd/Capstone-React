import hero from '../../assets/hero.jpg'
import {Link } from 'react-router-dom'


function Hero () {
    return(
        <section id="hero">
            <div className="heroContent">
                <div className="title">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>
                    <a className="button" href='#'>
                        <Link to="/booking">Reserve a Table
                    </Link></a>

                </div>
                <img src={hero} alt="imagen de comida"/>
            </div>
        </section>
    )
}

export default Hero