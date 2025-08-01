"use client";

import { useState, useEffect } from "react";
import styles from "../styles/MenuToggle.module.css";
import IconLink from "@/components/IconLink";
import Link from "next/link";



const MenuToggle = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Stop/Allow scrolling when the menu is open/closed
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    // Cleanup when the component is unmounted or menu is closed
    return () => {
      document.body.style.overflow = "auto"; // Reset scrolling
    };
  }, [menuOpen]);

  return (
    <>
      {/* Toggle Button */}
      <div className={styles.menuToggle} onClick={toggleMenu}>
        <div
          className={`${styles.burgerLines} ${menuOpen ? styles.hide : ""}`}
        ></div>
        <span className={`${styles.closeIcon} ${menuOpen ? styles.show : ""}`}>
          &times;
        </span>
      </div>

      {/* Expanding Background Overlay */}
      <div
        className={`${styles.menuBg} ${menuOpen ? styles.menuBgOpen : ""}`}
        onClick={closeMenu}
      ></div>

      {/* Navigation Menu */}
      <nav className={`${styles.menu} ${menuOpen ? styles.menuOpen : ""}`}>
        <div className="nav-wrapper">
          <Link href="/"><img className={`${styles.menulogo}`} src="/matrix-pharma.svg" width="200"></img></Link>
          <ul className={`${styles.navLinks}`}>
            <li>
              <IconLink
                href="/about-us"
                className="link-text"
                onClick={closeMenu}
              >
                About
              </IconLink>
            </li>
            <li>
              <IconLink
                href="/matrix-advantages"
                className="link-text"
                onClick={closeMenu}
              >
                Advantages
              </IconLink>
            </li>
            <li>
              <IconLink
                href="/our-products"
                className="link-text"
                onClick={closeMenu}
              >
                Products
              </IconLink>
            </li>
            <li>
              <IconLink
                href="/sustainability"
                className="link-text"
                onClick={closeMenu}
              >
                Sustainability
              </IconLink>
            </li>
            <li>
              <IconLink
                href="/careers"
                className="link-text"
                onClick={closeMenu}
              >
                Careers
              </IconLink>
            </li>
            <li>
              <IconLink
                href="/contact-us"
                className="link-text"
                onClick={closeMenu}
              >
                Contact
              </IconLink>
            </li>
          </ul>
        </div>
        {/* Arrows and Brackets */}
        <div
          role="img"
          aria-label="Down arrow"
          className={`${styles.arrowContainer}`}
        >
          <span className={`${styles.arrowPart1}`} aria-hidden="true"></span>
          <span className={`${styles.arrowPart2}`} aria-hidden="true"></span>
          <span className={`${styles.arrowPart3}`} aria-hidden="true"></span>
          <span className={`${styles.block1}`} aria-hidden="true"></span>
          <span className={`${styles.block2}`} aria-hidden="true"></span>
        </div>
      </nav>
    </>
  );
};

export default MenuToggle;
