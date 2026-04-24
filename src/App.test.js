import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import BookingPage from './views/BookingPage'
import Form from './components/Form'
import { initializeTimes, updateTimes } from './App';
import { fetchAPI } from './api';
import data from './components/Form'


test('booking test', () => {
  render(<BookingPage />);
  const linkElement = screen.getByText(/make your reservation/i);
  expect(linkElement).toBeInTheDocument();
});

describe('test useReducer' , () => {
  test('initializeTimes', () => {
  const result = initializeTimes()
  expect(result).toBeInstanceOf(Array)
});

test('updateTimes', () => {
  const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
  const action = { type: 'UPDATE_TIMES', payload: new Date('2026-04-23') }
  const result = updateTimes(initialState, action)
  expect(result).toBeInstanceOf(Array)

})})

describe('test form' , () => {

  test('name atributes', () => {
    render(<Form/>)

    const input = screen.getByLabelText(/name/i)
    fireEvent.change(input, {target: {value:'Jaime'}})
    expect(input).toHaveAttribute('type', 'text')
    expect(input).toHaveAttribute('id', 'res-name')
    expect(input).toHaveValue('Jaime')
    expect(input).toHaveAttribute('maxLength', '20')
    expect(input).toHaveAttribute('id', 'res-name')
    expect(input).toBeRequired()
  })

test('date atributes', () => {
    const mockDispatch = jest.fn()
    render(<Form dispatch={mockDispatch}/>)

    const input = screen.getByLabelText(/choose date/i)
    fireEvent.change(input, {target: {value:'2026-02-02'}})
    expect(input).toHaveAttribute('type', 'date')
    expect(input).toHaveAttribute('id', 'res-date')
    expect(input).toHaveValue('2026-02-02')
    expect(input).toBeRequired()
  })

test('time atributes', () => {
    const mockDispatch = jest.fn()
    const mockavailableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"]
    render(<Form availableTimes={mockavailableTimes} dispatch={mockDispatch} />)
    const input = screen.getByLabelText(/choose time/i)
    fireEvent.change(input, {target: {value: '18:00'}})
    expect(input).toHaveAttribute('id', 'res-time')
    expect(input).toHaveValue('18:00')
    expect(input).toBeRequired()

  })

 test('guest atributes', () => {
    render(<Form/>)

    const input = screen.getByLabelText(/number of guests/i)
    fireEvent.change(input, {target: {value: 3}})
    expect(input).toHaveAttribute('type', 'number')
    expect(input).toHaveAttribute('id', 'guests')
    expect(input).toHaveAttribute('min', '2')
    expect(input).toHaveAttribute('max', '10')
    expect(input).toHaveValue(3)
    expect(input).toBeRequired()
  })

test('occasion atributes', () => {
    render(<Form/>)

    const input = screen.getByLabelText(/occasion/i)
    fireEvent.change(input, {target: {value:'Enjoy'}})
    expect(input).toHaveAttribute('id', 'occasion')
    expect(input).toHaveValue('Enjoy')
  })

test('test disabled button enabled', () => {

    const mockDispatch = jest.fn()
    const mockavailableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"]

    render(<Form availableTimes={mockavailableTimes} dispatch={mockDispatch} />)

    const validButton = screen.getByRole('button', { value: /Make Your reservation/i })
    const inputName = screen.getByLabelText(/name/i)
    const inputDate = screen.getByLabelText(/choose date/i)
    const inputTime = screen.getByLabelText(/choose time/i)

    fireEvent.change(inputName, {target: {value:'Jaime'}})
    fireEvent.blur(inputName)
    fireEvent.change(inputDate, {target: {value:'2029-09-09'}})
    fireEvent.blur(inputDate)
    fireEvent.change(inputTime, {target: {value: '18:00'}})
    fireEvent.blur(inputTime)

    expect(validButton).toBeEnabled()

})

test('test disabled button disabled', () => {

    const mockDispatch = jest.fn()
    const mockavailableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"]

    render(<Form availableTimes={mockavailableTimes} dispatch={mockDispatch} />)

    const validButton = screen.getByRole('button', { value: /Make Your reservation/i })
    const inputName = screen.getByLabelText(/name/i)
    const inputDate = screen.getByLabelText(/choose date/i)
    const inputTime = screen.getByLabelText(/choose time/i)

    fireEvent.change(inputName, {target: {value:'Jaime'}})
    fireEvent.blur(inputName)
    fireEvent.change(inputDate, {target: {value:'2026-02-09'}})
    fireEvent.blur(inputDate)
    fireEvent.change(inputTime, {target: {value: '18:00'}})
    fireEvent.blur(inputTime)

    expect(validButton).toBeDisabled()

})

})

