import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import BookingPage from './views/BookingPage'
import { initializeTimes, updateTimes } from './App';
import { fetchAPI } from './api';

test('booking test', () => {
  render(<BookingPage />);
  const linkElement = screen.getByText(/make your reservation/i);
  expect(linkElement).toBeInTheDocument();
});


test('initializeTimes', () => {
  const result = initializeTimes()
  expect(result).toBeInstanceOf(Array)
});


test('updateTimes', () => {
  const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
  const action = { type: 'UPDATE_TIMES', payload: new Date('2026-04-23') }
  const result = updateTimes(initialState, action)
  expect(result).toBeInstanceOf(Array)

})