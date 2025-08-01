// src/pages/index.js
"use client";

import Layout from "../components/Layout";
import HomeHero from "../components/HomeHero";
import Link from "next/link";

const HomePage = () => {
  return (
    <Layout>
      <div className="home-hero-container">
        <HomeHero
          title="What drive us every day?"
          imgPath="/assets/images/home-hero-web.png"
          videoPathDesktop="/assets/videos/home-hero-video-web.mp4"
          videoPathMobile="/assets/videos/home-hero-video-mob.mp4"
        />
      </div>

      {/* Home about section start */}
      <section className="container grid-container home-about-us">
        <div className="col-span-6 home-about-us-left">
          <h2>
            We are the API partner of choice for the world’s leading pharma
            companies.
          </h2>
        </div>
        <div className="col-span-6 home-about-us-right">
          <p>
          Matrix Pharma Corp is a leading global provider of Active Pharmaceutical Ingredients (APIs) dedicated to delivering high-quality, innovative solutions for a healthier future. We are committed to building long-term partnerships with leading pharmaceutical companies in over 80 countries, driven by a shared vision of improving global healthcare access and affordability. Because when it comes to global health, we don’t just make ingredients – we create excellence. 
          </p>
          <Link href="/about-us" className="link-default text-uppercase">
            About Us
            <svg width="17" height="17" viewBox="0 0 17 17">
              <g></g>
              <path
                d="M15.707 8.472l-7.354 7.354-0.707-0.707 6.146-6.146h-12.792v-1h12.793l-6.147-6.148 0.707-0.707 7.354 7.354z"
                fill="#f04f3f"
              />
            </svg>
          </Link>
        </div>
      </section>
      {/* Home about section end*/}

      {/* Home our strength section start*/}
      <section>
        <div className="home-advantage-img">
          <Link href="/matrix-advantages">
            <img
              className="home-advantage-img-web"
              src="/assets/images/homepage-advantage-img.png"
              alt="Our Advantage"
            />
            <img
              className="home-advantage-img-mob"
              src="/assets/images/homepage-advantage-img-mob.png"
              alt="Our Advantage"
            />
          </Link>
        </div>
      </section>

      {/* Home Banner Section Start*/}
      <section className="banner-image">
        <img className="banner-image-home-web" src="/assets/images/home-img2.jpg" />
        <img className="banner-image-home-mob" src="/assets/images/home-img21.webp" />
      </section>
      {/* Home banner section end*/}

      {/* Home module milestone section */}
      <section className="home-milestone bg-yellow">
        <div className="container home-milestone-wrapper">
          <div className="text-center">
            <h2>From molecules to milestones.</h2>
          </div>
          <div className="grid-container">
            <div className="col-span-6 home-milestone-flex">
              <p className="home-milestone-para">
                Our diverse range of APIs powers breakthrough medicines.
                Whatever the need, we always deliver consistent quality, on
                time.
              </p>
              <Link href="/our-products" className="link-default">
                DISCOVER OUR FULL PRODUCT RANGE
                <svg width="17" height="17" viewBox="0 0 17 17">
                  <path
                    d="M15.707 8.472l-7.354 7.354-0.707-0.707 6.146-6.146h-12.792v-1h12.793l-6.147-6.148 0.707-0.707 7.354 7.354z"
                    fill="#f04f3f"
                  />
                </svg>
              </Link>
            </div>
            <div className="col-span-6">
              <ul className="home-milestone-right-col">
                <li>
                  <Link href="/our-products" className="link-text">
                    Antiretroviral
                    <svg width="20" height="20" viewBox="0 0 17 17">
                      <path d="M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href="/our-products" className="link-text">
                    Antiviral
                    <svg width="20" height="20" viewBox="0 0 17 17">
                      <path d="M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href="/our-products" className="link-text">
                  Antidiabetic
                    <svg width="20" height="20" viewBox="0 0 17 17">
                      <path d="M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href="/our-products" className="link-text">
                  Antineoplastic
                    <svg width="20" height="20" viewBox="0 0 17 17">
                      <path d="M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href="/our-products" className="link-text">
                  Antihypertensive
                    <svg width="20" height="20" viewBox="0 0 17 17">
                      <path d="M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href="/our-products" className="link-text">
                  Cardiovascular
                    <svg width="20" height="20" viewBox="0 0 17 17">
                      <path d="M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href="/our-products" className="link-text">
                  Central Nervous System
                    <svg width="20" height="20" viewBox="0 0 17 17">
                      <path d="M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href="/our-products" className="link-text">
                  Proton Pump Inhibitor
                    <svg width="20" height="20" viewBox="0 0 17 17">
                      <path d="M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z" />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Home every action section */}
      <section className="home-every-action">
        <div className="home-every-action-wrapper grid-container">
          <div className="col-span-6 hea-left-content">
            <h2>Every action we take today builds a greener future.</h2>
            <p>
              At Matrix Pharma Corp, we are shaping a sustainable future through
              bold environmental initiatives and unwavering commitment to
              people. From implementing zero liquid discharge systems and
              reducing emissions to embracing renewable energy, we take
              measurable steps to protect the planet. Equally, we invest in our
              greatest asset – our people – by building a safe and empowering
              workplace.
            </p>
            <Link href="/sustainability" className="link-default flex flex-center flex-gap-m">
              LEARN MORE
              <svg width="17" height="17" viewBox="0 0 17 17">
                <path
                  d="M15.707 8.472l-7.354 7.354-0.707-0.707 6.146-6.146h-12.792v-1h12.793l-6.147-6.148 0.707-0.707 7.354 7.354z"
                  fill="#f04f3f"
                />
              </svg>
            </Link>
          </div>
          <div className="col-span-6 hea-right-content">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto"
              onError={(e) => (e.target.style.display = "none")} // Hide video if it fails
            >
              <source
                src="/assets/videos/solar-illustration.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <noscript>
              <img
                src="/assets/images/home-wind-mill.png"
                alt="Wind Mill"
                className="w-full h-auto"
              />
            </noscript>
          </div>
        </div>
      </section>
      {/* Home every action section end */}
    </Layout>
  );
};

export default HomePage;
