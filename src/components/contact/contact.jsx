import React from "react";
import "./contact.css";
import { Grid, TextField, Button, Box } from "@mui/material";

const Contact = () => {
    const reviewsData = [
        {
            img: "https://i.pravatar.cc/100?img=8",
            text: "The product looks exactly like the pictures. No fake promises! It’s sturdy, well-made, and the color is perfect. I’m super happy with this purchase.",
            name: "John Doe",
        },
        {
            img: "https://i.pravatar.cc/100?img=5",
            text: "I had a small issue with my order, but the support team resolved it within hours. Really appreciate the quick response and professional attitude. Will shop again for sure!",
            name: "Jane Smith",
        },
        {
            img: "https://i.pravatar.cc/100?img=3",
            text: "This website has become my go-to place for everything! Easy navigation, great deals, and smooth checkout. Loved the overall experience.",
            name: "Alex Johnson",
        },
        {
            img: "https://i.pravatar.cc/100?img=9",
            text: "Honestly, I didn’t expect such good quality at this price point. The item feels premium, and it performs better than other expensive brands. Highly recommended!",
            name: "Emily Davis",
        },
        {
            img: "https://i.pravatar.cc/100?img=4",
            text: "My order came perfectly packed — no dents or damage. The attention to detail in packaging shows how much they care about customer satisfaction.",
            name: "Michael Brown",
        },
        {
            img: "https://i.pravatar.cc/100?img=11",
            text: "I had to return one item because of a size issue, and the process was super easy. The refund was credited in just two days. Great service!",
            name: "Sarah Wilson",
        },
    ];

    return (
        <div>

            <section className="contact-section">
                <div className="contact-container">
                    {/* Info Cards */}
                    <div className="contact-info-cards">
                        <div className="info-card">
                            <div className="icon">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <h3>Our Address</h3>
                            <p>It Vedant dadar </p>
                            <p>Sunshine Plaza, 502</p>
                        </div>

                        <div className="info-card">
                            <div className="icon">
                                <i className="fas fa-phone-alt"></i>
                            </div>
                            <h3>Call Us</h3>
                            <p>+1 (91) 984-9123</p>
                            <p>+1 (91) 687-4534</p>
                        </div>

                        <div className="info-card">
                            <div className="icon">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <h3>Email Us</h3>
                            <p>shopnest@gmail.com</p>
                            <p>customer@gmail.com</p>
                        </div>
                    </div>

                    {/* Map + Form */}
                    <div className="contact-grid">
                        <div className="map-box">
                            <iframe
                                title="Itvedant Dadar Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9368.747048615467!2d72.83381743083774!3d19.016671517135805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cedd94aea6d7%3A0x697589a2d031093b!2sItvedant%20-%20Dadar!5e0!3m2!1sen!2sin!4v1760197305150!5m2!1sen!2sin"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        <Box
                            component="form"
                            sx={{
                                backgroundColor: "#fff",
                                boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                                borderRadius: 3,
                                p: { xs: 2, sm: 4 },
                                width: "100%",
                                maxWidth: 700,
                                mx: "auto",
                            }}
                            noValidate
                            autoComplete="off"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="Your Name"
                                        variant="outlined"
                                        required
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: "10px",
                                            },
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="Your Email"
                                        type="email"
                                        variant="outlined"
                                        required
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: "10px",
                                            },
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Subject"
                                        variant="outlined"
                                        required
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: "10px",
                                            },
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Message"
                                        variant="outlined"
                                        multiline
                                        rows={5}
                                        required
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: "10px",
                                            },
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        fullWidth
                                        sx={{
                                            mt: 1,
                                            backgroundColor: "#0ca4a5",
                                            "&:hover": { backgroundColor: "#098b8b" },
                                            borderRadius: "25px",
                                            px: 4,
                                            py: 1.2,
                                            fontWeight: 600,
                                            textTransform: "none",
                                        }}
                                    >
                                        Send Message
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>



                    </div>
                </div>


            </section>
            <div className="reviews-wrapper">
                {[0, 1].map(row => (
                    <div className="reviews-container" key={row}>
                        {reviewsData.slice(row * 3, row * 3 + 3).map((review, index) => (
                            <div
                                className={`review-card ${index === 1 ? "middle-card" : ""}`}
                                key={index}
                            >
                                <img src={review.img} alt={review.name} className="profile-img" />
                                <p className="reviewer-name">- {review.name}</p>
                                <p>⭐⭐⭐⭐⭐</p>
                                <p className="review-text">"{review.text}"</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Contact;
