export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 p-4 text-center mt-auto w-full">
      <p>&copy; {new Date().getFullYear()} Universe Sandbox. All rights reserved.</p>
    </footer>
  );
}