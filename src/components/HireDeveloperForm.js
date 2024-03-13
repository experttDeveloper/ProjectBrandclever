import { TextField } from '@mui/material';
import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap';

export default function HireDeveloperForm() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to server
        console.log(formData);
    };


    return (
        <div>
            <Card style={{ backgroundImage: "linear-gradient(#ed5952, yellow)", padding: "15px" }}>
                <h2>Get Consultation Now!</h2>
                <p>Let’s Discuss to Build Something Great Together!</p>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: "10px" }}>
                        <TextField
                            fullWidth
                            name='name'
                            label="Name"
                            variant="outlined"
                            placeholder='Your Name'
                            onChange={handleChange}
                        />

                    </div>
                    <div style={{ marginBottom: "10px" }}>
                        <TextField
                            fullWidth
                            name='email'
                            id="name"
                            label="Email"
                            variant="outlined"
                            placeholder='Your Email'
                            onChange={handleChange}
                        />
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                        <TextField
                            fullWidth
                            id="number"
                            name='number'
                            label="Phone Number"
                            variant="outlined"
                            placeholder='Your Phone Number'
                            onChange={handleChange}
                        />
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                        <TextField
                            fullWidth
                            id="message"
                            name="message"
                            label="Message"
                            onChange={handleChange}
                            placeholder='Message'
                        />
                    </div>
                    <Button variant="contained" type="submit">Hire Developer</Button>
                </form>
            </Card>
        </div>
    )
}
