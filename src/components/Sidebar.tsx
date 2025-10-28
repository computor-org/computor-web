'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '../contexts/AuthContext';

interface SubItem {
  id: string;
  label: string;
  path: string;
}

interface ViewNavItem {
  id: string;
  view: string;
  label: string;
  path: string;
  icon: string;
  subItems?: SubItem[];
}

// Navigation structure for view-based navigation (when in course context)
const getViewNavigation = (courseId: string): ViewNavItem[] => [
  {
    id: 'student-view',
    view: 'student',
    label: 'Student',
    path: `/courses/${courseId}/student`,
    icon: 'student',
    subItems: [
      { id: 'student-assignments', label: 'Assignments', path: `/courses/${courseId}/student/assignments` },
    ],
  },
  {
    id: 'tutor-view',
    view: 'tutor',
    label: 'Tutor',
    path: `/courses/${courseId}/tutor`,
    icon: 'tutor',
    subItems: [
      { id: 'tutor-students', label: 'Students', path: `/courses/${courseId}/tutor/students` },
      { id: 'tutor-submissions', label: 'Submissions', path: `/courses/${courseId}/tutor/submissions` },
      { id: 'tutor-grading', label: 'Grading', path: `/courses/${courseId}/tutor/grading` },
    ],
  },
  {
    id: 'lecturer-view',
    view: 'lecturer',
    label: 'Lecturer',
    path: `/courses/${courseId}/lecturer`,
    icon: 'lecturer',
    subItems: [
      { id: 'lecturer-content', label: 'Course Contents', path: `/courses/${courseId}/lecturer/content` },
      { id: 'lecturer-students', label: 'Students', path: `/courses/${courseId}/lecturer/students` },
      { id: 'lecturer-grading', label: 'Grading Overview', path: `/courses/${courseId}/lecturer/grading` },
      { id: 'lecturer-analytics', label: 'Analytics', path: `/courses/${courseId}/lecturer/analytics` },
    ],
  },
];

const icons: Record<string, React.ReactElement> = {
  courses: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  student: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  ),
  tutor: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  lecturer: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  chevronDown: (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  ),
};

