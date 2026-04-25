import Form from '../components/Form'
import restaurant from '../assets/restaurant.jpg'

function BookingPage({availableTimes, dispatch, submitForm}) {
    return(
        <section className="bookingPage">
            <div className="imgContainer">
                <img src={restaurant} alt="restaurant tables"/>
            </div>
            <div class="formContainer">
                <Form availableTimes={availableTimes} dispatch = {dispatch} submitForm={submitForm}/>
            </div>
        </section>
    )
}

export default BookingPage