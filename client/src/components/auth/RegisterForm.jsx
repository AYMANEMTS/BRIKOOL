import React, {useState} from 'react';
import { Box, Button, TextField, Typography, Link, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

function RegisterForm({handllSwapForm}) {
    const [city, setCity] = useState('');
    const handleCityChange = (event) => {
        setCity(event.target.value);
    };
    return (
        <Box
            component="form"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                width: '100%',
                maxWidth: 400,
                padding: 2,
                margin: 'auto',
                '@media (max-width: 600px)': {
                    padding: 1,
                    width: '90%',
                },
            }}
        >
            <Typography variant="h5" sx={{ textAlign: 'center', mb: 2 }}>
                Create an Account
            </Typography>

            <TextField
                label="Full Name"
                type="text"
                fullWidth
                variant="outlined"
                required
            />
            <TextField
                label="Email"
                type="email"
                fullWidth
                variant="outlined"
                required
            />
            <TextField
                label="Password"
                type="password"
                fullWidth
                variant="outlined"
                required
            />
            {/* City Dropdown */}
            <FormControl fullWidth>
                <InputLabel id="city-label">City *</InputLabel>
                <Select
                    labelId="city-label"
                    id="city"
                    value={city}
                    label="City"
                    onChange={handleCityChange}
                    required
                 >
                    <MenuItem value="Oujda">Oujda</MenuItem>
                    <MenuItem value="Casablanca">Casablanca</MenuItem>
                    <MenuItem value="Rabat">Rabat</MenuItem>
                    <MenuItem value="Marrakech">Marrakech</MenuItem>
                    <MenuItem value="Tangier">Tangier</MenuItem>
                    <MenuItem value="Fez">Fez</MenuItem>
                </Select>
            </FormControl>

            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2, mb: 1 }}
            >
                Register
            </Button>

            <Button
                variant="outlined"
                color="primary"
                fullWidth
                startIcon={<GoogleIcon />}
                sx={{ mb: 2 }}
            >
                Register with Google
            </Button>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }} onClick={handllSwapForm} className={"cursor-pointer"}>
                <Link  variant="body2" sx={{ textDecoration: 'none' }}>
                    Already have an account ? <span className={"pl-1"}>Sign in</span>
                </Link>
            </Box>
        </Box>
    );
}

export default RegisterForm;
