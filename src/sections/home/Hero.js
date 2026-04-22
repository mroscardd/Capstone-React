import hero from '../../assets/hero.jpg'



function Hero () {
    return(
        <section id="hero">
            <div className="title">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                </p>
                <a className="button" href='#'>Reserve a Table</a>

            </div>
            <div className="principal">
                <img src={hero} alt="imagen de comida"/>
            </div>
        </section>
    )
}

export default Hero