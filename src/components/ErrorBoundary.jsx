import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // You can log the error to an error reporting service here
    console.error("ErrorBoundary caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center px-6">
          <div className="max-w-md w-full bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 border-l-4 border-red-600">
            <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-3">
              Something went wrong
            </h2>
            <div className="bg-slate-100 dark:bg-slate-900 rounded-md p-4 mb-6 max-h-40 overflow-auto">
              <pre className="text-sm text-slate-600 dark:text-slate-400 font-mono">
                {String(this.state.error)}
              </pre>
            </div>
            <button
              onClick={() => window.location.replace("/")}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              Return to Home
            </button>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}
