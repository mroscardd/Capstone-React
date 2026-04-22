import star from '../assets/star.png'

function Rating({user, rating, image, review}) {


    return(
        <article>
            {[...Array(rating)].map((_,index) =>
                <img src={star} style={{width: '20px'}} key={index}/>
            )}

            <div>
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