// Step1.jsx
import React from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

const Step1 = ({ formData, setForm, setImage, navigation }) => {
    const { firstName, lastName, image, email, phoneNumber, dob, residentialAddress, postalCode } = formData;
    return (
        <div>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="First Name"
                        name="firstName"
                        value={firstName || ""}
                        onChange={(e) => setForm(e.target.name, e.target.value)}
                        margin="normal"
                        fullWidth
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
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Button
                        onClick={() => navigation.next()}
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
