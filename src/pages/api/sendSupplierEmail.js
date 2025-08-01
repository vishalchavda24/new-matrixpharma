import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const {
    representativeName,
    companyName,
    designation,
    contactNumber,
    email,
  } = req.body;

  if (!representativeName || !companyName || !designation || !contactNumber || !email) {
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
    // Email to your internal supplier inbox
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_SUPPLIER,
      subject: "New Supplier Submission",
      html: `
        <h3>New Supplier Form Submission</h3>
        <p><strong>Representative:</strong> ${representativeName}</p>
        <p><strong>Company:</strong> ${companyName}</p>
        <p><strong>Designation:</strong> ${designation}</p>
        <p><strong>Contact Number:</strong> ${contactNumber}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Acknowledged Code of Conduct:</strong> Yes</p>
      `,
    });

    return res.status(200).json({ message: "Email sent successfully." });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return res.status(500).json({ message: "Error sending email." });
  }
}
