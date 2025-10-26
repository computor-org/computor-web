'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/computor_logo.png" alt="Computor" className="h-10 w-10" />
            <h1 className="text-2xl font-bold text-gray-900">Computor</h1>
          </div>
          <Link
            href="/login"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Sign In
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Hero Title */}
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
              Learn Programming with{' '}
              <span className="text-blue-600">Computor</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A comprehensive educational platform for programming courses, assignments, and automated testing.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg flex items-center space-x-2"
              onClick={() => alert('Download link coming soon!')}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download VS Code Extension</span>
            </button>
            <Link
              href="/login"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all font-semibold text-lg"
            >
              Get Started →
            </Link>
          </div>

          {/* VS Code Extension Card */}
          <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <svg className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <h3 className="text-2xl font-bold text-gray-900">
                Computor VS Code Extension
              </h3>
            </div>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Code directly in VS Code with our powerful extension. Submit assignments, run tests, and get instant feedback - all without leaving your editor.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="px-4 py-2 bg-blue-50 rounded-lg text-blue-700 font-medium">
                ✓ Instant Testing
              </div>
              <div className="px-4 py-2 bg-blue-50 rounded-lg text-blue-700 font-medium">
                ✓ Auto Submission
              </div>
              <div className="px-4 py-2 bg-blue-50 rounded-lg text-blue-700 font-medium">
                ✓ Live Feedback
              </div>
              <div className="px-4 py-2 bg-blue-50 rounded-lg text-blue-700 font-medium">
                ✓ GitLab Integration
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <svg className="h-12 w-12 text-blue-600 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Interactive Courses
              </h3>
              <p className="text-gray-600">
                Structured programming courses with hands-on assignments and projects.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <svg className="h-12 w-12 text-blue-600 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Automated Testing
              </h3>
              <p className="text-gray-600">
                Submit your code and get instant feedback with automated test runners.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <svg className="h-12 w-12 text-blue-600 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Collaborative Learning
              </h3>
              <p className="text-gray-600">
                Work in groups, share solutions, and learn together with peers.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2025 Computor. Educational Platform for Programming.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
