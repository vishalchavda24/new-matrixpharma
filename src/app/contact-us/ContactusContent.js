"use client";
import "@/styles/globals.css";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import FormContactus from "@/components/FormContactus";
import Link from "next/link";

const ContactPage = () => {
  return (
    <Layout>  
      <Hero
        title="Contact Us"
        imgPath="/assets/images/new-images/contact-us-hero-web.jpg"
        mobileImgPath="/assets/images/new-images/contact-us-mob.jpg"
      />
      {/*Contact Us creting execllance starts */}

      <section className="contact-address">
        <div className="container grid-container">
          <div className="col-span-6">
            <div className="office-card">
              <h2 className="office-title contact-box">Corporate & Registered Office</h2>
            </div>
          </div>
          <div className="col-span-6">
            <div className="office-card">
              <p className="office-bold">Matrix Pharmacorp Pvt. Ltd.</p>
              <p className="office-address">
                Plot No. 1-60/35/A, 6th to 9th Floor, HITEC City, Phase II,
                Gachibowli Serilingampally Mandal, Ranga Reddy District,
                Hyderabad, Telangana, India - 500 081
              </p>
              <Link className="link-default" href="https://maps.app.goo.gl/CVSqLn4hWKdsSTZt7" target="_blank">Get Direction</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="contactus-from-section">
        <div className="container grid-container">
          <div className="col-span-6 text-white left-container ">
            <h2 className="text-white">
              Great partnerships&nbsp;
              <br></br>
              drive excellence.
            </h2>
            <p>Enter your details and we'll get in touch with you.</p>
          </div>
          <div className="col-span-6  form-container">
            <FormContactus />
          </div>
        </div>
        {/* All bg boxes Starts*/}
        <div className="form-box-container">
          <span className="form-box2" aria-hidden="true"></span>
          <span className="form-box3" aria-hidden="true"></span>
          <span className="form-box4" aria-hidden="true"></span>
          <span className="form-box5" aria-hidden="true"></span>
          <span className="form-box6" aria-hidden="true"></span>
          <span className="form-box8" aria-hidden="true"></span>
          <span className="form-box9" aria-hidden="true"></span>
          <span className="form-box10" aria-hidden="true"></span>
          <span className="form-box11" aria-hidden="true"></span>
          <span className="form-box1" aria-hidden="true"></span>
          <span className="form-box7" aria-hidden="true"></span>
        </div>
        {/* All bg boxes Ends*/}
      </section>
    </Layout>
  );
};

export default ContactPage;
