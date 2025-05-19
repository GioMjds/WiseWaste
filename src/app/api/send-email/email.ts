import nodemailer from "nodemailer";

export async function sendOtpEmail(email: string, otp: string) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Your WiseWaste OTP Code",
        text: `Your OTP code is: ${otp}`,
    };

    await transporter.sendMail(mailOptions);
}