export default function Sidebar() {
  const pathname = usePathname();
  const { user, views } = useAuth();
  const [collapsed, setCollapsed] = useState(false);
  const [expandedViews, setExpandedViews] = useState<Record<string, boolean>>({});
  const [courseViews, setCourseViews] = useState<string[]>([]);

  // Detect if we're in a course context
  const courseMatch = pathname.match(/^\/courses\/([^/]+)/);
  const currentCourseId = courseMatch ? courseMatch[1] : null;

  // Fetch course-specific views when in course context
  useEffect(() => {
    if (currentCourseId) {
      async function fetchCourseViews() {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/user/views/${currentCourseId}`,
            { credentials: 'include' }
          );
          if (response.ok) {
            const data = await response.json();
            setCourseViews(data);
          }
        } catch (error) {
          console.error('Failed to fetch course views:', error);
          // Fallback to global views if course-specific fetch fails
          setCourseViews(views);
        }
      }
      fetchCourseViews();
    } else {
      setCourseViews([]);
    }
  }, [currentCourseId, views]);

  const toggleView = (viewId: string) => {
    setExpandedViews(prev => ({
      ...prev,
      [viewId]: !prev[viewId]
    }));
  };

  // If we're in a course context, show view-based navigation
  if (currentCourseId) {
    const viewNavigation = getViewNavigation(currentCourseId);
    // Use course-specific views if available, otherwise fall back to global views
    const activeViews = courseViews.length > 0 ? courseViews : views;
    const availableViews = viewNavigation.filter((item) =>
      activeViews.includes(item.view)
    );

    return (
      <aside
        className={`${
          collapsed ? 'w-16' : 'w-64'
        } bg-white border-r border-gray-200 transition-all duration-300 flex flex-col`}
      >
        {/* Header */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
          {!collapsed && (
            <Link href="/dashboard" className="flex-1 min-w-0 hover:bg-gray-50 rounded px-2 py-1 -mx-2 -my-1 transition-colors cursor-pointer">
              <p className="text-sm font-semibold text-gray-900 truncate">
                {user?.givenName} {user?.familyName}
              </p>
            </Link>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
            title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            <svg
              className={`h-5 w-5 text-gray-600 transition-transform ${collapsed ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>

        {/* Navigation - View-based */}
        <nav className="flex-1 p-2 space-y-1 overflow-y-auto">
          {/* Back to Courses Link */}
          <Link
            href="/courses"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors mb-4"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {!collapsed && <span className="text-sm">Back to Courses</span>}
          </Link>

          {availableViews.map((viewItem) => {
            const isExpanded = expandedViews[viewItem.id];
            const isViewActive = pathname.startsWith(viewItem.path);

            return (
              <div key={viewItem.id} className="space-y-1">
                {/* Main View Item */}
                <div className="flex items-center">
                  <Link
                    href={viewItem.path}
                    className={`flex-1 flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      pathname === viewItem.path
                        ? 'bg-blue-50 text-blue-600'
                        : isViewActive
                        ? 'bg-blue-50/50 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    title={collapsed ? viewItem.label : undefined}
                  >
                    <span className={pathname === viewItem.path || isViewActive ? 'text-blue-600' : 'text-gray-500'}>
                      {icons[viewItem.icon]}
                    </span>
                    {!collapsed && (
                      <span className="text-sm font-medium">{viewItem.label}</span>
                    )}
                  </Link>

                  {/* Expand/Collapse Button */}
                  {!collapsed && viewItem.subItems && viewItem.subItems.length > 0 && (
                    <button
                      onClick={() => toggleView(viewItem.id)}
                      className="p-2 hover:bg-gray-100 rounded transition-colors"
                    >
                      <span
                        className={`transition-transform inline-block ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      >
                        {icons.chevronDown}
                      </span>
                    </button>
                  )}
                </div>

                {/* Sub Items */}
                {!collapsed && isExpanded && viewItem.subItems && (
                  <div className="ml-8 space-y-1">
                    {viewItem.subItems.map((subItem) => {
                      const isSubActive = pathname === subItem.path;

                      return (
                        <Link
                          key={subItem.id}
                          href={subItem.path}
                          className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                            isSubActive
                              ? 'bg-blue-50 text-blue-600 font-medium'
                              : 'text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          {subItem.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Footer - Logo & Version */}
        <div className="p-4 border-t border-gray-200">
          {!collapsed ? (
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <img src="/computor_logo.png" alt="Computor" className="h-6 w-6" />
                <span className="text-sm font-semibold text-gray-700">Computor</span>
              </div>
              <p className="text-xs text-gray-500 text-center">v1.0.0</p>
            </div>
          ) : (
            <div className="flex justify-center">
              <img src="/computor_logo.png" alt="Computor" className="h-8 w-8" />
            </div>
          )}
        </div>
      </aside>
    );
  }

  // Default navigation - show "Courses" list
  return (
    <aside
      className={`${
        collapsed ? 'w-16' : 'w-64'
      } bg-white border-r border-gray-200 transition-all duration-300 flex flex-col`}
    >
      {/* Header */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
        {!collapsed && (
          <Link href="/dashboard" className="flex-1 min-w-0 hover:bg-gray-50 rounded px-2 py-1 -mx-2 -my-1 transition-colors cursor-pointer">
            <p className="text-sm font-semibold text-gray-900 truncate">
              {user?.givenName} {user?.familyName}
            </p>
          </Link>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
          title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <svg
            className={`h-5 w-5 text-gray-600 transition-transform ${collapsed ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      {/* Navigation - Courses List */}
      <nav className="flex-1 p-2 space-y-1 overflow-y-auto">
        {/* Courses Item */}
        <Link
          href="/courses"
          className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
            pathname === '/courses'
              ? 'bg-blue-50 text-blue-600'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
          title={collapsed ? 'Courses' : undefined}
        >
          <span className={pathname === '/courses' ? 'text-blue-600' : 'text-gray-500'}>
            {icons.courses}
          </span>
          {!collapsed && (
            <span className="text-sm font-medium">Courses</span>
          )}
        </Link>
      </nav>

      {/* Footer - Logo & Version */}
      <div className="p-4 border-t border-gray-200">
        {!collapsed ? (
          <div className="space-y-2">
            <div className="flex items-center justify-center space-x-2">
              <img src="/computor_logo.png" alt="Computor" className="h-6 w-6" />
              <span className="text-sm font-semibold text-gray-700">Computor</span>
            </div>
            <p className="text-xs text-gray-500 text-center">v1.0.0</p>
          </div>
        ) : (
          <div className="flex justify-center">
            <img src="/computor_logo.png" alt="Computor" className="h-8 w-8" />
          </div>
        )}
      </div>
    </aside>
  );
}
