import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Avatar } from '@mui/joy';
import UploadFileButton from "../UploadFileButton";

const UpdateInformationForm = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <div className="flex flex-col md:flex-row justify-center items-center p-4">
                {/* Image and File Input (Top on small screens, Left on larger screens) */}
                <div className="w-full md:w-1/2 flex flex-col items-center space-y-4 mb-6 md:mb-0">
                    {/* Avatar */}
                    <img
                        src={preview || "https://via.placeholder.com/50"}
                        className="object-cover w-36 h-36 rounded-full"
                        alt="avatar"
                    />
                    {/* File Input */}
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="mt-2"
                    />
                    {/*<UploadFileButton />*/}
                </div>

                {/* Inputs (Bottom on small screens, Right on larger screens) */}
                <div className="w-full md:w-1/2 space-y-4">
                    <div>
                        <TextField
                            label="Full Name"
                            type="text"
                            fullWidth
                            variant="outlined"
                            required
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>
                    <div>
                        <TextField
                            label="Email"
                            type="email"
                            fullWidth
                            variant="outlined"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <FormControl fullWidth>
                            <InputLabel id="city-label">City *</InputLabel>
                            <Select
                                labelId="city-label"
                                id="city"
                                value={city}
                                label="City"
                                onChange={(e) => setCity(e.target.value)}
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
                    </div>
                </div>
            </div>

            <div className="flex justify-end">
                <button className="w-40 mt-3 mr-4 p-3 bg-blue-800 hover:bg-blue-950 rounded-lg text-white">
                    Save
                </button>
            </div>
        </>
    );
};

export default UpdateInformationForm;
