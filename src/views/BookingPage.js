import Form from '../components/Form'

function BookingPage({availableTimes, dispatch, submitForm}) {
    return(
        <section className="bookingPage">
                <Form availableTimes={availableTimes} dispatch = {dispatch} submitForm={submitForm}/>
        </section>
    )
}

export default BookingPage