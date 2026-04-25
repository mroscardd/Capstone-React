import Form from '../components/Form'
import restaurant from '../assets/restaurant.jpg'

function BookingPage({availableTimes, dispatch, submitForm, data, setData}) {
    return(
        <section className="bookingPage">
            <div className="imgContainer">
                <img className="restaurantImg" src={restaurant} alt="restaurant tables"/>
            </div>
            <div className="formContainer">
                <Form
                availableTimes={availableTimes}
                dispatch={dispatch}
                submitForm={submitForm}
                data={data}
                setData={setData}
                />
            </div>
        </section>
    )
}

export default BookingPage