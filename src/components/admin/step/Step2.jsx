// Step1.jsx
import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { validateStep2 } from './Validation';

const Step2 = ({ formData, setForm, navigation }) => {
    const [errors, setErrors] = useState({});

    const handleNext = () => {
        const validationErrors = validateStep2(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            navigation.next();
        }
    };

    const handleBack = () => {
        navigation.previous();
    };

    const { masterDegree, masterPercentage, bachelorDegree, bachelorPercentage, twelfth, twelfthPercentage, tenth, tenthPercentage } = formData;
    return (
        <div>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="Master Degree"
                        name="masterDegree"
                        value={masterDegree}
                        onChange={(e) => setForm(e.target.name, e.target.value)}
                        margin="normal"
                        fullWidth
                        error={!!errors.masterDegree}
                        helperText={errors.masterDegree}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="Master Percentage"
                        name="masterPercentage"
                        value={masterPercentage}
                        onChange={(e) => setForm(e.target.name, e.target.value)}
                        margin="normal"
                        fullWidth
                        error={!!errors.masterPercentage}
                        helperText={errors.masterPercentage}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="Bachelor Degree"
                        name="bachelorDegree"
                        value={bachelorDegree}
                        onChange={(e) => setForm(e.target.name, e.target.value)}
                        margin="normal"
                        fullWidth
                        error={!!errors.bachelorDegree}
                        helperText={errors.bachelorDegree}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="Bachelor Percentage"
                        name="bachelorPercentage"
                        value={bachelorPercentage}
                        onChange={(e) => setForm(e.target.name, e.target.value)}
                        margin="normal"
                        fullWidth
                        error={!!errors.bachelorPercentage}
                        helperText={errors.bachelorPercentage}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="Twelfth"
                        name="twelfth"
                        value={twelfth}
                        onChange={(e) => setForm(e.target.name, e.target.value)}
                        margin="normal"
                        fullWidth
                        error={!!errors.twelfth}
                        helperText={errors.twelfth}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="Twelfth Percentage"
                        name="twelfthPercentage"
                        value={twelfthPercentage}
                        onChange={(e) => setForm(e.target.name, e.target.value)}
                        margin="normal"
                        fullWidth
                        error={!!errors.twelfthPercentage}
                        helperText={errors.twelfthPercentage}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="Tenth"
                        name="tenth"
                        value={tenth}
                        onChange={(e) => setForm(e.target.name, e.target.value)}
                        margin="normal"
                        fullWidth
                        error={!!errors.tenth}
                        helperText={errors.tenth}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="Tenth Percentage"
                        name="tenthPercentage"
                        value={tenthPercentage}
                        onChange={(e) => setForm(e.target.name, e.target.value)}
                        margin="normal"
                        fullWidth
                        error={!!errors.tenthPercentage}
                        helperText={errors.tenthPercentage}
                        
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Button
                        onClick={handleBack}
                        className='prev_btn'
                        startIcon={<ArrowBack />}
                    >
                        Back
                    </Button>
                    <Button
                        onClick={handleNext}
                        className='next_btn'
                        endIcon={<ArrowForward />}
                    >Next</Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default Step2;
