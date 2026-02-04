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
      <div style={{ padding: 20 }}>
        <h2>Post not found</h2>
        <p>We could not find a post with id: {postId}</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
        <Link to="/">Go Home</Link>
      </div>
    );
  }

  if (!post) return <div style={{ padding: 20 }}>Loading post...</div>;

  return (
    <article style={{ padding: 20 }}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <div style={{ marginTop: 20 }}>
        <button onClick={() => navigate(-1)} style={{ marginRight: 12 }}>
          Go Back
        </button>
        <Link to="/">Home</Link>
      </div>
    </article>
  );
}
