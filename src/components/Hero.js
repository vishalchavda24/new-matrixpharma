'use client';
import { useEffect, useState } from 'react';
import styles from '../styles/Hero.module.css';

const Hero = ({ title, imgPath, mobileImgPath, height }) => {
  const [bgImage, setBgImage] = useState(imgPath);

  useEffect(() => {
    const handleResize = () => {
      setBgImage(window.innerWidth <= 768 && mobileImgPath ? mobileImgPath : imgPath);
    };

    handleResize(); // Set initial image
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [imgPath, mobileImgPath]);

  return (
    <section 
      className={styles.hero} 
      style={{ 
        backgroundImage: `url(${bgImage})`,
        height: height || '720px'
      }}
    >
      <h1 className={styles.heroTitle}>{title}</h1>
    </section>
  );
};

export default Hero;
