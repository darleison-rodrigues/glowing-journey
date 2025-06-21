import './globals.css';
import Link from 'next/link'; // <-- New import

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-gray-100 antialiased">
        <nav className="p-4 bg-gray-800 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            {/* Changed <a> to <Link> */}
            <Link href="/" className="text-2xl font-bold text-blue-400">
              Liz.
            </Link>
            <ul className="flex space-x-6">
              <li>
                {/* Changed <a> to <Link> */}
                <Link href="/" className="hover:text-blue-300">Home</Link>
              </li>
              <li>
                {/* Changed <a> to <Link> */}
                <Link href="/explore" className="hover:text-blue-300">Explore</Link>
              </li>
              <li>
                {/* Changed <a> to <Link> */}
                <Link href="/services" className="hover:text-blue-300">Services</Link>
              </li>
            </ul>
          </div>
        </nav>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}