import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';

export default function ContactUsModal({ useOpen }) {

    const [open, setOpen] = useOpen();
    const [errors, setErrors] = React.useState({});
    const [form, setForm] = React.useState({
        name: '',
        email: '',
        number: '',
        message: '',
    });

    const handleClose = () => {
        setOpen(false);
    };


    // State for error messages

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });

        // Clear errors for the field when it's updated
        setErrors({ ...errors, [name]: '' });
    };

    // Validate the form
    const validate = () => {
        const newErrors = {};

        if (!form.name) {
            newErrors.name = 'Full name is required';
        }
        if (!form.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = 'Invalid email address';
        }
        
        return newErrors;
    };

    // Handle form submission
    const handleSubmit = () => {
        const validationErrors = validate();
        
        const formData ={
            name:form.name,
            email: form.email,
            contact_number:form.number,
            message:form.message
        }
        console.log("ofmr",formData)

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            // Form is valid, do something with the data (e.g., send to server)
            axios
                .post('https://developer.brandclever.in/brand/admin/form/contactForm.php', formData)
                .then((res) => {
                    console.log("response", res)
                    if (res) {
                        setOpen(false);
                        return
                    }

                })
                .catch((error) => {
                    console.log("error", error)
                    // console.error(error.response.data.error); // Log detailed error message
                });
        }
    };

    return (
        <React.Fragment>
            <Dialog
                maxWidth="md"
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >

                <Row style={{ marginRight: "0" }}>
                    <Col md={6}>
                        <div className='left_modal'>
                            <Typography className='title_modal' variant='h4'>
                                Turning your <span style={{ color: "#54a154" }}>vision </span>
                                into tangible reality
                            </Typography>
                            {/* <p className="des_modal">
                                Delivering a cutting-edge digital experience to meet modern expectations.
                            </p> */}
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='contact_form modal_form'>
                            <DialogTitle id="alert-dialog-title" sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Typography variant='h5' className='right_test_modal'>
                                Request Free Consultation 
                                </Typography>
                                <IconButton onClick={handleClose}>
                                    <CloseIcon />
                                </IconButton>
                            </DialogTitle>
                            <DialogContent>
                                <TextField
                                    fullWidth
                                    id="name"
                                    label="Full name *"
                                    variant="standard"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    error={!!errors.name} // Display error state
                                    helperText={errors.name} // Display error message
                                />
                                <TextField
                                    type="email"
                                    fullWidth
                                    id="email"
                                    label="E-Mail ID *"
                                    variant="standard"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    error={!!errors.email}
                                    helperText={errors.email}
                                />
                                <TextField
                                    type="number"
                                    fullWidth
                                    id="number"
                                    label="Contact number"
                                    variant="standard"
                                    name="number"
                                    value={form.number}
                                    onChange={handleChange}
                                  
                                />
                                <TextField
                                    fullWidth
                                    id="message"
                                    label="Message"
                                    variant="standard"
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                   
                                />
                            </DialogContent>

                            <DialogActions>
                                <Button
                                    onClick={handleSubmit}
                                    fullWidth
                                    className='modal_button'
                                >
                                    Submit
                                </Button>
                            </DialogActions>
                        </div>
                    </Col>
                </Row>

            </Dialog>
        </React.Fragment>
    )
}
