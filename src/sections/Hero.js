import hero from '../assets/hero.jpg'



function Hero () {
    return(
        <section>
            <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
            </p>
            </div>
            <a className="button" href='#'>Reserve a Table</a>
            <div>
                <img src={hero} alt="imagen de comida" style={{width: '300px'}}/>
            </div>
        </section>
    )
}

export default Hero