import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import "./App.css";

const BlogList = lazy(() => import("./pages/BlogList"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const NotFound = lazy(() => import("./pages/NotFound"));
const TanStackDemo = lazy(() => import("./tanstack/Demo"));

function App() {
  return (
    <BrowserRouter>
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-6">
          <Link
            to="/"
            className="inline-flex items-center px-3 py-2 rounded-md text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/blog"
            className="inline-flex items-center px-3 py-2 rounded-md text-sm font-medium text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors"
          >
            Blog
          </Link>
          <Link
            to="/tan"
            className="inline-flex items-center px-3 py-2 rounded-md text-sm font-medium text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors"
          >
            TanStack Demo
          </Link>
          <button
            onClick={() => window.history.back()}
            className="ml-auto px-3 py-2 rounded-md text-sm font-medium bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
          >
            ← Back
          </button>
        </div>
      </header>

      <ErrorBoundary>
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-slate-600 dark:text-slate-400">Loading...</p>
              </div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:postId" element={<BlogPost />} />
            <Route path="/tan" element={<TanStackDemo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
