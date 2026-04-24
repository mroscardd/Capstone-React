import { useState } from "react"


function Form({availableTimes, dispatch, submitForm}) {
    const [data, setData] = useState(
        {name: "", date: "", time: "", guest: "", ocassion:"Birthday" }
    )


    const handleDate = (e) => {
        setData({...data, date: e.target.value})
        const selectedDate = e.target.value
        const dateObject = new Date(selectedDate)
        dispatch({type: 'UPDATE_TIMES', payload: dateObject})
    }

    const handleSubmit= (e) => {
        e.preventDefault()
        submitForm(data)
        console.log(data)

    }

    return (
    <form onSubmit={handleSubmit}>
         <label htmlFor="res-name">Name</label>
        <input
            type="text"
            id="res-name"
            value={data.name}
            onChange={e => setData({...data, name: e.target.value})}
            required
            aria-required="true"
            />
        <label htmlFor="res-date">Choose date</label>
        <input
            type="date"
            id="res-date"
            value={data.date}
            onChange={handleDate}
            required
            aria-required="true"
            />
        <label htmlFor="res-time">Choose time</label>
        <select
            id="res-time"
            value={data.time}
            onChange={e => setData({...data, time: e.target.value})}
            required
            aria-required="true"
            >
            <option value="">Choose hour</option>
            {availableTimes?.map(p => <option key={p} value={p}>{p}</option>)}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={data.guest}
            onChange={e => setData({...data, guest: e.target.value})}
            required
            aria-required="true"
            />
        <label htmlFor="occasion">Occasion</label>
        <select
            id="occasion"
            value={data.ocassion}
            onChange={e => setData({...data, ocassion: e.target.value})}
            >
            <option value="Birthday">Birthday</option>
            <option value="Enjoy">Enjoy</option>
            <option value="Anniversary">Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" aria-label="On Click"/>
    </form>
 )}

 export default Form