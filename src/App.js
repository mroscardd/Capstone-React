import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './views/HomePage'
import BookingPage from './views/BookingPage'
import {Routes, Route} from 'react-router-dom'


function App() {

    return (
        <>
        <Header/>
        <main>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/booking" element={<BookingPage />}></Route>
            </Routes>
        </main>
        <Footer/>

        </>
    )
}

export default App;

