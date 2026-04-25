import good from '../assets/good.png'


function ConfirmedBooking({book, setBook}) {
    return(
        <div className="confirmed">
            <div className="confimerCard">
                <div className="data">

                            <h3>Name: {book.name}</h3>
                            <h3>Date: {book.date}</h3>
                            <h3>Time: {book.time}</h3>
                            <h3>Guests: {book.guest}</h3>

                </div>
                <h1>Booking confirmed!!</h1>
                <img src={good} alt="ok logo" style={{width:'100px', zIndex:'10'}}/>
            </div>
        </div>
    )

}

export default ConfirmedBooking
