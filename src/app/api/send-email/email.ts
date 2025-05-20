import nodemailer from "nodemailer";

export async function sendOtpEmail(email: string, otp: string) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    // Create the HTML email template
    const htmlTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>WiseWaste OTP Code</title>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');
            
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Outfit', Arial, sans-serif;
                background-color: #f8fdf9;
                line-height: 1.6;
                color: #328e6e;
            }
            
            .email-container {
                max-width: 600px;
                margin: 0 auto;
                background: linear-gradient(135deg, #e1eebc 0%, #ffffff 100%);
                border-radius: 20px;
                overflow: hidden;
                box-shadow: 0 10px 40px rgba(50, 142, 110, 0.1);
            }
            
            .header {
                background: linear-gradient(135deg, #328e6e 0%, #67ae6e 100%);
                padding: 40px 30px;
                text-align: center;
                position: relative;
                overflow: hidden;
            }
            
            .header::before {
                content: '';
                position: absolute;
                top: -50%;
                left: -50%;
                width: 200%;
                height: 200%;
                background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="leaves" patternUnits="userSpaceOnUse" width="20" height="20"><path d="M10 2C6 2 2 6 2 10C2 14 6 18 10 18C14 18 18 14 18 10C18 6 14 2 10 2Z" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23leaves)"/></svg>') repeat;
                opacity: 0.1;
                animation: float 20s ease-in-out infinite;
            }
            
            @keyframes float {
                0%, 100% { transform: translateY(0) rotate(0deg); }
                50% { transform: translateY(-20px) rotate(180deg); }
            }
            
            .logo {
                background: rgba(255, 255, 255, 0.2);
                border-radius: 50%;
                width: 80px;
                height: 80px;
                margin: 0 auto 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                backdrop-filter: blur(10px);
                border: 2px solid rgba(255, 255, 255, 0.3);
            }
            
            .eco-icon {
                width: 40px;
                height: 40px;
                fill: #e1eebc;
            }
            
            .header h1 {
                color: #e1eebc;
                font-size: 28px;
                font-weight: 600;
                margin-bottom: 8px;
                text-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            
            .header p {
                color: rgba(225, 238, 188, 0.9);
                font-size: 16px;
                font-weight: 300;
            }
            
            .content {
                padding: 50px 40px;
                text-align: center;
                background: white;
                position: relative;
            }
            
            .leaf-decoration {
                position: absolute;
                top: 20px;
                right: 20px;
                width: 60px;
                height: 60px;
                opacity: 0.1;
                transform: rotate(15deg);
            }
            
            .greeting {
                font-size: 20px;
                color: #328e6e;
                margin-bottom: 20px;
                font-weight: 500;
            }
            
            .message {
                font-size: 16px;
                color: #4a5568;
                margin-bottom: 40px;
                line-height: 1.8;
            }
            
            .otp-container {
                background: linear-gradient(135deg, #f0faf5 0%, #e1eebc 100%);
                border: 3px dashed #90c67c;
                border-radius: 20px;
                padding: 30px;
                margin: 30px 0;
                position: relative;
                overflow: hidden;
            }
            
            .otp-container::before {
                content: '';
                position: absolute;
                top: -50%;
                left: -50%;
                width: 200%;
                height: 200%;
                background: radial-gradient(circle, rgba(144, 198, 124, 0.1) 0%, transparent 70%);
                animation: pulse 3s ease-in-out infinite;
            }
            
            @keyframes pulse {
                0%, 100% { transform: scale(1); opacity: 0.5; }
                50% { transform: scale(1.1); opacity: 0.8; }
            }
            
            .otp-label {
                font-size: 14px;
                color: #67ae6e;
                margin-bottom: 15px;
                font-weight: 500;
                text-transform: uppercase;
                letter-spacing: 1px;
            }
            
            .otp-code {
                font-size: 36px;
                font-weight: 700;
                color: #328e6e;
                letter-spacing: 8px;
                font-family: 'Monaco', 'Consolas', monospace;
                text-shadow: 0 2px 4px rgba(50, 142, 110, 0.1);
                position: relative;
                z-index: 1;
            }
            
            .security-note {
                background: #f8fdf9;
                border-left: 4px solid #90c67c;
                padding: 20px;
                margin: 30px 0;
                border-radius: 0 10px 10px 0;
                font-size: 14px;
                color: #4a5568;
                text-align: left;
            }
            
            .footer {
                background: linear-gradient(135deg, #e1eebc 0%, #90c67c 100%);
                padding: 30px;
                text-align: center;
            }
            
            .footer-content {
                color: #328e6e;
                font-size: 14px;
                line-height: 1.8;
            }
            
            .eco-message {
                background: rgba(255, 255, 255, 0.7);
                border-radius: 10px;
                padding: 15px;
                margin-top: 20px;
                font-style: italic;
                font-size: 13px;
                border: 1px solid rgba(50, 142, 110, 0.2);
            }
            
            .eco-icons {
                display: flex;
                justify-content: center;
                gap: 15px;
                margin: 20px 0;
            }
            
            .eco-icons svg {
                width: 30px;
                height: 30px;
                fill: #67ae6e;
                opacity: 0.7;
                transition: all 0.3s ease;
            }
            
            .eco-icons svg:hover {
                opacity: 1;
                transform: scale(1.1);
            }
            
            @media (max-width: 600px) {
                .email-container {
                    margin: 10px;
                    border-radius: 15px;
                }
                
                .content {
                    padding: 30px 25px;
                }
                
                .otp-code {
                    font-size: 28px;
                    letter-spacing: 6px;
                }
                
                .header {
                    padding: 30px 20px;
                }
                
                .header h1 {
                    font-size: 24px;
                }
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <!-- Header Section -->
            <div class="header">
                <div class="logo">
                    <svg class="eco-icon" viewBox="0 0 24 24">
                        <path d="M12 2L13.09 8.26L20 4.27L15.43 10L22 12L15.43 14L20 19.73L13.09 15.74L12 22L10.91 15.74L4 19.73L8.57 14L2 12L8.57 10L4 4.27L10.91 8.26L12 2Z"/>
                    </svg>
                </div>
                <h1>WiseWaste</h1>
                <p>Your Eco-Friendly Digital Companion</p>
            </div>
            
            <!-- Content Section -->
            <div class="content">
                <svg class="leaf-decoration" viewBox="0 0 24 24">
                    <path fill="#90c67c" d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
                </svg>
                
                <div class="greeting">
                    🌿 Hello there, eco-warrior!
                </div>
                
                <div class="message">
                    We're thrilled to have you join our sustainable community! To complete your account verification and start your journey towards a greener lifestyle, please use the verification code below.
                </div>
                
                <div class="otp-container">
                    <div class="otp-label">Your Verification Code</div>
                    <div class="otp-code">${otp}</div>
                </div>
                
                <div class="security-note">
                    <strong>🔐 Security Note:</strong> This code will expire in 10 minutes for your protection. Never share this code with anyone. WiseWaste will never ask for your verification code via phone or email.
                </div>
                
                <div class="eco-icons">
                    <svg viewBox="0 0 24 24">
                        <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11A7,7 0 0,1 12,18A7,7 0 0,1 5,11V9A7,7 0 0,1 12,16A7,7 0 0,1 19,9V11Z"/>
                    </svg>
                    <svg viewBox="0 0 24 24">
                        <path d="M6.5,2L7.5,8H16.5L17.5,2H6.5M9,9V19A1,1 0 0,0 10,20H14A1,1 0 0,0 15,19V9H9M11,11H13V18H11V11Z"/>
                    </svg>
                    <svg viewBox="0 0 24 24">
                        <path d="M12,2A7,7 0 0,0 5,9C5,11.38 6.19,13.47 8,14.74V17A1,1 0 0,0 9,18H15A1,1 0 0,0 16,17V14.74C17.81,13.47 19,11.38 19,9A7,7 0 0,0 12,2M9,21A1,1 0 0,0 10,22H14A1,1 0 0,0 15,21V20H9V21Z"/>
                    </svg>
                </div>
            </div>
            
            <!-- Footer Section -->
            <div class="footer">
                <div class="footer-content">
                    <strong>Welcome to WiseWaste!</strong><br>
                    Together, we're building a more sustainable future, one smart choice at a time.
                    
                    <div class="eco-message">
                        🌍 <em>"This email was designed with sustainability in mind. Digital communications help reduce paper waste and protect our forests."</em>
                    </div>
                    
                    <div style="margin-top: 20px; font-size: 12px; opacity: 0.8;">
                        © 2025 WiseWaste. Caring for the planet, one wise choice at a time.
                    </div>
                </div>
            </div>
        </div>
    </body>
    </html>`;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject:
            "🌿 Your WiseWaste Verification Code - Welcome to Sustainable Living!",
        html: htmlTemplate,
        // Fallback text version for email clients that don't support HTML
        text: `
Welcome to WiseWaste! 🌿

Your verification code is: ${otp}

This code will expire in 10 minutes. Please use it to complete your account verification.

Never share this code with anyone. WiseWaste will never ask for your verification code via phone or email.

Welcome to our sustainable community!

© 2025 WiseWaste
        `,
    };

    await transporter.sendMail(mailOptions);
}
