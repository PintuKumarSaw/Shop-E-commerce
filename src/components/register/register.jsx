import React from "react";
import { Box, Modal, TextField, Button, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close"; // Import close icon
import "./register.css";
import { Link } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();

    const handleClose = () => {
        navigate("/"); // Go back to home page
    };

    return (
        <Modal open={true} onClose={handleClose} className="auth-modal">
            <Box className="auth-modal-box">
                {/* Close button at top-right */}
                <IconButton
                    onClick={handleClose}
                    className="close-btn"
                    size="large"
                    sx={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                        color: "#555",
                    }}
                >
                    <CloseIcon />
                </IconButton>

                <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Register</h2>

                <Box component="form" className="auth-form">
                    <TextField fullWidth label="Full Name" margin="normal" variant="outlined" />
                    <TextField fullWidth label="Email" margin="normal" variant="outlined" />
                    <TextField fullWidth label="Password" type="password" margin="normal" variant="outlined" />
                    <TextField fullWidth label="Confirm Password" type="password" margin="normal" variant="outlined" />
                    <Button fullWidth variant="contained" color="primary" className="auth-btn"> Register </Button>
                    <Link to="/login">Already Registered?</Link>
                </Box>
            </Box>
        </Modal>
    );
}
