import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: 'Travel Booking System',
  description: 'Explore and book your dream tours!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <header className="bg-blue-600 text-white p-4">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold">Travel Explorer</h1>
          </div>
        </header>
        <main className="container mx-auto py-8">{children}</main>
        <footer className="bg-blue-600 text-white text-center p-4">
          <p>© 2024 Travel Explorer. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}