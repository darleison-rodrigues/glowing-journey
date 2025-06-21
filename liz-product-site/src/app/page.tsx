export default function Home() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
             style={{ backgroundImage: 'url("/space-background.jpg")' }}> {/* You'd need a subtle space background image */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="z-10 p-8 rounded-lg">
        <h1 className="text-6xl font-extrabold text-white leading-tight mb-6 animate-fade-in">
          Unlock the Universe of Data with <span className="text-blue-400">Liz.</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Revolutionizing how you interact with information through powerful APIs.
        </p>
        <a href="/explore" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          Explore Features
        </a>
      </div>
    </section>
  );
}