"use client";
import "@/styles/globals.css";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import CareerForm from "@/components/FormCareer";

const careers = ({ children }) => {
  return (
    <Layout>
      <Hero
        title="Careers"
        imgPath="/assets/images/Careers-Banner-Desktop.webp"
        mobileImgPath="/assets/images/Careers-Banner-Mobile.webp"
      />

      <section className="careers">
        <div className="container grid-container">
          <div className="col-span-6">
            <h2>
              Join us.<br></br> Let’s build excellence together.
            </h2>
          </div>
          <div className="col-span-5 careers-matrix">
            <p>
              At Matrix Pharma Corp, our people are at the heart of everything
              we do. We don’t just manufacture APIs; we build a future where
              innovation, collaboration, and excellence shape the pharmaceutical
              industry. Our employees drive our success, and we are committed to
              creating an environment that fosters growth, inclusion, and
              impact.
            </p>
          </div>
        </div>
      </section>

      {/* Work environment Start*/}

      <section className="careers1-environment grid-container">
        <div role="presentation" aria-label="Decorative Boxes">
          <span className="career-box1" aria-hidden="true"></span>
          <span className="career-box2" aria-hidden="true"></span>
          <span className="career-box3" aria-hidden="true"></span>
          <span className="career-box4" aria-hidden="true"></span>
          <span className="career-box5" aria-hidden="true"></span>
        </div>
        <div className="container col-span-12">
          <div className="careers1-heading">
            <h2>
              Work environment that brings out<br></br> the best in your career.
            </h2>
          </div>
          <div className="grid-container  career-column-3">
            <div className="col-span-3">
              <h3 className="font-ec">Career Growth</h3>
              <span className="careers1-box1" aria-hidden="true"></span>
              <p>
                With a legacy of leadership in the API space, we provide ample
                opportunities for learning, development, and career progression.
              </p>
            </div>
            <div className="col-span-3">
              <h3 className="font-ec">Empowering Culture</h3>
              <span className="careers1-box2" aria-hidden="true"></span>
              <p>
                We believe in fostering a workplace where talent thrives, ideas
                are valued, and contributions make a tangible difference.
              </p>
            </div>
            <div className="col-span-3">
              <h3 className="font-ec">Innovation & Excellence</h3>
              <span className="careers1-box3" aria-hidden="true"></span>
              <p>
                Be part of a team that continuously challenges the status quo,
                pioneering cutting-edge solutions for global healthcare.
              </p>
            </div>
            <div className="col-span-3">
              <h3 className="font-ec">Global Impact</h3>
              <span className="careers1-box4" aria-hidden="true"></span>
              <p>
                Join a company that partners with leading pharmaceutical
                organisations in over 80 countries, delivering life-changing
                medicines worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work environment end*/}

      {/* Banner Section Start*/}
      <section className="banner-image">
        <img className="banner-image-home-web" src="/assets/images/Careers-02-Desktop.webp" />
        <img className="banner-image-home-mob" src="/assets/images/Careers-02-Mobile.webp" />
      </section>
      {/* Banner section end*/}

      {/* career info start*/}

      <section className="careers-info-data">
        <div className="container careers-info-wrapper">
          <div className="grid-container">
            {/* Left Column - Heading & Paragraph */}
            <div className="careers-info-left">
              <h2 className="left-align">Our workplace values.</h2>
              <p className="careers-info-para left-align">
                At Matrix Pharma Corp, we believe in B 4 I (We Before I), our
                core value system that defines how we work and grow together.
              </p>
            </div>

            {/* Right Column - Values List */}
            <div className="careers-info-right">
              <ul className="careers-info-right-col">
                <li>
                  <span className="title">Belongingness</span>
                  <div className="title-line"></div>
                  <p>
                    Creating a workplace where everyone feels valued and
                    included.
                  </p>
                </li>
                <li>
                  <span className="title">Integrity</span>
                  <div className="title-line"></div>
                  <p>Upholding ethical excellence in everything we do.</p>
                </li>
                <li>
                  <span className="title">Inclusivity</span>
                  <div className="title-line"></div>
                  <p>
                    Embracing diverse perspectives and fostering equal
                    opportunities.
                  </p>
                </li>
                <li>
                  <span className="title">Innovation</span>
                  <div className="title-line"></div>
                  <p>
                    Encouraging forward-thinking solutions that drive progress.
                  </p>
                </li>
                <li>
                  <span className="title">Impact</span>
                  <div className="title-line"></div>
                  <p>Making meaningful contributions to global healthcare.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* career info end*/}

      {/* career form starts*/}
      <section className="career-form-section">
        <div className="container career-form-wrapper grid-container">
          <div className="career-form-left-col">
            <h2 className="text-white">
              Your next opportunity awaits.<br></br> Apply now!
            </h2>
            <p className="text-white">
              Are you ready to be part of a company that is redefining
              pharmaceutical excellence? Explore our current job openings and
              take the next step in your career with Matrix Pharma Corp.
            </p>
            <p className="text-white">
              We are always looking for passionate individuals to join our team.
              Submit your application by uploading your CV.
            </p>
          </div>
          <div className="career-form-right-col">
            <CareerForm />
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
      {/* career form starts*/}
    </Layout>
  );
};

export default careers;
