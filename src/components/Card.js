function Card({image, title, price, content}) {
    return (
        <article className="card">
            <div className="top">
                <img src={image} alt={title}/>
            </div>
            <div className="cardBody">
                <h3>{title}</h3>
                <span>${price}</span>
                <p>{content}</p>
                <a href={'#'}>
                    <strong>Order a delivery</strong>
                </a>
            </div>
        </article>
    )
}

export default Card