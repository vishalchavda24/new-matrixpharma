import '../styles/globals.css';
import Analytics from '@/components/Analytics';

export const metadata = {
  title: "Matrix Pharma Corp",
  description: "Matrix Pharma Corp’s journey is defined by groundbreaking innovation, transformative partnerships, and an unwavering commitment to excellence.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        {children}
      </body>
    </html>
  );
}