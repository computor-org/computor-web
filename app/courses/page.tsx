'use client';

import AuthenticatedLayout from '@/src/components/AuthenticatedLayout';

export default function CoursesPage() {
  return (
    <AuthenticatedLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Courses</h1>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            + Create Course
          </button>
        </div>

        <div className="bg-white rounded-lg shadow border border-gray-200 p-12 text-center">
          <svg className="h-16 w-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Courses Page</h2>
          <p className="text-gray-600">This is a placeholder for the courses page. Course management features will be implemented here.</p>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
