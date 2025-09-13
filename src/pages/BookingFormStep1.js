import { useCallback, useEffect, useState } from "react";
import { fetchAPI } from "./api.js";

export default function BookingFormStep1({ formData, updateForm, onNext }) {
  const [availableTimes, setAvailableTimes] = useState([]);
  const buildDateString = useCallback(() => {
    if (!formData.month || !formData.day) return null;
    return `2026-${formData.month}-${formData.day}`;
  }, [formData.month, formData.day]);

  useEffect(() => {
    const date = buildDateString();
    if (date) {
      const times = fetchAPI(date);
      setAvailableTimes(times);
      }
  }, [buildDateString, updateForm]);
  
  return (
    <div className="reservation-step">
      <div className="reservation-header">
        <h2>Reserve a table</h2>
        <p>Step 1: Choose date, time and guests</p>
      </div>

      {/* Date Section */}
      <div className="form-section">
        <h3>Choose your date</h3>
        <div className="form-date">
          <select
            value={formData.month}
            onChange={(e) => updateForm("month", e.target.value)}
          >
            <option value="" disabled hidden>
              Month
            </option>
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>

          <select
            value={formData.day}
            onChange={(e) => updateForm("day", e.target.value)}
          >
            <option value="" disabled hidden>
              Day
            </option>
            {Array.from({ length: 31 }, (_, i) => (
              <option key={i + 1} value={String(i + 1).padStart(2, "0")}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Time Section */}
      <div className="form-section">
        <h3>Choose your time</h3>
        <div className="form-time">
          <select
            value={formData.time}
            onChange={(e) => updateForm("time", e.target.value)}
            className={availableTimes.length === 0 ? "disabled-select" : ""}
          >
            {availableTimes.length === 0 ? (
              <option value="">
                Please select a date first
              </option>
            ) : (
              <option value="" disabled hidden>
                Select time
              </option>
            )}
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Guests Section */}
      <div className="form-section">
        <h3>Number of guests</h3>
        <div className="form-guests">
          <select
            value={formData.guests}
            onChange={(e) => updateForm("guests", e.target.value)}
          >
            <option value="" disabled hidden>
              Guests
            </option>
            {Array.from({ length: 10 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Occasion Section */}
      <div className="form-section">
        <h3>Occasion</h3>
        <div className="form-occasion">
          <select
            value={formData.occasion}
            onChange={(e) => updateForm("occasion", e.target.value)}
          >
            <option value="" disabled hidden>
              Select occasion
            </option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="engagement">Engagement</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      {/* Button */}
      <div className="reservation-btn">
        <button onClick={onNext} className="reservanion-next-btn">
          Next Step
        </button>
      </div>
    </div>
  );
}
