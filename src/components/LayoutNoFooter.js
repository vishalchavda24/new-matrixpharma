'use client';
import StickyHeader from './StickyHeader';
import '../styles/globals.css';

const Layout = ({ children }) => {
  return (
    <div>
      <StickyHeader />
      <main id="main-content" style={{ paddingTop: '80px' }}>
  {children}
</main>
    </div>
  );
};

export default Layout;
