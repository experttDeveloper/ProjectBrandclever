// Step1.jsx
import React from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const Step2 = ({ formData, setForm, navigation }) => {

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
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Button
                        onClick={navigation.previous}
                        className='prev_btn'
                        startIcon={<ArrowBack />}
                    >
                        Back
                    </Button>
                    <Button
                        onClick={() => navigation.next()}
                        className='next_btn'
                        endIcon={<ArrowForward />}
                    >Next</Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default Step2;
