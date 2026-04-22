import Card from '../../components/Card'
import greeksalad from '../../assets/greek salad.jpg'
import bruchetta from '../../assets/bruchetta.jpg'
import lemmondesert from '../../assets/lemon dessert.jpg'

function Highlights () {

    const CardContent = [{
      title: 'Greek Salad',
      content: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
      price: 12.99,
      image: greeksalad
    },
    {
      title: "Bruschetta",
      content:"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      price: 5.99,
      image: bruchetta
    },
    {
      title: "Lemon Dessert",
      content: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      price: 5,
      image: lemmondesert
    }]

    return(
        <section id="highlights">
          <div className="special">
            <h2>This weeks special!</h2>
            <a id ="order" href={'#'}>Online Menu</a>
          </div>
          <div className="allCards">
                {CardContent.map(p =>
                <Card title={p.title} content={p.content} price={p.price} image={p.image} key={p.title}/>
                )}
          </div>
        </section>
    )
}

export default Highlights