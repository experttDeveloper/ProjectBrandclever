// Step1.jsx
import React, { useState } from 'react';
import { Grid, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import { Add, ArrowBack, Delete, Edit } from '@mui/icons-material';
import { validateStep3 } from './Validation';

const Step3 = ({ formData, setForm, navigation }) => {

    const { experiences } = formData;
    const [errors, setErrors] = useState({});
    const [openDialog, setOpenDialog] = useState(false);
    const [dialogErrors, setDialogErrors] = useState({});
    const [dialogMode, setDialogMode] = useState('add'); // add or edit
    const [editIndex, setEditIndex] = useState(null);
    const [newExperience, setNewExperience] = useState({ companyName: '', profile: '', experienceTime: '' });

    const handleAddExperience = () => {
        setNewExperience({ companyName: '', profile: '', experienceTime: '' });
        setDialogMode('add');
        setOpenDialog(true);
    };

    const handleEditExperience = (index) => {
        setNewExperience(experiences[index]);
        setEditIndex(index);
        setDialogMode('edit');
        setOpenDialog(true);
    };

    const handleDeleteExperience = (index) => {
        const updatedExperiences = experiences.filter((_, i) => i !== index);
        navigation.setForm('experiences', updatedExperiences);
    };

    const handleDialogClose = () => {
        setOpenDialog(false);
    };

    const handleSaveExperience = () => {
        const validationErrors = {};
        if (!newExperience.companyName) validationErrors.companyName = "Company name is required";
        if (!newExperience.profile) validationErrors.profile = "Profile is required";
        if (!newExperience.experienceTime) validationErrors.experienceTime = "Experience time is required";

        if (Object.keys(validationErrors).length > 0) {
            setDialogErrors(validationErrors);
        } else {
            setDialogErrors({});
            if (dialogMode === 'add') {
                setForm('experiences', [...experiences, newExperience]);
            } else if (dialogMode === 'edit') {
                const updatedExperiences = experiences.map((exp, index) =>
                    index === editIndex ? newExperience : exp
                );
                setForm('experiences', updatedExperiences);
            }
            setNewExperience({ companyName: '', profile: '', experienceTime: '' });
            setOpenDialog(false);
        }
    };

    const handleNext = () => {
        const validationErrors = validateStep3(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            navigation.handleSubmit();
        }
    };

    const handleBack = () => {
        navigation.previous();
    };


    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>
                        Previous Experience
                    </Typography>

                    <TableContainer component={Paper}>
                        <Button startIcon={<Add />} variant="contained" color="primary" onClick={handleAddExperience} style={{ float: "right" }}>
                            Add Experience
                        </Button>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Company Name</TableCell>
                                    <TableCell>Profile</TableCell>
                                    <TableCell>Experience Time</TableCell>
                                    <TableCell>Actions</TableCell>
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
                                                    <TableCell>
                                                        <IconButton onClick={() => handleEditExperience(index)}>
                                                            <Edit />
                                                        </IconButton>
                                                        <IconButton onClick={() => handleDeleteExperience(index)}>
                                                            <Delete />
                                                        </IconButton>
                                                    </TableCell>
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
                        onClick={handleBack}
                        className='prev_btn'
                        startIcon={<ArrowBack />}
                    >
                        Back
                    </Button>
                    <Button
                        color="primary"
                        onClick={handleNext}
                        className='submit_team_btn'
                    >
                        Submit
                    </Button>
                </Grid>
            </Grid>


            <Dialog open={openDialog} onClose={handleDialogClose}>
                <DialogTitle style={{ color: "black" }}>{dialogMode === 'add' ? 'Add New Experience' : 'Edit Experience'}</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Company Name"
                        value={newExperience.companyName}
                        onChange={(e) => setNewExperience({ ...newExperience, companyName: e.target.value })}
                        fullWidth
                        margin="normal"
                        error={!!dialogErrors.companyName}
                        helperText={dialogErrors.companyName}
                    />
                    <TextField
                        label="Profile"
                        value={newExperience.profile}
                        onChange={(e) => setNewExperience({ ...newExperience, profile: e.target.value })}
                        fullWidth
                        margin="normal"
                        eerror={!!dialogErrors.profile}
                        helperText={dialogErrors.profile}
                    />
                    <TextField
                        label="Experience Time"
                        value={newExperience.experienceTime}
                        onChange={(e) => setNewExperience({ ...newExperience, experienceTime: e.target.value })}
                        fullWidth
                        margin="normal"
                        error={!!dialogErrors.experienceTime}
                        helperText={dialogErrors.experienceTime}
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
