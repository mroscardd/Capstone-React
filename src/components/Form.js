import { useState } from "react"

function Form() {
    const [data, setData] = useState(
        {date: "", time: "", guest: "", ocassion:"" }
    )


    return (
    <form onSubmit={''}>
        <label htmlFor="res-date">Choose date</label>
        <input
            type="date"
            id="res-date"
            value={data.date}
            onChange={e => setData({...data, date: e.target.value})}
            />
        <label htmlFor="res-time">Choose time</label>
        <select
            id="res-time"
            value={data.time}
            onChange={e => setData({...data, time: e.target.value})}
            >
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
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