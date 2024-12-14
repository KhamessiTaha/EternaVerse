export default function Header() {
    return (
      <header className="bg-gray-800 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Universe Sandbox</h1>
          <nav>
            <ul className="hidden md:flex space-x-4">
              <li>
                <a href="/" className="hover:text-gray-400">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-400">About</a>
              </li>
              <li>
                <a href="/explore" className="hover:text-gray-400">Explore</a>
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