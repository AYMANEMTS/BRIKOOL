import React, {useState} from 'react';
import { Box, Button, TextField, Typography, Link } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import ClientApi from "../../api/ClientApi";
import {useAuth} from "../../context/UserProvider";
import { useCookies } from 'react-cookie';

function LoginForm({handllSwapForm,handleOpen}) {

    const handlLogin = async () => {
        const data = {email:"oujdimraymane@gmail.com",password:"123456789"}
        try {
            // const res = await login(data)
            const res = await ClientApi.login(data);
            localStorage.setItem('user',res?.data?.user)
            localStorage.setItem('authenticated',true)
            handleOpen()
        } catch (error) {
            console.error("Login failed:", error); // Log the error
        }
    }
    const [cookies] = useCookies();
    console.log("Cookies:", cookies.jwt);
    return (
        <Box
            component="form"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                width: '100%',
                padding: 2,
                '@media (max-width: 600px)': {
                    padding: 1,
                },
            }}
        >
            <Typography variant="h5" sx={{ textAlign: 'center', mb: 2 }}>
                Login to Your Account
            </Typography>

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

            <Button onClick={handlLogin}
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2, mb: 1 }}
            >
                Sign In
            </Button>

            <Button
                variant="outlined"
                color="primary"
                fullWidth
                startIcon={<GoogleIcon />}
                sx={{ mb: 2 }}
            >
                Sign In with Google
            </Button>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                <Link onClick={handllSwapForm} variant="body2" sx={{ textDecoration: 'none' }} className={"cursor-pointer"}>
                    Register
                </Link>
                <Link  variant="body2" sx={{ textDecoration: 'none' }} className={"cursor-pointer"}>
                    Forgot Password?
                </Link>
            </Box>
        </Box>
    );
}

export default LoginForm;
