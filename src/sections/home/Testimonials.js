import Rating from '../../components/Rating'
import elena from '../../assets/elena.png'
import marco from '../../assets/marco.png'
import julian from '../../assets/julian.png'
import lara from '../../assets/lara.png'



function Testimonials () {

    const reviewContent = [{
      user: "Elena Valerios",
      rating: 5,
      image: elena,
      review: "The freshest Greek salad I've ever had; the dressing is incredible!"
    },
    {
      user: "Marco Santoro",
      rating: 4,
      image: marco,
      review: "A cozy atmosphere paired with impeccable service and delicious food."
    },
    {
      user: "Lara Kostic",
      rating: 4,
      image: lara,
      review: "he grilled salmon was cooked to perfection, highly recommended!"
    },
    {
      user: "Julián Aris",
      rating: 5,
      image: julian,
      review: "Homemade desserts that transport you straight to the Mediterranean."
    },
    ]

    return(
        <section>

            <h2>Testimonials</h2>
            {reviewContent.map(p => {
                return (
                <Rating user={p.user}
                        rating={p.rating}
                        image={p.image}
                        review={p.review}
                        key={p.user}
                        />
            )}
        )}

        </section>
    )
}

export default Testimonials