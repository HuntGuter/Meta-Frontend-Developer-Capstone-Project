import {useState} from "react";
import BookingFormStep1 from "./BookingFormStep1.js";
import BookingFormStep2 from "./BookingFormStep2.js";
import { submitAPI } from "./api.js";
import '../styles/reservation.css'

export default function BookingPage() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        month: "",
        day: "",
        time: "",
        guests: "",
        occasion: "",
        firstName: "",
        lastName: "",
        phone: "",
        code: "",
        email: "",
        callBack: false,
        consent: false,
        newsletter: false,
    });

    const updateForm = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleSubmit = () => {
        if (submitAPI(formData)) {
        alert("Reservation Complete! Thank you for choosing us.");
        setFormData({
            month: "",
            day: "",
            time: "",
            guests: "",
            occasion: "",
            firstName: "",
            lastName: "",
            phone: "",
            code: "",
            email: "",
            callBack: false,
            consent: false,
            newsletter: false,
        });
        setStep(1);
        } else {
        alert("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="reservation-page">
            <div className="reservation">
                {step === 1 && (
                    <BookingFormStep1 
                        formData={formData}
                        updateForm={updateForm} 
                        onNext={() => setStep(2)}    
                    />
                )}
                {step === 2 && (
                    <BookingFormStep2 
                        formData={formData}
                        updateForm={updateForm} 
                        onBack={() => setStep(1)}
                        onFinish={handleSubmit}
                    />
                )}
            </div>
        </div>
    ); 
}