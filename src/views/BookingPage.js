import Form from '../components/Form'

function BookingPage({availableTimes, dispatch, submitForm}) {
    return(
        <section className="bookingPage">
            <div class="formContainer">
                <Form availableTimes={availableTimes} dispatch = {dispatch} submitForm={submitForm}/>
            </div>
        </section>
    )
}

export default BookingPage