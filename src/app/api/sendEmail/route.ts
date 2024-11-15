import { NextResponse, NextRequest } from "next/server";
import {
  adminNotificationTemplate,
  businessTrackerTemplate,
  populateTemplate,
  userResponseTemplate,
} from "./templates";
const nodemailer = require("nodemailer");

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string | null;
  const message = formData.get("message") as string | null;

  const checked_yes_no = formData.get("checked_yes_no") as string | null;
  const hour_committed = formData.get("hour_committed") as string | null;
  const monthly_income = formData.get("monthly_income") as string | null;
  const other_cft = formData.get("other_cft") as string | null;

  const reasons = formData.get("reasons") as string[] | null;

  const type:
    | "digital_card_contact"
    | "living_benefits"
    | "business_opportunity"
    | "contact"
    | "business_tracker" = formData.get("type") as any;

  const headerTitleMap: { [key: string]: string } = {
    digital_card_contact: "Digital Card Contact",
    living_benefits: "Living Benefits",
    business_opportunity: "Business Opportunity",
    business_tracker: "Business Tracker",
    contact: "Contact",
  };

  const headerTitle = headerTitleMap[type] || "Contact";

  // Create email transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 587,
    secure: false,
    tls: {
      rejectUnauthorized: false,
    },
    auth: {
      user: process.env.EMAIL_HOST_USER,
      pass: process.env.EMAIL_HOST_PASSWORD,
    },
  });

  try {
    // Populate admin template
    const adminHtml =
      type === "business_tracker"
        ? populateTemplate(businessTrackerTemplate, {
            name,
            message: message
              ? `<p><strong>Message:</strong> ${message}</p>`
              : "",
            checked_yes_no: checked_yes_no
              ? `<p><strong>Checked Yes/No:</strong> ${checked_yes_no}</p>`
              : "",
            hour_committed: hour_committed
              ? `<p><strong>Hours Committed:</strong> ${hour_committed}</p>`
              : "",
            monthly_income: monthly_income
              ? `<p><strong>Monthly Income:</strong> ${monthly_income}</p>`
              : "",
            other_cft: other_cft
              ? `<p><strong>Other CFT:</strong> ${other_cft}</p>`
              : "",
            reasons: `${reasons?.map((item) => ` <li>${item}</li>`)}
  `,
          })
        : populateTemplate(adminNotificationTemplate, {
            headerTitle,
            name,
            email,
            phone: phone ? `<p><strong>Phone:</strong> ${phone}</p>` : "",
            message: message
              ? `<p><strong>Message:</strong> ${message}</p>`
              : "",
          });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_RECIPIENT,
      subject: `Website activity from ${email}`,
      html: adminHtml,
    });

    // Populate user template
    const userHtml = populateTemplate(userResponseTemplate, { name });

    await transporter.sendMail({
      from: process.env.EMAIL_HOST_USER,
      to: email,
      subject: "Thank you for contacting me",
      html: userHtml,
    });

    return NextResponse.json({ message: "Email sent successfully." });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error while sending email." });
  }
}
