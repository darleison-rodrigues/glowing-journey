// src/app/layout.tsx
import './globals.css';
import Header from '../app/components/Header'; // Import the new Header component

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-gray-100 antialiased">
        <Header /> {/* Render the Header component here */}
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        {/* Potentially add a Footer component here later */}
      </body>
    </html>
  );
}