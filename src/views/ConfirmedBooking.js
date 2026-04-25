import good from '../assets/good.png'


function ConfirmedBooking({data, setData}) {
    return(
        <div className="confirmed">
            <div className="confimerCard">
                <div className="data">

                            <h3>Name: {data.name}</h3>
                            <h3>Date: {data.date}</h3>
                            <h3>Time: {data.time}</h3>
                            <h3>Guests: {data.guest}</h3>

                </div>
                <h1>Booking confirmed!!</h1>
                <img src={good} alt="ok logo" style={{width:'100px', zIndex:'10'}}/>
            </div>
        </div>
    )

}

export default ConfirmedBooking
