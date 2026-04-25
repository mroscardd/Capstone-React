import { useState, useEffect } from "react"

const today = new Date()
    today.setHours(0, 0, 0, 0)


function Form({availableTimes, dispatch, submitForm}) {
    const [data, setData] = useState(
        {name: "", date: "", time: "", guest: "2", occasion:"Birthday" }
    )

    const[blur, setBlur] = useState(
        {blurName: false, blurDate: false, blurTime: false }
    )

    const [isValid, setIsValid]= useState(true)


    useEffect(() => {

      if (data.name.length > 3
        && new Date(data.date) >= today
        && data.time !== ''
      ) {
        return setIsValid(false)
      } else {
        return setIsValid(true)
      }
    }, [data])

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
            maxLength={20}
            aria-required="true"
            onBlur={() => setBlur({...blur, blurName: true})}
            />
        {data.name.length < 4 && blur.blurName &&
        <p>* Name is required at least 4 characters</p>}

        <label htmlFor="res-date">Choose date</label>
        <input
            type="date"
            id="res-date"
            value={data.date}
            onChange={handleDate}
            required
            aria-required="true"
            onBlur={() => setBlur({...blur, blurDate: true})}
            />
        {new Date(data.date) <= today && blur.blurDate &&
        <p>* Choose a valid date</p>}

        <label htmlFor="res-time">Choose time</label>
        <select
            id="res-time"
            value={data.time}
            onChange={e => setData({...data, time: e.target.value})}
            required
            aria-required="true"
            onBlur={() => setBlur({...blur, blurTime: true})}
            >
            <option value="">Choose hour</option>
            {availableTimes?.map(p => <option key={p} value={p}>{p}</option>)}
        </select>
        {data.time === '' && blur.blurTime &&
        <p>* Choose the hour</p>}
        <label htmlFor="guests">Number of guests</label>
        <input
            type="number"
            placeholder="2"
            min="2"
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
            value={data.occasion}
            onChange={e => setData({...data, occasion: e.target.value})}
            >
            <option value="Birthday">Birthday</option>
            <option value="Enjoy">Enjoy</option>
            <option value="Anniversary">Anniversary</option>
        </select>
        <input className={isValid? "sumbitButtonDisabled": "sumbitButton" }
            type="submit"
            value="Make Your reservation"
            aria-label="On Click"
            disabled={isValid}
            />
    </form>
 )}

 export default Form