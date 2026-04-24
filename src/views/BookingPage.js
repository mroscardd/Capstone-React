import Form from '../components/Form'

function BookingPage({availableTimes, dispatch, submitForm}) {
    return(
        <Form availableTimes={availableTimes} dispatch = {dispatch} submitForm={submitForm}/>
    )
}

export default BookingPage