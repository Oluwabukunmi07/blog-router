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
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center px-6">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400">
            Checking TanStack Router availability...
          </p>
        </div>
      </main>
    );

  if (!available)
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-12 px-6">
        <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            TanStack Router Not Installed
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            The TanStack Router package is not currently available in your
            environment.
          </p>
          <div className="bg-slate-100 dark:bg-slate-900 rounded-md p-4 mb-6">
            <p className="text-sm font-mono text-slate-900 dark:text-slate-100">
              npm install @tanstack/react-router
            </p>
          </div>
          <p className="text-slate-600 dark:text-slate-400">
            Run the command above to enable TanStack Router integration and
            advanced routing features.
          </p>
        </div>
      </main>
    );

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-12 px-6">
      <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 border border-green-200 dark:border-green-900">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            TanStack Router is Available
          </h2>
        </div>
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          ✓ The @tanstack/react-router package is successfully installed.
        </p>
        <p className="text-slate-600 dark:text-slate-400">
          You can now integrate TanStack Router for advanced routing features
          like file-based routing, type-safe route definitions, and powerful
          data loading capabilities.
        </p>
      </div>
    </main>
  );
}
