import { useState } from "react"

function Form({availableTimes, dispatch}) {
    const [data, setData] = useState(
        {date: "", time: "", guest: "", ocassion:"" }
    )


    const handleDate = (e) => {
        setData({...data, date: e.target.value})
        const selectedDate = e.target.value
        dispatch({type: 'UPDATE_TIMES', payload: selectedDate})
    }

    return (
    <form onSubmit={''}>
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
            {availableTimes.map(p => <option key={p} value={p}>{p}</option>)}
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
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation"/>
    </form>
 )}

 export default Form