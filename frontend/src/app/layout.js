import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'EternaVerse',
  description: 'Explore cosmic simulations like never before!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <Header />
        <main className="container mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
