import React from "react";
import { Link } from "react-router-dom";
import { posts } from "../data/posts";

export default function BlogList() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((p) => (
          <li key={p.id} style={{ marginBottom: 12 }}>
            <h3>{p.title}</h3>
            <p>{p.excerpt}</p>
            <Link to={`/blog/${p.id}`}>Read more</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
