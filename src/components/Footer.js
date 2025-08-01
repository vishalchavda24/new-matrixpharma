import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.footerWrapper}`}>
        {/* First Column */}
        <div className={`${styles.footerCol1}`}>
          <Link href="/" passHref>
            <Image
              src="/matrix-pharma.svg"
              alt="Matrix Pharma Logo"
              width={380}
              height={66}
              priority
            />
          </Link>
          
        </div>
        {/* First Column End */}

        {/* Second Column Start */}
        <div className={`${styles.footerCol2}`}>
          <ul className={`${styles.footerLinks}`}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about-us">About</Link>
            </li>
            <li>
              <Link href="/our-products">Products</Link>
            </li>
            <li>
              <Link href="/sustainability">Sustainability</Link>
            </li>
          </ul>
        </div>
        {/* Second Column End */}
        {/* Third Column start */}
        <div className={`${styles.footerCol3}`}>
          <ul className={`${styles.footerLinks}`}>
            <li>
              <Link href="/matrix-advantages">Advantages</Link>
            </li>
            <li>
              <Link href="/careers">Careers</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact</Link>
            </li>
          </ul>
        </div>
        {/* Third Column End */}
        {/* Third Column Start */}
        <div className={`${styles.footerCol4}`}>
          <div>
            <p className="text-white">Follow</p>
            <div className={styles.socialLinks}>
              <Link
                href="https://www.linkedin.com/company/matrix-pharma-corp?originalSubdomain=in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.socialIcon}>
                  <img src="/icons/linkedin.svg" />
                </div>
              </Link>
             
            </div>
          </div>
        </div>
        {/* Third Column End */}
      </div>
      {/* Footer Wrapper End*/}
    </footer>
  );
};

export default Footer;
