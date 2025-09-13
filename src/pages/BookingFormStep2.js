export default function BookingFormStep2({
  formData,
  updateForm,
  onBack,
  onFinish,
}) {
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
        />
        <input
          type="text"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={(e) => updateForm("lastName", e.target.value)}
        />
      </div>

      <div className="form-section">
        <h3>Contact information</h3>
        <input
          type="text"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => updateForm("phone", e.target.value)}
        />
        <input
          type="text"
          placeholder="Verification Code (4 digits)"
          value={formData.code}
          onChange={(e) => updateForm("code", e.target.value)}
        />
        <input
          type="email"
          placeholder="E-Mail"
          value={formData.email}
          onChange={(e) => updateForm("email", e.target.value)}
        />
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
          />
          <span>Consent to processing of personal data</span>
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
        <button onClick={onFinish} className="reservation-finish-btn">Finish Reservation</button>
      </div>
    </div>
  );
}
