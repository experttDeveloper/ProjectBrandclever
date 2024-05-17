import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box, Link } from '@mui/material';
import { toast } from 'react-toastify';


export default function AdminLogin({ isLoading }) {

    const [loading, setLoading] = isLoading();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        if (!username) {
            toast.error("Username is required");
            return;
        }
        if (!password) {
            toast.error("Password is required");
            return;
        }
        // Simulated authentication (for demonstration only)
        if (username === 'adminuser@gmail.com' && password === 'Admin@1911') {
            setLoading(!loading)
            const token = jwt_encode({ username, password });
            localStorage.setItem('Admintoken', token);
        } else {
            // Authentication failed
            toast.error("Invalid credential")
            setLoading(false)
            console.log('Authentication failed');
        }
    };

    const jwt_encode = (payload) => {
        return btoa(JSON.stringify(payload)); // Simulated JWT encoding
    };




    return (
        <div className='admin_login_pag'>
            <Container maxWidth="xs">
                <Box mt={5}>
                    <Typography variant="h4" align="center">Admin Login</Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Username"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                            label="Password"
                            type="password"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Login
                        </Button>

                    </form>
                </Box>
            </Container>
        </div>
    )
}
