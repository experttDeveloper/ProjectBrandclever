import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton, InputAdornment, Link, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AccountCircle, Email, Message, Phone } from '@mui/icons-material';
import Meeting from '../Meeting';

export default function ContactUsModal({ useOpen, nameTitle }) {

   

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

    function validatePhoneNumber(phoneNumber) {
        const phoneRegex = /^(\+?\d{1,3}[- ]?)?\(?\d{1,4}\)?[- ]?\d{1,4}[- ]?\d{1,4}[- ]?\d{1,9}$/;
        return phoneRegex.test(phoneNumber);
    }


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
            newErrors.name = 'Full name is required.';
        }
        if (!form.email) {
            newErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = 'Invalid email address.';
        }
        if (!form.message) {
            newErrors.message = 'Message is required.';
        }

        return newErrors;
    };

    // Handle form submission
    const handleSubmit = () => {
        const validationErrors = validate();

        const formData = {
            name: form.name,
            email: form.email,
            number: form.number,
            message: form.message,
            subject: "",
            service: ""
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            // Form is valid, do something with the data (e.g., send to server)
            axios
                .post('https://developer.brandclever.in/brand/admin/form/contactForm.php', formData)
                .then((res) => {
                    console.log("res", res.data)
                    if (res.data.status) {
                        toast.success(res.data.message || "Form submitted successfully!")
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

    const getMeetingLinks = (nameTitle) => {
        switch (nameTitle) {
            case 'Manish Verma':
                return {
                    fifteenMinutes: 'https://calendly.com/experttdeveloper/schedule-a-call-with-brandclever?month=2024-08',
                    thirtyMinutes: 'https://calendly.com/experttdeveloper/schedule-a-call-with-brandclever?month=2024-08'
                };
            case 'Pooja Chauhan':
                return {
                    fifteenMinutes: 'https://calendly.com/experttdeveloper/schedule-a-call-with-brandclever?month=2024-08',
                    thirtyMinutes: 'https://calendly.com/experttdeveloper/schedule-a-call-with-brandclever?month=2024-08'
                };
            case 'Ishika Bhardwaj':
                return {
                    fifteenMinutes: 'https://calendly.com/experttdeveloper/schedule-a-call-with-brandclever?month=2024-08',
                    thirtyMinutes: 'https://calendly.com/experttdeveloper/schedule-a-call-with-brandclever?month=2024-08'
                };
            case 'Charanjeet Singh':
                return {
                    fifteenMinutes: 'https://calendly.com/experttdeveloper/schedule-a-call-with-brandclever?month=2024-08',
                    thirtyMinutes: 'https://calendly.com/experttdeveloper/schedule-a-call-with-brandclever?month=2024-08'
                };
            default:
                return {
                    fifteenMinutes: 'https://calendly.com/experttdeveloper/schedule-a-call-with-brandclever?month=2024-08',
                    thirtyMinutes: 'https://calendly.com/experttdeveloper/schedule-a-call-with-brandclever?month=2024-08'
                };
        }
    };

    // Get the links based on the current name
    const { fifteenMinutes, thirtyMinutes } = getMeetingLinks(nameTitle);
    return (
        <React.Fragment>
            <Dialog
                maxWidth="md"
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                className='modal_form_contact_front'
            >

                <Row style={{ marginRight: "0" }} className='left_modal_center'>
                    <Col md={6} className='left_modal'>
                        <div className='left_modal_iner'>
                            <Typography className='title_modal' variant='h4'>
                                Turning your <span style={{ color: "#54a154", fontWeight: '700' }}>vision </span>
                                into tangible reality
                            </Typography>

                        </div>
                    </Col>
                    <Col md={6} className='meeting_modal_sec'>
                        <IconButton
                            aria-label="close"
                            onClick={handleClose}
                            sx={{
                                position: 'absolute',
                                right: 8,
                                top: 8,
                                color: (theme) => theme.palette.grey[500],
                            }}
                            className='meeting_close_btn'
                        >
                            <CloseIcon />
                        </IconButton>
                        <div className='contact_form modal_form modal_form_error'>
                            <DialogTitle id="alert-dialog-title" sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Typography variant='h5' className='right_test_modal'>
                                    Request Free Consultation
                                </Typography>

                            </DialogTitle>
                            <DialogContent>
                                <div className='meeting_links'>
                                    <Link href={fifteenMinutes} target="_blank">
                                        <p className='linkss'>15 minutes</p>
                                    </Link>
                                    <Link href={thirtyMinutes} target="_blank">
                                        <p className='linkss'>30 minutes</p>
                                    </Link>
                                </div>
                                {/* <TextField
                                    fullWidth
                                    id="name"
                                    label="Full name *"
                                    variant="standard"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    
                                    helperText={errors.name} 
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <AccountCircle /> 
                                            </InputAdornment>
                                        ),
                                    }}
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
                                   
                                    helperText={errors.email}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Email /> 
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <TextField
                                    type="text"
                                    fullWidth
                                    id="number"
                                    label="Contact number"
                                    variant="standard"
                                    name="number"
                                    value={form.number}
                                    onChange={handleChange}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Phone /> 
                                            </InputAdornment>
                                        ),
                                    }}

                                />
                                <TextField
                                    fullWidth
                                    id="message"
                                    label="Message"
                                    variant="standard"
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                   
                                    helperText={errors.message} 
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Message /> 
                                            </InputAdornment>
                                        ),
                                    }}

                                /> */}
                            </DialogContent>

                            {/* <DialogActions>
                                <Button
                                    onClick={handleSubmit}
                                    fullWidth
                                    className='modal_button'
                                >
                                    Submit
                                </Button>
                            </DialogActions> */}
                        </div>
                    </Col>
                </Row>

            </Dialog>
        </React.Fragment>
    )
}
