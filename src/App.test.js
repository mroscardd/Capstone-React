import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import BookingPage from './views/BookingPage'
import Form from './components/Form'
import { initializeTimes, updateTimes } from './App';
import { fetchAPI } from './api';
import data from './components/Form'


test('booking test', () => {
  const mockData = { name: "" };
  const mockSetData = jest.fn();
  render(<BookingPage data={mockData} setData={mockSetData}/>);

  const linkElement = screen.getByText(/number of guests/i);
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
    const mockData = {name: ''};
    const mockSetData = jest.fn();
    render(<Form data={mockData} setData={mockSetData}/>)


    const input = screen.getByLabelText(/name/i)
    fireEvent.change(input, {target: {value:'Jaime'}})
    expect(input).toHaveAttribute('type', 'text')
    expect(input).toHaveAttribute('id', 'res-name')
    expect(input).toHaveAttribute('maxLength', '20')
    expect(input).toHaveAttribute('id', 'res-name')
    expect(input).toBeRequired()
    expect(mockSetData).toHaveBeenCalledWith({ name: 'Jaime' });

  })

test('date atributes', () => {
    const mockData = { name: "" };
    const mockSetData = jest.fn();
    const mockDispatch = jest.fn()
    render(<Form dispatch={mockDispatch} data={mockData} setData={mockSetData}/>)

    const input = screen.getByLabelText(/choose date/i)
    fireEvent.change(input, {target: {value:'2026-02-02'}})
    expect(input).toHaveAttribute('type', 'date')
    expect(input).toHaveAttribute('id', 'res-date')
    expect(input).toHaveValue('2026-02-02')
    expect(input).toBeRequired()
  })

test('time atributes', () => {
    const mockData = { name: "" };
    const mockSetData = jest.fn();
    const mockDispatch = jest.fn()
    const mockavailableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"]
    render(<Form availableTimes={mockavailableTimes} dispatch={mockDispatch} data={mockData} setData={mockSetData}/>)
    
    const input = screen.getByLabelText(/choose time/i)
    fireEvent.change(input, {target: {value: '18:00'}})
    expect(input).toHaveAttribute('id', 'res-time')
    expect(input).toHaveValue('18:00')
    expect(input).toBeRequired()

  })

 test('guest atributes', () => {
    const mockData = { name: "" };
    const mockSetData = jest.fn();
    render(<Form data={mockData} setData={mockSetData}/>)

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
    const mockData = { name: "" };
    const mockSetData = jest.fn();
    render(<Form data={mockData} setData={mockSetData}/>)

    const input = screen.getByLabelText(/occasion/i)
    fireEvent.change(input, {target: {value:'Enjoy'}})
    expect(input).toHaveAttribute('id', 'occasion')
    expect(input).toHaveValue('Enjoy')
  })

test('test disabled button enabled', () => {

    const validData = {
        name: "Jaime",
        date: "2029-09-09",
        time: "18:00",
        guests: 2,
        occasion: "Birthday" // Asegúrate de incluir TODOS los campos que valides
    };
    const mockSetData = jest.fn();
    const mockDispatch = jest.fn()
    const mockavailableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"]

    render(<Form availableTimes={mockavailableTimes} dispatch={mockDispatch} data={validData} setData={mockSetData}/>)

    const validButton = screen.getByRole('button', { value: /Make Your reservation/i })
    const inputName = screen.getByLabelText(/name/i)
    const inputDate = screen.getByLabelText(/choose date/i)
    const inputTime = screen.getByLabelText(/choose time/i)

    fireEvent.blur(inputName)
    fireEvent.blur(inputDate)
    fireEvent.blur(inputTime)

    expect(validButton).toBeEnabled()

})

test('test disabled button disabled', () => {

    const validData = {
        name: "Jaime",
        date: "2026-02-09",
        time: "18:00",
        guests: 2,
        occasion: "Birthday" // Asegúrate de incluir TODOS los campos que valides
    };
    const mockSetData = jest.fn();
    const mockDispatch = jest.fn()
    const mockavailableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"]

    render(<Form availableTimes={mockavailableTimes} dispatch={mockDispatch} data={validData} setData={mockSetData}/>)

    const validButton = screen.getByRole('button', { value: /Make Your reservation/i })
    const inputName = screen.getByLabelText(/name/i)
    const inputDate = screen.getByLabelText(/choose date/i)
    const inputTime = screen.getByLabelText(/choose time/i)

    fireEvent.blur(inputName)
    fireEvent.blur(inputDate)
    fireEvent.blur(inputTime)

    expect(validButton).toBeDisabled()

})

})

