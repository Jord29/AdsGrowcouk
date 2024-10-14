// app/api/sendEmail/route.js

import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    // Get the form data from the request
    const { name, email, message } = await request.json();

    // Log environment variables to ensure they are loaded correctly
    console.log('EMAIL_USER:', process.env.EMAIL_USER);
    console.log('EMAIL_PASS:', process.env.EMAIL_PASS);

    // Check if the environment variables are defined
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing environment variables: EMAIL_USER or EMAIL_PASS');
      return new Response(`Failed to send message. Missing email credentials.`, { status: 500 });
    }

    // Create a Nodemailer transporter using your custom SMTP server settings
    const transporter = nodemailer.createTransport({
      host: 'adsgrow.co.uk', // SMTP server host (outgoing server)
      port: 465, // SMTP port for secure connection
      secure: true, // true for port 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // Your email username (from .env)
        pass: process.env.EMAIL_PASS, // Your email password (from .env)
      },
      logger: true, // Enable logging for debugging
      debug: true, // Enable debug mode
    });

    // Define the email options
    const mailOptions = {
      from: `"Contact Form" <${process.env.EMAIL_USER}>`, // Sender address
      to: 'hello@adsgrow.co.uk', // The email address to receive form submissions
      subject: `Contact Form Submission from ${name}`, // Subject line
      text: message, // Plain text body
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `, // HTML body
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond with a success message
    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (error) {
    console.error('Error details:', error.message);
    return new Response(`Failed to send message. Error: ${error.message}`, { status: 500 });
  }
}
