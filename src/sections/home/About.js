import marioA from '../../assets/Mario and Adrian A.jpg'
import marioB from '../../assets/Mario and Adrian b.jpg'

function About () {
    return(
        <section id="about">
            <div className="first">

                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>
                    Welcome to Little Lemon, where tradition meets modern flair. Founded by two brothers with a passion for Mediterranean cuisine, our restaurant brings the vibrant flavors of the coast straight to your table. We believe that food is more than just a meal it’s a celebration of family, fresh ingredients, and heritage. From our family-owned recipes to our hand-picked lemons, every dish is crafted with love and served with a smile. Join us for a taste of the Mediterranean, right in the heart of the neighborhood.
                </p>
            </div>
            <div className="second">
                <img src={marioB} className="b" alt="Mario and Adrian cooking"/>
                <img className="a" src={marioA} alt="Mario and Adrian cooking"/>
            </div>
        </section>
    )
}

export default About