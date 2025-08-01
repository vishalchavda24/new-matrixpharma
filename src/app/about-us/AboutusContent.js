"use client";
import "@/styles/globals.css";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import { useState } from "react";

const RootLayout = ({ children }) => {
  const [openProfile, setOpenProfile] = useState(null);

  const toggleDescription = (profile) => {
    setOpenProfile(openProfile === profile ? null : profile);
  };

  return (
    <Layout>  
      <Hero
        title="About Us"
        imgPath="/assets/images/new-images/about-us-hero-web.jpg"
        mobileImgPath="/assets/images/new-images/about-us-hero-mob.jpg"
      />

      <section className="aboutus-creting-excellance">
        <div className="container grid-container">
          <div className="col-span-6">
            <h2>India's leading integrated API manufacturer.</h2>
          </div>
          <div className="col-span-6">
            <p className="mg-bottom-large">
              Matrix Pharma Corp’s journey is defined by groundbreaking
              innovation, transformative partnerships, and an unwavering
              commitment to excellence. Since our inception, we have been at the
              forefront of Active Pharmaceutical Ingredient (API) manufacturing,
              earning the trust of leading pharmaceutical companies worldwide.
            </p>
            <p>
              A defining chapter has been our leadership in the antiretroviral
              (ARV) space. As pioneers in ARV manufacturing, we have played a
              pivotal role in improving global access to affordable HIV
              treatments. Our journey has been shaped by transformative
              partnerships with Mylan, Viatris, and now, as Matrix Pharma Corp,
              we continue to champion advancements in this critical area.
            </p>
          </div>
        </div>
      </section>

      {/*About Us Vision, Purpose, Values */}
      <section className="aboutus-vision">
        <div className="container grid-container">
          <div className="col-span-4 aboutus-vision-col1">
            <h3>Our purpose.</h3>
            <span className="visually-box1" aria-hidden="true"></span>
            <p className="our-purpose-text">
              To enhance people's health and well-being, while spreading joy and
              fulfilment.
            </p>
          </div>
          <div className="col-span-4 aboutus-vision-col2">
            <h3>Our vision.</h3>
            <span className="visually-box2" aria-hidden="true"></span>
            <p>
              To be a time-tested, innovative global pharmaceutical company by
              empowering partners for enhancing lives.
            </p>
          </div>
          <div className="col-span-4 aboutus-vision-col3">
            <h3>Our values.</h3>
            <span className="visually-box3" aria-hidden="true"></span>
            <p>
              We believe true success is rooted in collective strength. We B 4 I
              (We Before I) reflects our commitment to a shared mindset – where
              collaboration, accountability, and a sense of belonging drive us
              forward.
            </p>
          </div>
        </div>
      </section>
      {/*About Us Vision, Purpose, Values */}

      <section className="aboutus-video">
        <div className="container">
          <video controls poster="/assets/images/about-video-thumbnail.png">
            <source
              src="/assets/videos/matrix-pharma-corp-Interview-video.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </section>

      {/* Milestones of excellence start*/}
      <div className="about-desktop">
        <img
          src="/assets/images/about-desktop-rev2.png"
          alt="about-desktop-rev"
          className="about-desktop-img"
        />
        <img
          src="/assets/images/about-mobile-rev2.png"
          alt="about-mobile-rev"
          className="about-mobile-img"
        />
      </div>

      <section className="aboutus-milestones-excellence-container display-none">
        <div className="abt-miles-grid container">
          <div className="abt-miles-item1">
            <h2 className="text-white">
              Milestones <br></br>of excellence.
            </h2>
          </div>
          <div className="abt-miles-item2">
            <h3 className="font-ec">The partner of choice</h3>
            <p>
              for global leaders such as GSL, Bayer, and Sandoz, among others.
            </p>
          </div>
          <div className="abt-miles-item3">
            <div className="abt-miles-item3-inner">
              <span
                className="abt-miles-item3-inner-box1"
                aria-hidden="true"
              ></span>
              <div className="abt-miles-item3-inner-card">
                <h3 className="font-ec">200+ patents</h3>
                <p className="mb-0">granted, 900+ patents filed.</p>
              </div>
              <span
                className="abt-miles-item3-inner-box2"
                aria-hidden="true"
              ></span>
              <span
                className="abt-miles-item3-inner-box3"
                aria-hidden="true"
              ></span>
            </div>
          </div>
          <div className="abt-miles-item4">
            <h3 className="font-ec">$700 Mn+</h3>
            <p>in annual revenue.</p>
          </div>
          <div className="abt-miles-item5">
            <h3 className="font-ec">64 million</h3>
            <p className="mb-0">
              lives touched by making ARV drugs affordable and accessible.
            </p>
          </div>
          <div className="abt-miles-item6">
            <h3 className="font-ec">Zero-liquid discharge</h3>
            <p className="mb-0">
              and pharmaceutical waste recycling for a healthier planet.
            </p>
          </div>
          <div className="abt-miles-item7">
            <h3 className="font-ec">EcoVadis</h3>
            <p className="mb-0">assessment completed.</p>
          </div>
        </div>
      </section>
      {/* Milestones of excellence end */}

      {/* Leadership team section */}
      <section className="about-leadership-container">
        <div className="container ">
          <div className="leadership-section">
            <h2>Leadership Team</h2>
          </div>

          {/* Leadership Profile: Anil Kumar Jain */}
          <div className="leadership-profile">
            <div className="leadership-image">
              <img
                src="/assets/images/anil-kumar-jain.png"
                alt="Anil Kumar Jain"
              />
              <div className="light-orange-box"></div>
            </div>
            <div className="leadership-content">
              <div className="leadership-name-designation">
                <div className="leadership-name-designation-name">
                  <h4>Anil Kumar Jain</h4>
                  <p>Chief Executive Officer</p>
                </div>
                <button
                  onClick={() => toggleDescription("Anil Kumar Jain")}
                  className="accordion-toggle-icon"
                >
                  {openProfile === "Anil Kumar Jain" ? "-" : "+"}
                </button>
              </div>
              {/* Leadership description */}
              <div
                className={`leadership-description ${
                  openProfile === "Anil Kumar Jain" ? "expanded" : ""
                }`}
              >
                <p>
                  Mr. Anil Kumar Jain joined Matrix Pharma Corp, as Chief
                  Executive Officer in August 2024. With 36 years in the
                  pharmaceutical industry, including 22 years in leadership
                  roles, he brings extensive expertise in global operations,
                  business transformation, and strategic growth.
                </p>
                <p>
                  Prior to Matrix, Mr. Jain led PI Health Sciences, spearheading
                  multiple acquisitions across India, the EU, and the US. As CEO
                  of Sun Pharma’s API business, he drove digital innovation,
                  enhanced global operations, and established a strong ESG
                  framework for sustainability. He also served as COO of
                  Aurobindo Pharma, strengthening its global API business.
                </p>
                <p>
                  A Chemical Engineer with an Executive Leadership Program
                  certification from IIM Bangalore, Mr. Jain is known for his
                  pragmatic approach and visionary leadership.
                </p>
              </div>
            </div>
          </div>

          {/* Leadership Profile: Swathi Reddy Gunupati */}
          <div className="leadership-profile">
            <div className="leadership-image">
              <img
                src="/assets/images/swathi-reddy.png"
                alt="Swathi Reddy Gunupati"
              />
              <div className="light-orange-box light-orange-box-one"></div>
              <div className="light-purple-box"></div>
            </div>
            <div className="leadership-content">
              <div className="leadership-name-designation">
                <div className="leadership-name-designation-name">
                  <h4>Swathi Reddy Gunupati</h4>
                  <p className="corofficer">Chief Corporate Officer</p>
                </div>
                <button
                  onClick={() => toggleDescription("Swathi Reddy Gunupati")}
                  className="accordion-toggle-icon"
                >
                  {openProfile === "Swathi Reddy Gunupati" ? "-" : "+"}
                </button>
              </div>
              {/* Leadership description */}
              <div
                className={`leadership-description ${
                  openProfile === "Swathi Reddy Gunupati" ? "expanded" : ""
                }`}
              >
                <p>
                  Swathi Reddy Gunupati is a dynamic entrepreneur and Chief
                  Corporate Officer at Matrix Pharma Corp. She leads corporate
                  strategy, people, and culture initiatives, driving a workplace
                  rooted in transparency, integrity, and employee empowerment
                  through recognition, respect, and rewards.
                </p>
                <p>
                  Swathi is also the Founder of Mudhra Ventures, investing in
                  early-stage startups. Her portfolio includes Pahadi Local,
                  Dough Mama, and SeeSaw Spaces. She also produced the
                  psychological thriller Mangalavaaram under Mudhra Media Works.
                </p>
                <p>
                  A Stanford University alumna specialising in Family Business
                  Management and Women Entrepreneurship, she began her career at
                  Sony Entertainment Singapore.
                </p>
              </div>
            </div>
          </div>

          {/* Leadership Profile: G. Pranav Reddy */}
          <div className="leadership-profile leadership-profile1">
            <div className="leadership-image">
              <img
                src="/assets/images/pranav-reddy.png"
                alt="G. Pranav Reddy"
              />
              <div className="light-purple-box light-purple-box1"></div>
              <div className="two-colors">
                <div className="light-purple-box light-purple-box2"></div>
                <div className="light-orange-box light-orange-box2"></div>
              </div>
            </div>
            <div className="leadership-content">
              <div className="leadership-name-designation">
                <div className="leadership-name-designation-name">
                  <h4>G. Pranav Reddy</h4>
                  <p className="corofficer">Promoter Director</p>
                </div>
                <button
                  onClick={() => toggleDescription("G. Pranav Reddy")}
                  className="accordion-toggle-icon"
                >
                  {openProfile === "G. Pranav Reddy" ? "-" : "+"}
                </button>
              </div>
              {/* Leadership description */}
              <div
                className={`leadership-description ${
                  openProfile === "G. Pranav Reddy" ? "expanded" : ""
                }`}
              >
                <p>
                  Mr. G. Pranav Reddy is a seasoned Executive and Promoter
                  Director of Matrix Pharma Corp. Under his leadership in
                  sourcing and financial strategy, the company continues to
                  drive pharmaceutical innovation and excellence.
                </p>
                <p>
                  Beyond pharmaceuticals, he is an entrepreneur with ventures in
                  infrastructure, real estate, hospitality, and aerospace. He
                  leads GSR Ventures and RAPS, supplying advanced composites to
                  India's DRDO and ISRO.
                </p>
                <p>
                  With a Bachelor’s in Finance and Business Management from
                  Indiana University, Pranav’s strategic investments reflect his
                  commitment to innovation.
                </p>
              </div>
            </div>
          </div>

          <div className="three-color">
            <div className="light-purple-box light-purple-box3"></div>
            <div className="light-orange-box light-orange-box3"></div>
            <div className="light-yellow-box"></div>
          </div>

          <div className="two-color">
            <div className="light-purple-box light-purple-box2"></div>
            <div className="light-orange-box light-orange-box2"></div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RootLayout;
