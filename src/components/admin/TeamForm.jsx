// Form.jsx
import React, { useState } from 'react';
import Step1 from './step/Step1';
import Step2 from './step/Step2';
import Step3 from './step/Step3';
import { Step, StepLabel, Stepper } from '@mui/material';

const TeamForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        dob: '',
        residentialAddress: '',
        postalCode: '',
        masterDegree: '',
        masterPercentage: '',
        bachelorDegree: '',
        bachelorPercentage: '',
        twelfth: '',
        twelfthPercentage: '',
        tenth: '',
        tenthPercentage: '',
        experiences: [], // Initialize experiences as an empty array
    });

    const steps = ['Personal Information', 'Education Information', 'Experience Information'];

    const [step, setStep] = useState(0);
    const [image, setImage] = useState(null);

    const setForm = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const next = () => {
        setStep(step + 1);
    };

    const previous = () => {
        setStep(step - 1);
    };

    const handleSubmit = () => {
        // Handle submission of formData
        console.log(formData);
        console.log("image", image)
    };

    const props = { formData, setForm, setImage: handleImageChange, navigation: { next, previous, handleSubmit,setForm } };

    return (
        <div>
            <Stepper activeStep={step}>
                {steps.map((label, index) => (
                    <Step key={index}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            {step === 0 && <Step1 {...props} />}
            {step === 1 && <Step2 {...props} />}
            {step === 2 && <Step3 {...props} />}
        </div>
    );
};

export default TeamForm;
