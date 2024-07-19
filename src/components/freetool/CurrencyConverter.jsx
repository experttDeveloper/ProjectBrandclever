import React, { useState } from 'react';
import axios from 'axios';
import '../../css/converter.css'
import { Button, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Container } from 'react-bootstrap';
import { ClipLoader } from 'react-spinners';

const CurrencyConverter = () => {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('INR');
    const [convertedAmount, setConvertedAmount] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const apiKey = '7bfa6ab03b54525c1ad2aebb'; // Replace with your exchangerate-api key

    const convertCurrency = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`);
            const rate = response.data.conversion_rates[toCurrency];
            setConvertedAmount((amount * rate).toFixed(2));
        } catch (err) {
            setError('Error fetching conversion rate');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='curruncy_component'>
            <Container>
                <h1 className='currency_title'>Currency Converter</h1>
                <div>
                    {error && <p>{error}</p>}
                    <Grid spacing={2} container>
                        <Grid item md={6}>
                            <InputLabel id="demo-simple-select-label">From</InputLabel>
                            <Select fullWidth value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
                                <MenuItem value="USD">USD (Dollar)</MenuItem>
                                <MenuItem value="EUR">EUR (Euro)</MenuItem>
                                <MenuItem value="GBP">GBP (Pound)</MenuItem>
                                <MenuItem value="JPY">JPY (Yen)</MenuItem>
                                <MenuItem value="AUD">AUD (Australian Dollar)</MenuItem>
                                <MenuItem value="CAD">CAD (Canadian Dollar)</MenuItem>
                                {/* Add more currencies as needed */}
                            </Select>
                        </Grid>
                        <Grid item md={6}>
                            <InputLabel id="demo-simple-select-label">To</InputLabel>
                            <Select fullWidth value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
                                <MenuItem value="INR">INR (Rupee)</MenuItem>
                                <MenuItem value="USD">USD (Dollar)</MenuItem>
                                <MenuItem value="EUR">EUR (Euro)</MenuItem>
                                <MenuItem value="GBP">GBP (Pound)</MenuItem>
                                <MenuItem value="JPY">JPY (Yen)</MenuItem>
                                <MenuItem value="AUD">AUD (Australian Dollar)</MenuItem>
                                <MenuItem value="CAD">CAD (Canadian Dollar)</MenuItem>
                                {/* Add more currencies as needed */}
                            </Select>
                        </Grid>
                        <Grid item md={6}>
                            <TextField
                                fullWidth
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                placeholder="Amount"
                            />
                        </Grid>
                        <Grid item md={6}>
                            <TextField
                                fullWidth
                                value={convertedAmount ? convertedAmount : "0"}
                                placeholder="Amount"
                                variant="filled"
                            />

                        </Grid>
                        <Grid item md={6} alignItems="center">
                            {
                                loading ? (
                                    <ClipLoader size={20} color="black" />
                                ) : (

                                    <Button variant="contained" onClick={convertCurrency}>Convert</Button>
                                )
                            }
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
           
    );
};

export default CurrencyConverter;
