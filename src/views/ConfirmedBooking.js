import good from '../assets/good.png'


function ConfirmedBooking() {
    return(
        <div class="confirmed">
            <div class="confimerCard">
                <h1>Booking confirmed!!</h1>
                <img src={good} alt="ok logo" style={{width:'100px', zIndex:'10'}}/>
            </div>
        </div>
    )

}

export default ConfirmedBooking
