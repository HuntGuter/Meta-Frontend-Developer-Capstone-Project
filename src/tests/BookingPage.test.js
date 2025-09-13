import { render, screen, fireEvent } from '@testing-library/react';
import BookingPage from '../pages/BookingPage';
import { submitAPI, fetchAPI } from '../pages/api';

jest.mock('../pages/api', () => ({
  submitAPI: jest.fn(() => true),
  fetchAPI: jest.fn(() => ['17:00', '18:00', '19:00']),
}));

describe('BookingPage', () => {
  test('switch step 1 and step 2', () => {
    render(<BookingPage />);

    expect(screen.getByText('Step 1: Choose date, time and guests')).toBeInTheDocument();
    const nextButton = screen.getByRole('button', { name: /next step/i });
    fireEvent.click(nextButton);
    expect(screen.getByText('Step 2: Enter your contact information')).toBeInTheDocument();
    const backButton = screen.getByRole('button', { name: /back/i });
    fireEvent.click(backButton);
    expect(screen.getByText('Step 1: Choose date, time and guests')).toBeInTheDocument();
  });
});