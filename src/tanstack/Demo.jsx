import React, { useEffect, useState } from "react";

export default function TanstackDemo() {
  const [available, setAvailable] = useState(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        // try to import the package so we can show integration status
        await import("@tanstack/react-router");
        if (mounted) setAvailable(true);
      } catch (err) {
        if (mounted) setAvailable(false);
      }
    })();

    return () => (mounted = false);
  }, []);

  if (available === null)
    return (
      <div style={{ padding: 20 }}>
        Checking TanStack Router availability...
      </div>
    );

  if (!available)
    return (
      <div style={{ padding: 20 }}>
        <h2>TanStack Router not installed</h2>
        <p>
          Run <code>npm install @tanstack/react-router</code> to enable the
          demo.
        </p>
      </div>
    );

  return (
    <div style={{ padding: 20 }}>
      <h2>TanStack Router is available</h2>
      <p>
        You can integrate TanStack Router here. This demo dynamically detects
        the package.
      </p>
    </div>
  );
}
