import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AccountCircle, Email, Message, Phone } from '@mui/icons-material';

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
        if (!form.message) {
            newErrors.message = 'Message is required';
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
                                Turning your <span style={{ color: "#54a154", fontWeight: '700' }}>vision </span>
                                into tangible reality
                            </Typography>
                            {/* <p className="des_modal">
                                Delivering a cutting-edge digital experience to meet modern expectations.
                            </p> */}
                        </div>
                    </Col>
                    <Col md={6}>
                        <Button onClick={handleClose} className='close_modal_btn'>
                            <CloseIcon />
                        </Button>
                        <div className='contact_form modal_form'>
                            <DialogTitle id="alert-dialog-title" sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Typography variant='h5' className='right_test_modal'>
                                    Request Free Consultation
                                </Typography>

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
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <AccountCircle /> {/* Icon for Full Name */}
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
                                    error={!!errors.email}
                                    helperText={errors.email}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Email /> {/* Icon for Email */}
                                            </InputAdornment>
                                        ),
                                    }}
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
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Phone /> {/* Icon for Contact Number */}
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
                                    error={!!errors.message} // Display error state
                                    helperText={errors.message} // Display error message
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Message /> {/* Icon for Message */}
                                            </InputAdornment>
                                        ),
                                    }}

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
