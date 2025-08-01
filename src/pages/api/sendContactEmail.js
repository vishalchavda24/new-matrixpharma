import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, company, email, phone, message } = req.body;

  if (!name || !company || !email || !phone || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // Send email to website owner
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: "New Contact Form Submission",
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Company:</strong> ${company}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    console.log("✅ Email sent successfully");

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank You for Contacting Us",
      html: `<p>Dear ${name},</p>
             <p>Thank you for reaching out. We have received your message:</p>
             <p>We will get back to you soon.</p>
             <p>Best regards,</p>
             <p>Matrix Pharma Corp</p>`,
    });

    return res.status(200).json({ message: "Thank you! Your message has been sent successfully." });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return res.status(500).json({ message: "Error sending email. Please try again later." });
  }
}
