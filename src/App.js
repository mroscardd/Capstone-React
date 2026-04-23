import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './views/HomePage'
import BookingPage from './views/BookingPage'
import {Routes, Route} from 'react-router-dom'
import { useReducer } from 'react';


export const initializeTimes = () => {
        return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
        }


export const updateTimes = (state, action) => {
        switch(action.type) {
            case 'UPDATE_TIMES':
                return initializeTimes();


            default:
                return state;

            }
        }


function App() {


    const[availableTimes, dispatch] = useReducer(updateTimes,[], initializeTimes)



    return (
        <>
        <Header/>
        <main>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/booking" element={<BookingPage
                                            availableTimes={availableTimes}
                                            dispatch = {dispatch}
                                            />
                                            }></Route>
            </Routes>
        </main>
        <Footer/>

        </>
    )
}

export default App;

