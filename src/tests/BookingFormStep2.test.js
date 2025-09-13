import { render, screen, fireEvent } from '@testing-library/react';
import BookingFormStep2 from '../pages/BookingFormStep2';

describe('BookingFormStep2', () => {
  const mockUpdateForm = jest.fn();
  const mockOnBack = jest.fn();
  const mockOnFinish = jest.fn();
  const formData = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    callBack: false,
    consent: false,
    newsletter: false,
  };

  test('update "First Name" on enter', () => {
    render(
      <BookingFormStep2
        formData={formData}
        updateForm={mockUpdateForm}
        onBack={mockOnBack}
        onFinish={mockOnFinish}
      />
    );
    const firstNameInput = screen.getByPlaceholderText('First Name');
    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    expect(mockUpdateForm).toHaveBeenCalledWith('firstName', 'John');
  });

  test('call onFinish on pressing "Finish Reservation"', () => {
    render(
      <BookingFormStep2
        formData={formData}
        updateForm={mockUpdateForm}
        onBack={mockOnBack}
        onFinish={mockOnFinish}
      />
    );
    const finishButton = screen.getByRole('button', { name: /finish reservation/i });
    fireEvent.click(finishButton);
    expect(mockOnFinish).toHaveBeenCalledTimes(1);
  });
});