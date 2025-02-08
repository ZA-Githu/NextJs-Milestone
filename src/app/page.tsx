export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">Welcome to My Next.js App</h1>
      <p className="text-lg text-gray-600 mt-2">Explore the pages below:</p>
      <div className="mt-6 flex space-x-4">
        <a
          href="/home"
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Home
        </a>
        <a
          href="/about"
          className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          About
        </a>
        <a
          href="/blog"
          className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
        >
          Blog
        </a>
      </div>
    </div>
  );
}
