import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './views/HomePage'
import BookingPage from './views/BookingPage'
import ConfirmedBooking from './views/ConfirmedBooking'
import {Routes, Route, useNavigate} from 'react-router-dom'
import { useReducer, useState } from 'react';
import { fetchAPI } from './api';
import { submitAPI } from './api'


export const initializeTimes = () => {
    const today = new Date();
    return fetchAPI(today);
};


export const updateTimes = (state, action) => {
    switch(action.type) {
        case 'UPDATE_TIMES':
            return fetchAPI(action.payload)

        default:
            return state;

        }
    }


function App() {

    const [data, setData] = useState(
            {name: "", date: "", time: "", guest: "2", occasion:"Birthday" }
        )
    const [book, setBook] = useState('null')

    const[availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes)

    const navigate = useNavigate()

    const submitForm = (formdata) => {
        submitAPI(formdata)
        setBook(data)
        navigate("booking/confirmed")
    }


    return (
        <div className="wrapper">
            <Header/>
            <main>
                <Routes>
                <Route
                    path="/"
                    element={<HomePage/>}>
                </Route>
                <Route
                    path="/booking"
                    element={<BookingPage
                        availableTimes={availableTimes}
                        dispatch = {dispatch}
                        submitForm={submitForm}
                        data={data}
                        setData={setData}/>}>
                </Route>
                <Route path="/booking/confirmed"
                    element={<ConfirmedBooking
                        book={book}
                        setBook={setBook}/>}>
                </Route>
                </Routes>
            </main>
            <Footer/>
        </div>
    )
}

export default App;

