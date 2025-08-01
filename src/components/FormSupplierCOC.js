import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/styles/FormSupplier.module.css";

const FormSupplier = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    representativeName: "",
    companyName: "",
    designation: "",
    contactNumber: "",
    email: "",
    acknowledgement: false,
  });

  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.acknowledgement) {
      setMessage("You must accept the terms before submitting.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Save form data to CSV
      const saveResponse = await fetch("/api/saveSupplierData", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!saveResponse.ok) {
        throw new Error("Failed to save form data");
      }

      // Send email
      const emailResponse = await fetch("/api/sendSupplierEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await emailResponse.json();

      if (!emailResponse.ok) {
        throw new Error(result.message || "Failed to send email");
      }

      setMessage("Form submitted successfully! Redirecting to home page");
      setFormData({
        representativeName: "",
        companyName: "",
        designation: "",
        contactNumber: "",
        email: "",
        acknowledgement: false,
      });

      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      console.error(error);
      setMessage("Error submitting form. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className={styles.formContainer}>
      {message && <p className={styles.message}>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          name="representativeName"
          value={formData.representativeName}
          onChange={handleChange}
          placeholder="Authorised Representative Name"
          required
          className={styles.inputField}
        />
        <input
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          placeholder="Company Name"
          required
          className={styles.inputField}
        />
        <input
          name="designation"
          value={formData.designation}
          onChange={handleChange}
          placeholder="Designation"
          required
          className={styles.inputField}
        />
        <input
          type="tel"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          placeholder="Contact Number"
          required
          className={styles.inputField}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email ID"
          required
          className={styles.inputField}
        />

        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            name="acknowledgement"
            checked={formData.acknowledgement}
            onChange={handleChange}
            required
          />
          I/We hereby acknowledge that I/we have received, read, and understood
          the contents of your Supplier Code of Conduct. I/We confirm that our
          organization, including all our employees, contractors, and
          subcontractors involved in business with your organization shall
          comply with all principles and requirements outlined in the Supplier
          Code of Conduct. I/We further acknowledge that adherence to the
          Supplier Code of Conduct is important to maintaining a strong and
          transparent partnership. In the event of any non-compliance, I/we
          understand that you may engage with us to address the issue
          constructively, which could include taking corrective actions as
          needed in accordance with the terms of our engagement.
        </label>

        <div className={styles.formActions}>
          <button
            type="submit"
            disabled={isSubmitting}
            className={styles.submitButton}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormSupplier;
