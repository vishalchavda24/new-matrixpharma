'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/StickyHeader.module.css';
import MenuToggle from './MenuToggle';

const StickyHeader = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleResize = () => {
      setIsMobile(window.innerWidth < 728);
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show sticky if scrolling up and past some point
      setIsScrollingUp(currentScrollY < lastScrollY);
      setIsSticky(currentScrollY > 50);

      lastScrollY = currentScrollY;
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const logoSrc =
    isMobile || isSticky ? '/assets/images/matrix-pharma-logo-transparent.png' : '/matrix-pharma.svg';

  return (
    <>
      <a href="#main-content" className={styles.skipLink}>Skip to content</a>

      <header
        className={`
          ${styles.header}
          ${isSticky ? styles.sticky : ''}
          ${isSticky && !isScrollingUp ? styles.hide : ''}
        `}
      >
        <div className={styles.headerInner}>
          <h1 className={styles.logo}>
            <Link href="/" aria-label="Matrix Pharma Home">
              <Image
                src={logoSrc}
                alt="Matrix Pharma Logo"
                width={280}
                height={66}
                style={{ objectFit: 'contain' }}
                priority
              />
            </Link>
          </h1>
          <MenuToggle />
        </div>
      </header>
    </>
  );
};

export default StickyHeader;
