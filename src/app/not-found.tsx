/* eslint-disable @next/next/no-html-link-for-pages */
// app/not-found.tsx
"use client";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-gray-500 mb-6">Page not found</p>
      <a href="/" className="text-blue-600 hover:underline">
        Go back home
      </a>
    </main>
  );
}
