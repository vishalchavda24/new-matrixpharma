import styles from "@/styles/CareerForm.module.css";

const DetailForm = () => {
  return (
    <div className={styles.formContainer}>
      <form encType="multipart/form-data">
        <input
          type="text"
          name="name"
          value=""
          placeholder="Name"
          required
          className={styles.inputField}
        />

        <input
          type="text"
          name="compnay"
          value=""
          placeholder="Company"
          required
          className={styles.inputField}
        />

        <input
          type="email"
          name="email"
          value=""
          placeholder="Email"
          required
          className={styles.inputField}
        />

        {/* Hidden file input */}
        <input
          type="file"
          name="cv"
          accept=".pdf,.doc,.docx"
          required
          className={styles.fileInput}
          id="cvUpload"
        />

        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default DetailForm;
