'use client';

import { useState } from 'react';
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
  view: string; // 'student' | 'tutor' | 'lecturer'
  label: string;
  path: string;
  icon: string;
  subItems?: SubItem[];
}

// Navigation structure for each view
const viewNavigation: ViewNavItem[] = [
  {
    id: 'student-view',
    view: 'student',
    label: 'Student',
    path: '/student',
    icon: 'student',
    subItems: [
      { id: 'student-courses', label: 'Courses', path: '/student/courses' },
      { id: 'student-submissions', label: 'Submissions', path: '/student/submissions' },
    ],
  },
  {
    id: 'tutor-view',
    view: 'tutor',
    label: 'Tutor',
    path: '/tutor',
    icon: 'tutor',
    subItems: [
      { id: 'tutor-courses', label: 'Courses', path: '/tutor/courses' },
      { id: 'tutor-students', label: 'Students', path: '/tutor/students' },
      { id: 'tutor-submissions', label: 'Submissions', path: '/tutor/submissions' },
      { id: 'tutor-grading', label: 'Grading', path: '/tutor/grading' },
    ],
  },
  {
    id: 'lecturer-view',
    view: 'lecturer',
    label: 'Lecturer',
    path: '/lecturer',
    icon: 'lecturer',
    subItems: [
      { id: 'lecturer-courses', label: 'Course Management', path: '/lecturer/courses' },
      { id: 'lecturer-content', label: 'Course Contents', path: '/lecturer/content' },
      { id: 'lecturer-students', label: 'Students', path: '/lecturer/students' },
      { id: 'lecturer-grading', label: 'Grading Overview', path: '/lecturer/grading' },
      { id: 'lecturer-analytics', label: 'Analytics', path: '/lecturer/analytics' },
    ],
  },
];

const icons: Record<string, React.ReactElement> = {
  student: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
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

  // Filter navigation based on user's available views
  const availableViews = viewNavigation.filter((item) =>
    views.includes(item.view)
  );

  const toggleView = (viewId: string) => {
    setExpandedViews(prev => ({
      ...prev,
      [viewId]: !prev[viewId]
    }));
  };

  return (
    <aside
      className={`${
        collapsed ? 'w-16' : 'w-64'
      } bg-white border-r border-gray-200 transition-all duration-300 flex flex-col`}
    >
      {/* Header */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
        {!collapsed && (
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900 truncate">
              {user?.givenName} {user?.familyName}
            </p>
            <p className="text-xs text-gray-500 truncate capitalize">{user?.role}</p>
          </div>
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

      {/* Navigation */}
      <nav className="flex-1 p-2 space-y-1 overflow-y-auto">
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

      {/* Footer - Version */}
      {!collapsed && (
        <div className="p-4 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">Computor v1.0.0</p>
        </div>
      )}
    </aside>
  );
}
