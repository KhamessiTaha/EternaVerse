export default function Home() {
  return (
    <main className="container mx-auto text-center p-8">
      <h1 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-500">
        Welcome to Universe Sandbox
      </h1>
      <p className="text-lg text-gray-400 mb-12">
        Explore the cosmos and create your own universe. Experience cosmic events, tweak
        the laws of physics, and watch the universe unfold.
      </p>
      <div className="mt-8 flex justify-center space-x-4">
        <a
          href="/explore"
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-md shadow-lg text-lg"
        >
          Start Exploring
        </a>
        <a
          href="/about"
          className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-md shadow-lg text-lg"
        >
          Learn More
        </a>
      </div>
    </main>
  );
}
