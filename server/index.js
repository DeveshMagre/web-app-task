const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Temporary storage for OTPs
const otps = {};

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail", // Use the email service you prefer
  auth: {
    user: "", // Replace with your email
    pass: "1234", // Replace with your email's app password
  },
});

// Login route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    otps[email] = otp;

    // Send OTP via email
    try {
      await transporter.sendMail({
        from: '"Web-app-task" deveshmagre1@gmail.com',
        to: email,
        subject: "Your OTP Code",
        text: `Your OTP code is ${otp}. It will expire in 5 minutes.`,
      });

      console.log(`OTP for ${email}: ${otp}`); // Log OTP (for testing purposes)
      res.json({ success: true, message: "Login successful. OTP sent to email." });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ success: false, message: "Failed to send OTP email." });
    }
  } else {
    res.status(400).json({ success: false, message: "Invalid email or password." });
  }
});

// Verify OTP route
app.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;

  if (otps[email] && otps[email] === otp) {
    res.json({ success: true, message: "OTP verified successfully." });
    delete otps[email];
  } else {
    res.status(400).json({ success: false, message: "Invalid OTP." });
  }
});

// Resend OTP route
app.post("/send-otp", async (req, res) => {
  const { email } = req.body;

  if (email) {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    otps[email] = otp;

    // Resend OTP via email
    try {
      await transporter.sendMail({
        from: '"Web-app-task" deveshmagre1@gmail.com',
        to: email,
        subject: "Your OTP Code",
        text: `Your new OTP code is ${otp}. It will expire in 5 minutes.`,
      });

      console.log(`Resent OTP for ${email}: ${otp}`);
      res.json({ success: true, message: "OTP sent to email." });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ success: false, message: "Failed to send OTP email." });
    }
  } else {
    res.status(400).json({ success: false, message: "Email is required." });
  }
});

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
