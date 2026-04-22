import star from '../assets/star.png'

function Rating({user, rating, image, review}) {


    return(
        <article className="ratingCard">
            <div>
                {[...Array(rating)].map((_,index) =>
                    <img src={star} style={{width: '1.3rem'}} key={index}/>
                )}
            </div>
            <div className="photoName">
                <img src={image} alt={review} style={{width: '70px', height: '70px', borderRadius:'50%'}}/>
                <h4>{user}</h4>
            </div>

            <div>
                <p>{review}</p>
            </div>
        </article>

    )
}

export default Rating