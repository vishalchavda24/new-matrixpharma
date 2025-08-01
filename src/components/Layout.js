'use client';

import Header from './Header';
import StickyHeader from '../components/StickyHeader';
import Footer from './Footer';
import '../styles/globals.css';

const Layout = ({ children }) => {
  return (
    <div>
      <StickyHeader />
      <main id="main-content" style={{ paddingTop: '80px' }}>
  {children}
</main>
      <Footer />
    </div>
  );
};

export default Layout;
