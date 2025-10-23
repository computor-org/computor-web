/**
 * Auto-generated client for TutorsClient.
 * Endpoint: /tutors
 */

import type { CourseContentStudentGet, CourseContentStudentList, CourseTutorGet, CourseTutorList, TutorCourseMemberGet, TutorCourseMemberList, TutorGradeCreate, TutorGradeResponse, TutorSubmissionGroupGet, TutorSubmissionGroupList } from 'types/generated';
import { APIClient, apiClient } from 'api/client';
import { BaseEndpointClient } from './baseClient';

export class TutorsClient extends BaseEndpointClient {
  constructor(client: APIClient = apiClient) {
    super(client, '/tutors');
  }

  /**
   * Download Course Content Reference
   * Download the reference/example solution for a course content as a ZIP file.
   * This endpoint allows tutors to download the example/reference repository
   * associated with an assignment for grading or reference purposes.
   * Query parameters:
   * - with_dependencies: Include all example dependencies recursively (default: False)
   * Returns:
   * StreamingResponse containing a ZIP file with the example files
   */
  async downloadCourseContentReferenceTutorsCourseContentsCourseContentIdReferenceGet({ courseContentId, userId, withDependencies }: { courseContentId: string | string; userId?: string | null; withDependencies?: boolean }): Promise<void> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
      with_dependencies: withDependencies,
    };
    return this.client.get<void>(this.buildPath('course-contents', courseContentId, 'reference'), { params: queryParams });
  }

  /**
   * Tutor List Course Members Endpoint
   * List course members for tutors.
   */
  async tutorListCourseMembersEndpointTutorsCourseMembersGet({ courseGroupId, courseId, courseRoleId, familyName, givenName, id, limit, skip, userId }: { courseGroupId?: string | null; courseId?: string | null; courseRoleId?: string | null; familyName?: string | null; givenName?: string | null; id?: string | null; limit?: number | null; skip?: number | null; userId?: string | null }): Promise<TutorCourseMemberList[]> {
    const queryParams: Record<string, unknown> = {
      course_group_id: courseGroupId,
      course_id: courseId,
      course_role_id: courseRoleId,
      family_name: familyName,
      given_name: givenName,
      id,
      limit,
      skip,
      user_id: userId,
    };
    return this.client.get<TutorCourseMemberList[]>(this.buildPath('course-members'), { params: queryParams });
  }

  /**
   * Tutor Get Course Members Endpoint
   * Get a course member with unreviewed course contents.
   */
  async tutorGetCourseMembersEndpointTutorsCourseMembersCourseMemberIdGet({ courseMemberId, userId }: { courseMemberId: string | string; userId?: string | null }): Promise<TutorCourseMemberGet> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.get<TutorCourseMemberGet>(this.buildPath('course-members', courseMemberId), { params: queryParams });
  }

  /**
   * Tutor List Course Contents Endpoint
   * List course contents for a course member as a tutor.
   */
  async tutorListCourseContentsEndpointTutorsCourseMembersCourseMemberIdCourseContentsGet({ courseMemberId, ascendants, courseContentTypeId, courseId, descendants, directory, id, limit, nlevel, path, project, providerUrl, skip, title, userId }: { courseMemberId: string | string; ascendants?: string | null; courseContentTypeId?: string | null; courseId?: string | null; descendants?: string | null; directory?: string | null; id?: string | null; limit?: number | null; nlevel?: number | null; path?: string | null; project?: string | null; providerUrl?: string | null; skip?: number | null; title?: string | null; userId?: string | null }): Promise<CourseContentStudentList[]> {
    const queryParams: Record<string, unknown> = {
      ascendants,
      course_content_type_id: courseContentTypeId,
      course_id: courseId,
      descendants,
      directory,
      id,
      limit,
      nlevel,
      path,
      project,
      provider_url: providerUrl,
      skip,
      title,
      user_id: userId,
    };
    return this.client.get<CourseContentStudentList[]>(this.buildPath('course-members', courseMemberId, 'course-contents'), { params: queryParams });
  }

  /**
   * Tutor Get Course Contents Endpoint
   * Get course content for a course member as a tutor.
   */
  async tutorGetCourseContentsEndpointTutorsCourseMembersCourseMemberIdCourseContentsCourseContentIdGet({ courseContentId, courseMemberId, userId }: { courseContentId: string | string; courseMemberId: string | string; userId?: string | null }): Promise<CourseContentStudentGet> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.get<CourseContentStudentGet>(this.buildPath('course-members', courseMemberId, 'course-contents', courseContentId), { params: queryParams });
  }

  /**
   * Tutor Update Course Contents Endpoint
   * Update grade for a course content as a tutor.
   */
  async tutorUpdateCourseContentsEndpointTutorsCourseMembersCourseMemberIdCourseContentsCourseContentIdPatch({ courseContentId, courseMemberId, userId, body }: { courseContentId: string | string; courseMemberId: string | string; userId?: string | null; body: TutorGradeCreate }): Promise<TutorGradeResponse> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.patch<TutorGradeResponse>(this.buildPath('course-members', courseMemberId, 'course-contents', courseContentId), body, { params: queryParams });
  }

  /**
   * Tutor List Courses Endpoint
   * List courses for tutors.
   */
  async tutorListCoursesEndpointTutorsCoursesGet({ courseFamilyId, description, fullPath, fullPathStudent, id, limit, organizationId, path, providerUrl, skip, title, userId }: { courseFamilyId?: string | null; description?: string | null; fullPath?: string | null; fullPathStudent?: string | null; id?: string | null; limit?: number | null; organizationId?: string | null; path?: string | null; providerUrl?: string | null; skip?: number | null; title?: string | null; userId?: string | null }): Promise<CourseTutorList[]> {
    const queryParams: Record<string, unknown> = {
      course_family_id: courseFamilyId,
      description,
      full_path: fullPath,
      full_path_student: fullPathStudent,
      id,
      limit,
      organization_id: organizationId,
      path,
      provider_url: providerUrl,
      skip,
      title,
      user_id: userId,
    };
    return this.client.get<CourseTutorList[]>(this.buildPath('courses'), { params: queryParams });
  }

  /**
   * Tutor Get Courses Endpoint
   * Get a course for tutors.
   */
  async tutorGetCoursesEndpointTutorsCoursesCourseIdGet({ courseId, userId }: { courseId: string | string; userId?: string | null }): Promise<CourseTutorGet> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.get<CourseTutorGet>(this.buildPath('courses', courseId), { params: queryParams });
  }

  /**
   * Tutor List Submission Groups Endpoint
   * List submission groups for tutors with filtering options.
   * Query parameters:
   * - course_id: Filter by course ID
   * - course_content_id: Filter by course content ID
   * - course_group_id: Filter by course group ID
   * - has_submissions: Filter groups with/without submissions
   * - has_ungraded_submissions: Filter groups with/without ungraded submissions
   * - limit: Maximum number of results (default: 100)
   * - offset: Number of results to skip (default: 0)
   */
  async tutorListSubmissionGroupsEndpointTutorsSubmissionGroupsGet({ courseContentId, courseGroupId, courseId, hasSubmissions, hasUngradedSubmissions, limit, offset, userId }: { courseContentId?: string | null; courseGroupId?: string | null; courseId?: string | null; hasSubmissions?: boolean | null; hasUngradedSubmissions?: boolean | null; limit?: number; offset?: number; userId?: string | null }): Promise<TutorSubmissionGroupList[]> {
    const queryParams: Record<string, unknown> = {
      course_content_id: courseContentId,
      course_group_id: courseGroupId,
      course_id: courseId,
      has_submissions: hasSubmissions,
      has_ungraded_submissions: hasUngradedSubmissions,
      limit,
      offset,
      user_id: userId,
    };
    return this.client.get<TutorSubmissionGroupList[]>(this.buildPath('submission-groups'), { params: queryParams });
  }

  /**
   * Tutor Get Submission Group Endpoint
   * Get a submission group with detailed information for tutors.
   */
  async tutorGetSubmissionGroupEndpointTutorsSubmissionGroupsSubmissionGroupIdGet({ submissionGroupId, userId }: { submissionGroupId: string | string; userId?: string | null }): Promise<TutorSubmissionGroupGet> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.get<TutorSubmissionGroupGet>(this.buildPath('submission-groups', submissionGroupId), { params: queryParams });
  }
}
