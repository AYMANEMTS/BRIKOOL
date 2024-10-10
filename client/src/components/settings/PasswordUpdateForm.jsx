import React, { useState } from 'react';
import Grid from "@mui/joy/Grid";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const PasswordUpdateForm = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Current Password:', currentPassword);
        console.log('New Password:', newPassword);
        console.log('Confirm Password:', confirmPassword);
    };

    return (
        <form onSubmit={handleSubmit} className={"my-3"}>
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                <Grid item xs={12} >
                    <TextField
                        label="Current Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        required
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="New Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                </Grid>
                <Grid item  xs={12} md={6}>
                    <TextField
                        label="Confirm Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                    >
                        Update Password
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default PasswordUpdateForm;
