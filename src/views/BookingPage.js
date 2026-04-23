import Form from '../components/Form'

function BookingPage({availableTimes, dispatch}) {
    return(
        <Form availableTimes={availableTimes} dispatch = {dispatch}/>
    )
}

export default BookingPage