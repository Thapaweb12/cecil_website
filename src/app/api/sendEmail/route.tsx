import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

// Handles POST requests to /api
export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  // // Basic validation (optional)
  // if (!validator.isEmail(email) || !name || !subject || !message) {
  //   return NextResponse.json({ message: "Invalid form data!" });
  // }

  // create transporter object with secure transport
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 587, // Use STARTTLS (recommended)
    secure: false, // Use STARTTLS with secure connection
    tls: {
      rejectUnauthorized: false, // Consider setting to true for stricter security
    },
    auth: {
      user: process.env.EMAIL_HOST_USER,
      pass: process.env.EMAIL_HOST_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_RECIPIENT,
      subject: `Website activity from ${email}`,
      html: `
        <div style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">Contact Details</div>
        <p style="margin-bottom: 0.5rem;"><span style="font-weight: bold;">Name:</span> ${name}</p>
        <p style="margin-bottom: 0.5rem;"><span style="font-weight: bold;">Email:</span> ${email}</p>
        <p style="margin-bottom: 0.5rem;"><span style="font-weight: bold;">Subject:</span> ${subject}</p>
        <p style="margin-bottom: 0.5rem;"><span style="font-weight: bold;">Message:</span> ${message}</p>
      `,
    });
    // send feedback mail to user
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_HOST_USER,
        to: email,
        subject: "Thank you for contacting me",
        html: `
          <div style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">Thank you for contacting me</div>
          <p style="margin-bottom: 0.5rem;">I have received your message and will get back to you as soon as possible.</p>
        `,
      });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: "Error while sending email." });
    }
    return NextResponse.json({ message: "Email sent successfully." });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error while sending email." });
  }
}
