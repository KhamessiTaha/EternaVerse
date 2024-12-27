import Link from 'next/link';

export default function ExplorePage() {
  return (
    <div className="container mx-auto text-center p-8">
      <h1 className="text-4xl font-bold mb-6 text-indigo-400">
        Explore Cosmic Events
      </h1>
      <p className="text-lg text-gray-400 mb-8">
        Dive into the wonders of the universe! Click on an event to start.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/simulations/big-bang">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 cursor-pointer">
            <h2 className="text-2xl font-bold mb-2 text-indigo-400">
              The Big Bang
            </h2>
            <p className="text-sm text-gray-400">
              Experience the birth of the universe.
            </p>
          </div>
        </Link>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 cursor-pointer">
          <h2 className="text-2xl font-bold mb-2 text-indigo-400">
            Supernova
          </h2>
          <p className="text-sm text-gray-400">
            Witness the explosive death of a star.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 cursor-pointer">
          <h2 className="text-2xl font-bold mb-2 text-indigo-400">
            Heat Death
          </h2>
          <p className="text-sm text-gray-400">
            Visualize the universe’s ultimate fate.
          </p>
        </div>
      </div>
    </div>
  );
}

