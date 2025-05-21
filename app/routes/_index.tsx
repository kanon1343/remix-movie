import React from "react";

export default function Index() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Remix Movie App</h1>
      <p className="text-gray-700">
        Welcome to Remix Movie App powered by Deno!
      </p>
      <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow">
        <p className="text-green-600 font-semibold">Tailwind CSS is working!</p>
      </div>
    </div>
  );
}
