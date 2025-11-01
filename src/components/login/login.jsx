import React, { useState } from "react";
import { useAuth } from "./authContext";
import { Box, Modal, TextField, Button, IconButton } from "@mui/material";
import { useNavigate, useLocation, Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import "./login.css";

export default function Login() {
    const navigate = useNavigate();
    const location = useLocation();  
    const { setIsAuth } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const from = location.state?.from?.pathname || "/";

    const handleClose = () => {
        navigate(-1); 
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === "admin@gmail.com" && password === "admin123") {
            setIsAuth(true);
            navigate(from, { replace: true });  
        } else {
            alert("Invalid credentials! Use admin@gmail.com / admin123");
        }
    };

    return (
        <Modal open={true} onClose={handleClose} className="auth-modal">
            <Box className="auth-modal-box">
                <IconButton
                    onClick={handleClose}
                    className="close-btn"
                    size="large"
                    sx={{ position: "absolute", top: 10, right: 10, color: "#555" }}
                >
                    <CloseIcon />
                </IconButton>

                <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>

                <Box component="form" className="auth-form" onSubmit={handleLogin}>
                    <TextField
                        fullWidth
                        label="Email"
                        margin="normal"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        margin="normal"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button type="submit" fullWidth variant="contained" color="primary" className="auth-btn">
                        Login
                    </Button>
                    <Link to='/register'>New User?</Link>
                </Box>
            </Box>
        </Modal>
    );
}
