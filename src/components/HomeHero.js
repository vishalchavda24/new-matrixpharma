"use client";
import { useEffect, useState } from "react";
import styles from "../styles/Hero.module.css";

const HomeHero = ({ title, imgPath, videoPathDesktop, videoPathMobile }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the screen width is less than 768px (for mobile devices)
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial screen size
    handleResize();

    // Listen for window resize event
    window.addEventListener("resize", handleResize);

    // Clean up listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={`${styles.hero_one}`}>
      {/* Desktop and mobile video conditional rendering */}
      <video
        className={styles.backgroundVideo}
        autoPlay
        muted
        loop
        playsInline
        poster={imgPath} // Image fallback when video fails
        onError={(e) => (e.target.style.display = "none")} // Hide video if it fails
        style={{ display: isMobile ? "none" : "block" }} // Hide desktop video on mobile
      >
        <source src={videoPathDesktop} type="video/mp4" />
      </video>

      <video
        className={styles.backgroundVideo}
        autoPlay
        muted
        loop
        playsInline
        poster={imgPath} // Image fallback when video fails
        onError={(e) => (e.target.style.display = "none")} // Hide video if it fails
        style={{ display: isMobile ? "block" : "none" }} // Show mobile video only on mobile
      >
        <source src={videoPathMobile} type="video/mp4" />
      </video>
    </section>
  );
};

export default HomeHero;
