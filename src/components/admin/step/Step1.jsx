// Step1.jsx
import React, { useState } from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { validateStep1 } from './Validation';

const Step1 = ({ formData, setForm, setImage, navigation }) => {

    const [errors, setErrors] = useState({});

    const handleNext = () => {
        const validationErrors = validateStep1(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            navigation.next();
        }
    };

    const { firstName, lastName, image, email, phoneNumber, dob, residentialAddress, postalCode } = formData;
    return (
        <div>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="First Name"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => setForm(e.target.name, e.target.value)}
                        margin="normal"
                        fullWidth
                        error={!!errors.firstName}
                        helperText={errors.firstName}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="Last Name"
                        name="lastName"
                        value={lastName}
                        onChange={(e) => setForm(e.target.name, e.target.value)}
                        margin="normal"
                        fullWidth
                        error={!!errors.lastName}
                        helperText={errors.lastName}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="Image"
                        name="lastName"
                        margin="normal"
                        fullWidth
                        type="file"
                        onChange={setImage}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="Email"
                        name="email"
                        value={email}
                        onChange={(e) => setForm(e.target.name, e.target.value)}
                        margin="normal"
                        error={!!errors.email}
                        helperText={errors.email}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="Phone Number"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setForm(e.target.name, e.target.value)}
                        margin="normal"
                        error={!!errors.phoneNumber}
                        helperText={errors.phoneNumber}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="Date of Birth"
                        name="dob"
                        type="date"
                        value={dob}
                        onChange={(e) => setForm(e.target.name, e.target.value)}
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        error={!!errors.dob}
                        helperText={errors.dob}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="Residential Address"
                        name="residentialAddress"
                        value={residentialAddress}
                        onChange={(e) => setForm(e.target.name, e.target.value)}
                        margin="normal"
                        error={!!errors.residentialAddress}
                        helperText={errors.residentialAddress}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="Postal Code"
                        name="postalCode"
                        value={postalCode}
                        onChange={(e) => setForm(e.target.name, e.target.value)}
                        margin="normal"
                        fullWidth
                        error={!!errors.postalCode}
                        helperText={errors.postalCode}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Button
                        onClick={handleNext}
                        className='next_btn'
                        endIcon={<ArrowForward />}
                    >
                        Next
                    </Button>
                </Grid>
            </Grid>

        </div>
    );
};

export default Step1;
