// validation.js
export const validateStep1 = (formData) => {
    const errors = {};

    if (!formData.firstName) errors.firstName = "First name is required";
    if (!formData.lastName) errors.lastName = "Last name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.phoneNumber) errors.phoneNumber = "Phone number is required";
    if (!formData.dob) errors.dob = "Date of birth is required";
    if (!formData.residentialAddress) errors.residentialAddress = "Residential address is required";
    if (!formData.postalCode) errors.postalCode = "Postal code is required";

    return errors;
};

export const validateStep2 = (formData) => {
    const errors = {};

    if (!formData.masterDegree) errors.masterDegree = "Master degree is required";
    if (!formData.masterPercentage) errors.masterPercentage = "Master percentage is required";
    if (!formData.bachelorDegree) errors.bachelorDegree = "Bachelor degree is required";
    if (!formData.bachelorPercentage) errors.bachelorPercentage = "Bachelor percentage is required";
    if (!formData.twelfth) errors.twelfth = "Twelfth is required";
    if (!formData.twelfthPercentage) errors.twelfthPercentage = "Twelfth percentage is required";
    if (!formData.tenth) errors.tenth = "Tenth is required";
    if (!formData.tenthPercentage) errors.tenthPercentage = "Tenth percentage is required";

    return errors;
};

export const validateStep3 = (formData) => {
    const errors = {};

    formData.experiences.forEach((experience, index) => {
        if (!experience.companyName) errors[`companyName-${index}`] = "Company name is required";
        if (!experience.profile) errors[`profile-${index}`] = "Profile is required";
        if (!experience.experienceTime) errors[`experienceTime-${index}`] = "Experience time is required";
    });

    return errors;
};
