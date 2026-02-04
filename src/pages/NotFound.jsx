import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ padding: 20 }}>
      <h1>404 — Page Not Found</h1>
      <p>The route you requested does not exist.</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
}
