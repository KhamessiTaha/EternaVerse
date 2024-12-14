export const metadata = {
  title: 'Universe Sandbox',
  description: 'Explore cosmic simulations like never before!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
