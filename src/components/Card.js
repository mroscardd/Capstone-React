function Card({image, title, price, content}) {
    return (
        <article>
            <div>
                <img src={image} alt={title} style={{width: '200px'}}/>
            </div>
            <div>
                <h4>{title}</h4>
                <span>{price}</span>
                <p>{content}</p>
            </div>
            <div>
                <a href={'#'}>
                    <strong>Order a delivery</strong>
                </a>
            </div>
        </article>
    )
}

export default Card