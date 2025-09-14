import { useState } from "react";

export default function BookingFormStep2({ formData, updateForm, onBack, onFinish,}) {
  const [errors, setErrors] = useState({});

  const isValid = () => {
    const newErrors = {};

    if (!/^[A-Za-z]+$/.test(formData.firstName))
      newErrors.firstName = "Enter your name";
    if (!/^[A-Za-z]+$/.test(formData.lastName))
      newErrors.lastName = "Enter your last name";
    if (!/^\+?[0-9]{7,15}$/.test(formData.phone))
      newErrors.phone = "Please enter a valid phone number";
    if (!/^\d{4}$/.test(formData.code))
      newErrors.code = "The code must contain 4 digits";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Please enter a valid email";
    if (!formData.consent)
      newErrors.consent = "Consent to data processing is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFinish = () => {
    if (isValid()) {
      alert("Reservation successful!");
      window.location.href = "/";
    }
  };

  return (
    <div className="reservation-step">
      <div className="reservation-header">
        <h2>Reserve a table</h2>
        <p>Step 2: Enter your contact information</p>
      </div>

      <div className="form-section">
        <h3>Personal information</h3>
        <input
          type="text"
          placeholder="First Name"
          value={formData.firstName}
          onChange={(e) => updateForm("firstName", e.target.value)}
          required
        />
        {errors.firstName && <p className="error">{errors.firstName}</p>}
        <input
          type="text"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={(e) => updateForm("lastName", e.target.value)}
          required
        />
        {errors.lastName && <p className="error">{errors.lastName}</p>}
      </div>

      <div className="form-section">
        <h3>Contact information</h3>
        <input
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => updateForm("phone", e.target.value)}
          required
        />
        {errors.phone && <p className="error">{errors.phone}</p>}
        <input
          type="text"
          placeholder="Verification Code (4 digits)"
          value={formData.code}
          onChange={(e) => updateForm("code", e.target.value)}
          required
        />
        {errors.code && <p className="error">{errors.code}</p>}
        <input
          type="email"
          placeholder="E-Mail"
          value={formData.email}
          onChange={(e) => updateForm("email", e.target.value)}
          required
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div className="form-section">
        <label>
          <input
            type="checkbox"
            checked={formData.callBack}
            onChange={(e) => updateForm("callBack", e.target.checked)}
          />
          <span>Call me back for confirmation</span>
        </label>
        <label>
          <input
            type="checkbox"
            checked={formData.consent}
            onChange={(e) => updateForm("consent", e.target.checked)}
            required
          />
          <span>Consent to processing of personal data</span>
          {errors.consent && <p className="error">{errors.consent}</p>}
        </label>
        <label>
          <input
            type="checkbox"
            checked={formData.newsletter}
            onChange={(e) => updateForm("newsletter", e.target.checked)}
          />
          <span>Subscribe to newsletter</span>
        </label>
      </div>

      <div className="reservation-btn">
        <button onClick={onBack} className="reservanion-back-btn">Back</button>
        <button onClick={handleFinish} className="reservation-finish-btn" disabled={!isValid}>Finish Reservation</button>
      </div>
    </div>
  );
}
