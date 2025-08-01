import nodemailer from "nodemailer";
import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false, // Required for handling file uploads
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const form = formidable(); // ✅ Correct way to initialize formidable
    form.keepExtensions = true;

    form.parse(req, async (err, fields) => {
      if (err) {
        console.error("❌ Error parsing form data:", err);
        return res.status(500).json({ message: "Error parsing form data" });
      }

      console.log("✅ Parsed fields:", fields);

      const { name, location, email, phone } = fields;

      if (!name || !location || !email || !phone) {
        console.error("❌ Missing required fields:", fields);
        return res.status(400).json({ message: "Missing required fields" });
      }

      // Email transport setup
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_CAREER,
        subject: "New Career Form Submission",
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Location:</strong> ${location}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Phone:</strong> ${phone}</p>`,
      };

      try {
        await transporter.sendMail(mailOptions);
        console.log("✅ Email sent successfully!");
        return res.status(200).json({ message: "Your application has been submitted!" });
      } catch (error) {
        console.error("❌ Error sending email:", error);
        return res.status(500).json({ message: "Failed to send email" });
      }
    });
  } catch (error) {
    console.error("❌ Unexpected error:", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
}
