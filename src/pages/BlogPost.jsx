import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { posts } from "../data/posts";

export default function BlogPost() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // simulate async fetch with timeout
    const t = setTimeout(() => {
      const found = posts.find((p) => p.id === postId);
      if (found) setPost(found);
      else setError(new Error("Post not found"));
    }, 300);

    return () => clearTimeout(t);
  }, [postId]);

  if (error) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center px-6">
        <div className="max-w-md w-full bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-3">
            Post not found
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            We could not find a post with id:{" "}
            <span className="font-mono text-slate-900 dark:text-white">
              {postId}
            </span>
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => navigate(-1)}
              className="flex-1 px-4 py-2 bg-slate-600 text-white rounded-md font-medium hover:bg-slate-700 transition-colors"
            >
              ← Go Back
            </button>
            <Link
              to="/"
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors text-center"
            >
              Home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  if (!post) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400">Loading post...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-12 px-6">
      <article className="max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 border border-slate-200 dark:border-slate-700">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
          {post.title}
        </h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
            {post.content}
          </p>
        </div>

        <div className="flex gap-3 mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 bg-slate-600 text-white rounded-md font-medium hover:bg-slate-700 transition-colors"
          >
            ← Go Back
          </button>
          <Link
            to="/"
            className="px-6 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            Home
          </Link>
        </div>
      </article>
    </main>
  );
}
