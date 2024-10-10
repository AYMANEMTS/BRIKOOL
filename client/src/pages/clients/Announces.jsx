import React from 'react';
import Box from '@mui/joy/Box';
import {Button, Typography} from "@mui/material";
import JobCard from "../../components/client/JobCard";

function Announces() {
    const x = [{b:"a"}, {b:"b"}, {b:"c"}, {b:"d"}, {b:"e"}, {b:"f"}, {b:"g"}, {b:"h"}, {b:"i"}, {b:"j"}, {b:"k"}, {b:"l"}, {b:"m"}];

    return (
        <>
            <div className={"pb-5"}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: 1,
                        mb: 2,
                        ml: 1,
                        // Add responsive breakpoints for flex-direction and spacing
                        flexDirection: { xs: 'column', sm: 'row' }, // Stack items vertically on small screens, horizontal on medium+
                    }}
                >
                    <Typography
                        variant={"h5"}
                        sx={{
                            fontSize: { xs: '1.25rem', md: '1.5rem' }, // Adjust font size responsively
                            fontWeight: 'bold',
                            mb: { xs: 1, sm: 0 }, // Add margin for spacing on smaller screens
                        }}
                    >
                        Your Announcement
                    </Typography>

                    <Button
                        size={"large"}
                        variant={"outlined"}
                        sx={{
                            // Responsive size and colors
                            width: { xs: '100%', sm: 'auto' }, // Button takes full width on small screens, auto on larger
                            mt: { xs: 1, sm: 0 }, // Add margin-top for small screens
                            '&:hover': {
                                backgroundColor: 'blue',
                                color: 'white',
                            },
                        }}
                    >
                        Create new Announces
                    </Button>
                </Box>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5  gap-3 ">
                    {/* Worker Card */}
                    {x.map((item, key) => (
                        <JobCard key={key}/>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Announces;