import { render, screen, fireEvent, waitFor, within } from "@testing-library/react";
import { useState } from "react";
import BookingFormStep1 from "../pages/BookingFormStep1";
import { fetchAPI } from "../pages/api.js";

jest.mock("../pages/api.js");

function BookingFormStep1Wrapper() {
  const [formData, setFormData] = useState({
    month: "",
    day: "",
    time: "",
    guests: "",
    occasion: ""
  });

  const updateForm = (field, value) => setFormData(prev => ({ ...prev, [field]: value }));
  const onNext = jest.fn();

  return <BookingFormStep1 formData={formData} updateForm={updateForm} onNext={onNext} />;
}

describe("BookingFormStep1", () => {
  test("shows available times after selecting a date", async () => {
    fetchAPI.mockResolvedValue(["17:00", "18:00", "19:00"]);

    render(<BookingFormStep1Wrapper />);

    fireEvent.change(screen.getByLabelText(/Month/i), { target: { value: "09" } });
    fireEvent.change(screen.getByLabelText(/Day/i), { target: { value: "14" } });

    const timeSelect = await screen.findByTestId("time-select");

    await waitFor(() => {
      expect(within(timeSelect).getByText("17:00")).toBeInTheDocument();
      expect(within(timeSelect).getByText("18:00")).toBeInTheDocument();
      expect(within(timeSelect).getByText("19:00")).toBeInTheDocument();
    });
  });
});
