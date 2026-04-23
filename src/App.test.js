import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import BookingPage from './views/BookingPage'
import { initializeTimes, updateTimes } from './App';

test('booking test', () => {
  render(<BookingPage />);
  const linkElement = screen.getByText(/make your reservation/i);
  expect(linkElement).toBeInTheDocument();
});


test('initializeTimes', () => {

  const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const result = initializeTimes()
  expect(result).toEqual(expectedTimes);
});


test('updateTimes', () => {
  const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
  const expectedState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
  const action = { type: 'UPDATE_TIMES', date: '2026-04-23' }
  const result = updateTimes(initialState,action)
  expect(result).toEqual(expectedState);

})