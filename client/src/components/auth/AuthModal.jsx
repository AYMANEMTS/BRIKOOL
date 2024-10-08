import React from 'react';
import {Modal, ModalClose, Sheet, Typography} from "@mui/joy";
import {Login} from "@mui/icons-material";

function AuthModal({open,handleOpen}) {
    return (
        <Modal
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            open={open}
            onClose={() => handleOpen()}
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
            <Sheet
                variant="outlined"
                sx={{ maxWidth: 500, borderRadius: 'md', p: 3, boxShadow: 'lg' }}
            >
                <ModalClose variant="plain" sx={{ m: 1 }} />
                <Typography
                    component="h2"
                    id="modal-title"
                    level="h4"
                    textColor="inherit"
                    sx={{ fontWeight: 'lg', mb: 1 }}
                >
                    This is the modal title
                </Typography>
                <div id="modal-desc" >
                    <Login />
                </div>
            </Sheet>
        </Modal>
    );
}

export default AuthModal;