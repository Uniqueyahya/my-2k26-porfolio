import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFAB from '@/components/WhatsAppFAB';

export const metadata = {
  title: 'Unique Yahya — Web & Mobile App Developer | Building Revenue-Driven Products',
  description:
    'I help startups, businesses, and founders launch scalable web and mobile products that generate users, leads, and sales.',
  keywords: 'web developer, mobile app developer, react, node.js, freelance developer, Nigeria',
  openGraph: {
    title: 'Unique Yahya — Web & Mobile App Developer',
    description: 'I build web & mobile apps that turn ideas into revenue.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppFAB />
        </ThemeProvider>
      </body>
    </html>
  );
}
