'use client';

import AuthenticatedLayout from '@/src/components/AuthenticatedLayout';
import NotFound from '@/src/components/NotFound';
import { useParams } from 'next/navigation';

export default function TutorViewPage() {
  const params = useParams();
  const courseId = params.id as string;

  return (
    <AuthenticatedLayout>
      <NotFound
        title="Tutor View"
        message="This page is not yet implemented. Use the navigation menu to access Students, Submissions, or Grading."
        backLink={`/courses/${courseId}`}
        backText="Back to Course"
      />
    </AuthenticatedLayout>
  );
}
