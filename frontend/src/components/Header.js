import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold hover:text-indigo-400">
          <Link href="/">Universe Sandbox</Link>
        </h1>
        <nav>
          <ul className="hidden md:flex space-x-4">
            <li>
              <Link href="/" className="hover:text-indigo-400">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-indigo-400">About</Link>
            </li>
            <li>
              <Link href="/explore" className="hover:text-indigo-400">Explore</Link>
            </li>
          </ul>
          {/* Mobile menu */}
          <button className="md:hidden p-2 bg-gray-700 rounded">
            <span>☰</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
