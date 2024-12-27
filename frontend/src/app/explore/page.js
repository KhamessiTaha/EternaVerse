import Link from 'next/link';

export default function ExplorePage() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Explore Cosmic Events</h1>
      <p className="text-lg text-gray-400">
        Dive into the wonders of the universe! Click on an event to start.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link href="/simulations/big-bang">
          <div className="bg-gray-700 p-4 rounded shadow hover:bg-gray-600 cursor-pointer">
            <h2 className="text-xl font-bold">The Big Bang</h2>
            <p className="text-sm text-gray-400">Experience the birth of the universe.</p>
          </div>
        </Link>
        <div className="bg-gray-700 p-4 rounded shadow hover:bg-gray-600 cursor-pointer">
          <h2 className="text-xl font-bold">Supernova</h2>
          <p className="text-sm text-gray-400">Witness the explosive death of a star.</p>
        </div>
        <div className="bg-gray-700 p-4 rounded shadow hover:bg-gray-600 cursor-pointer">
          <h2 className="text-xl font-bold">Heat Death</h2>
          <p className="text-sm text-gray-400">Visualize the universe’s ultimate fate.</p>
        </div>
      </div>
    </div>
  );
}
