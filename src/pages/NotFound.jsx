import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="mb-6">
          <h1 className="text-6xl font-bold text-slate-900 dark:text-white mb-2">
            404
          </h1>
          <h2 className="text-2xl font-semibold text-slate-700 dark:text-slate-300">
            Page Not Found
          </h2>
        </div>
        <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">
          The route you requested does not exist. Let's get you back on track.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
        >
          ← Return to Home
        </Link>
      </div>
    </main>
  );
}
