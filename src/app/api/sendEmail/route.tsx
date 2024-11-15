import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

// Handles POST requests to /api
export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const message = formData.get("message");
  const type:
    | "digital-card-contact"
    | "living-benefits"
    | "business-opportunity"
    | "contact" = formData.get("type") as any;

  // Map each type to a user-friendly title
  const headerTitleMap: { [key: string]: string } = {
    "digital-card-contact": "Digital Card Contact",
    "living-benefits": "Living Benefits",
    "business-opportunity": "Business Opportunity",
    contact: "Contact",
  };

  // Retrieve the header title based on the type, with a fallback
  const headerTitle = headerTitleMap[type] || "Contact";

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
        <div style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">${headerTitle}</div>
        <p style="margin-bottom: 0.5rem;"><span style="font-weight: bold;">Name:</span> ${name}</p>
        <p style="margin-bottom: 0.5rem;"><span style="font-weight: bold;">Email:</span> ${email}</p>
        ${
          phone &&
          `<p style="margin-bottom: 0.5rem;"><span style="font-weight: bold;">Phone:</span> ${phone}</p>`
        }
        ${
          message &&
          `<p style="margin-bottom: 0.5rem;"><span style="font-weight: bold;">Message:</span> ${message}</p>`
        }
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
