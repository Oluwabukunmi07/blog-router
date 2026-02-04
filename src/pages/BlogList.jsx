import React from "react";
import { Link } from "react-router-dom";
import { posts } from "../data/posts";

export default function BlogList() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-2">
            Blog Posts
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Explore our latest articles and insights
          </p>
        </div>

        <div className="grid gap-6">
          {posts.map((p) => (
            <article
              key={p.id}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-slate-200 dark:border-slate-700"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {p.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  {p.excerpt}
                </p>
                <Link
                  to={`/blog/${p.id}`}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
