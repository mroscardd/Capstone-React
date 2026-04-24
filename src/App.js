import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './views/HomePage'
import BookingPage from './views/BookingPage'
import ConfirmedBooking from './views/ConfirmedBooking'
import {Routes, Route, useNavigate} from 'react-router-dom'
import { useReducer } from 'react';
import { fetchAPI } from './api';
import { submitAPI } from './api'



const updateTimes = (state, action) => {
    switch(action.type) {
        case 'UPDATE_TIMES':
            return fetchAPI(action.payload)

        default:
            return state;

        }
    }

const initializeTimes = () => {
    const today = new Date();
    return fetchAPI(today);
};

function App() {


    const[availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes)

    const navigate = useNavigate()

    const submitForm = (formdata) => {
        submitAPI(formdata)
        navigate("booking/confirmed")

    }


    return (
        <>
        <Header/>
        <main>
            <Routes>
              <Route path="/" element={<HomePage/>}></Route>
              <Route path="/booking" element={<BookingPage
                availableTimes={availableTimes}
                dispatch = {dispatch} submitForm={submitForm}/>}></Route>
               <Route path="/booking/confirmed" element={<ConfirmedBooking/>}></Route>
            </Routes>
        </main>
        <Footer/>

        </>
    )
}

export default App;

