// Step1.jsx
import React, { useState } from 'react';
import { Grid, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Add, ArrowBack } from '@mui/icons-material';

const Step3 = ({ formData, setForm, navigation }) => {

    const { experiences } = formData;
    const [openDialog, setOpenDialog] = useState(false);
    const [newExperience, setNewExperience] = useState({ companyName: '', profile: '', experienceTime: '' });

    const handleAddExperience = () => {
        setOpenDialog(true);
    };

    const handleDialogClose = () => {
        setOpenDialog(false);
    };

    const handleSaveExperience = () => {
        // Add the new experience to the experiences list
        navigation.setForm('experiences', [...formData.experiences, newExperience]);
        setNewExperience({ companyName: '', profile: '', experienceTime: '' });
        setOpenDialog(false);
    };


    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>
                        Previous Experience
                    </Typography>

                    <TableContainer component={Paper}>
                        <Button startIcon={<Add/>} variant="contained" color="primary" onClick={handleAddExperience} style={{ float: "right" }}>
                            Add Experience
                        </Button>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Company Name</TableCell>
                                    <TableCell>Profile</TableCell>
                                    <TableCell>Experience Time</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    experiences.length ? (
                                        <>
                                            {experiences.map((experience, index) => (
                                                <TableRow key={index}>
                                                    <TableCell>{experience.companyName}</TableCell>
                                                    <TableCell>{experience.profile}</TableCell>
                                                    <TableCell>{experience.experienceTime}</TableCell>
                                                </TableRow>
                                            ))}
                                        </>
                                    ) : (
                                        <p className='no_experience'>No experince found</p>
                                    )
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>

                </Grid>
                <Grid item xs={12}>

                    <Button
                        color="primary"
                        onClick={navigation.previous}
                        className='prev_btn'
                        startIcon={<ArrowBack />}
                    >
                        Back
                    </Button>
                    <Button
                        color="primary"
                        onClick={navigation.handleSubmit}
                        className='submit_team_btn'
                    >
                        Submit
                    </Button>
                </Grid>
            </Grid>


            <Dialog open={openDialog} onClose={handleDialogClose}>
                <DialogTitle sx={{ color: "black" }}>Add New Experience</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Company Name"
                        value={newExperience.companyName}
                        onChange={(e) => setNewExperience({ ...newExperience, companyName: e.target.value })}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Profile"
                        value={newExperience.profile}
                        onChange={(e) => setNewExperience({ ...newExperience, profile: e.target.value })}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Experience Time"
                        value={newExperience.experienceTime}
                        onChange={(e) => setNewExperience({ ...newExperience, experienceTime: e.target.value })}
                        fullWidth
                        margin="normal"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose} color="primary" variant="outlined">
                        Cancel
                    </Button>
                    <Button onClick={handleSaveExperience} color="success" variant="contained">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Step3;
