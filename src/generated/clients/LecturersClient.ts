/**
 * Auto-generated client for LecturersClient.
 * Endpoint: /lecturers
 */

import type { AssignExampleResponse, ContentValidationCreate, ContentValidationGet, CourseContentLecturerGet, CourseContentLecturerList, CourseGet, CourseList, DeploymentGet, UnassignExampleResponse, computor_types__lecturer_deployments__AssignExampleRequest } from 'types/generated';
import { APIClient, apiClient } from 'api/client';
import { BaseEndpointClient } from './baseClient';

export class LecturersClient extends BaseEndpointClient {
  constructor(client: APIClient = apiClient) {
    super(client, '/lecturers');
  }

  /**
   * Lecturer List Course Contents Endpoint
   * List course contents with course repository information.
   */
  async lecturerListCourseContentsEndpointLecturersCourseContentsGet({ archived, ascendants, courseContentTypeId, courseId, descendants, directory, executionBackendId, hasDeployment, id, limit, maxGroupSize, maxSubmissions, maxTestRuns, nlevel, path, position, project, providerUrl, skip, title, userId }: { archived?: boolean | null; ascendants?: string | null; courseContentTypeId?: string | null; courseId?: string | null; descendants?: string | null; directory?: string | null; executionBackendId?: string | null; hasDeployment?: boolean | null; id?: string | null; limit?: number | null; maxGroupSize?: number | null; maxSubmissions?: number | null; maxTestRuns?: number | null; nlevel?: number | null; path?: string | null; position?: number | null; project?: string | null; providerUrl?: string | null; skip?: number | null; title?: string | null; userId?: string | null }): Promise<CourseContentLecturerList[]> {
    const queryParams: Record<string, unknown> = {
      archived,
      ascendants,
      course_content_type_id: courseContentTypeId,
      course_id: courseId,
      descendants,
      directory,
      execution_backend_id: executionBackendId,
      has_deployment: hasDeployment,
      id,
      limit,
      max_group_size: maxGroupSize,
      max_submissions: maxSubmissions,
      max_test_runs: maxTestRuns,
      nlevel,
      path,
      position,
      project,
      provider_url: providerUrl,
      skip,
      title,
      user_id: userId,
    };
    return this.client.get<CourseContentLecturerList[]>(this.buildPath('course-contents'), { params: queryParams });
  }

  /**
   * Lecturer Get Course Contents Endpoint
   * Get a specific course content with course repository information.
   */
  async lecturerGetCourseContentsEndpointLecturersCourseContentsCourseContentIdGet({ courseContentId, userId }: { courseContentId: string | string; userId?: string | null }): Promise<CourseContentLecturerGet> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.get<CourseContentLecturerGet>(this.buildPath('course-contents', courseContentId), { params: queryParams });
  }

  /**
   * Assign Example To Course Content
   * Assign an example to a course content (assignment).
   * This is phase 1 of the release process: Database-only assignment.
   * No Git operations are performed at this stage.
   * Requirements:
   * - User must have _lecturer or higher role in the course
   * - Course content must be submittable (assignment type)
   * - Example and version must exist in the database
   * - Version must follow semantic versioning format
   * Args:
   * course_content_id: ID of the course content to assign to
   * request: Assignment request with example_id and version_tag
   * permissions: Current user permissions
   * db: Database session
   * Returns:
   * AssignExampleResponse with deployment details
   * Raises:
   * 400: Invalid request (bad version format, non-submittable content, etc.)
   * 403: Insufficient permissions
   * 404: Course content, example, or version not found
   */
  async assignExampleToCourseContentLecturersCourseContentsCourseContentIdAssignExamplePost({ courseContentId, userId, body }: { courseContentId: string | string; userId?: string | null; body: computor_types__lecturer_deployments__AssignExampleRequest }): Promise<AssignExampleResponse> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.post<AssignExampleResponse>(this.buildPath('course-contents', courseContentId, 'assign-example'), body, { params: queryParams });
  }

  /**
   * Unassign Example From Course Content
   * Unassign an example from a course content (assignment).
   * Only allowed if the example has not been deployed yet.
   * Cannot unassign examples that are already deployed or currently deploying.
   * Args:
   * course_content_id: ID of the course content
   * permissions: Current user permissions
   * db: Database session
   * Returns:
   * UnassignExampleResponse with unassignment confirmation
   * Raises:
   * 400: Cannot unassign (already deployed or deploying)
   * 403: Insufficient permissions
   * 404: Course content or deployment not found
   */
  async unassignExampleFromCourseContentLecturersCourseContentsCourseContentIdDeploymentDelete({ courseContentId, userId }: { courseContentId: string | string; userId?: string | null }): Promise<UnassignExampleResponse> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.delete<UnassignExampleResponse>(this.buildPath('course-contents', courseContentId, 'deployment'), { params: queryParams });
  }

  /**
   * Get Course Content Deployment
   * Get the current deployment information for a course content.
   * Shows which example (if any) is assigned to this course content
   * and its deployment status.
   * Args:
   * course_content_id: ID of the course content
   * permissions: Current user permissions
   * db: Database session
   * Returns:
   * DeploymentGet with deployment details
   * Raises:
   * 403: Insufficient permissions
   * 404: Course content not found or no deployment exists
   */
  async getCourseContentDeploymentLecturersCourseContentsCourseContentIdDeploymentGet({ courseContentId, userId }: { courseContentId: string | string; userId?: string | null }): Promise<DeploymentGet> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.get<DeploymentGet>(this.buildPath('course-contents', courseContentId, 'deployment'), { params: queryParams });
  }

  /**
   * Lecturer List Courses Endpoint
   * List courses accessible to lecturers.
   */
  async lecturerListCoursesEndpointLecturersCoursesGet({ courseFamilyId, description, fullPath, id, languageCode, limit, organizationId, path, providerUrl, skip, title, userId }: { courseFamilyId?: string | null; description?: string | null; fullPath?: string | null; id?: string | null; languageCode?: string | null; limit?: number | null; organizationId?: string | null; path?: string | null; providerUrl?: string | null; skip?: number | null; title?: string | null; userId?: string | null }): Promise<CourseList[]> {
    const queryParams: Record<string, unknown> = {
      course_family_id: courseFamilyId,
      description,
      full_path: fullPath,
      id,
      language_code: languageCode,
      limit,
      organization_id: organizationId,
      path,
      provider_url: providerUrl,
      skip,
      title,
      user_id: userId,
    };
    return this.client.get<CourseList[]>(this.buildPath('courses'), { params: queryParams });
  }

  /**
   * Lecturer Get Courses Endpoint
   * Get a specific course for lecturers.
   */
  async lecturerGetCoursesEndpointLecturersCoursesCourseIdGet({ courseId, userId }: { courseId: string | string; userId?: string | null }): Promise<CourseGet> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.get<CourseGet>(this.buildPath('courses', courseId), { params: queryParams });
  }

  /**
   * Validate Course Content Batch
   * Batch validate multiple course contents with their assigned examples and versions.
   * This endpoint optimizes validation from 100+ HTTP requests (N examples × 2 endpoints)
   * to a single request by batch fetching all examples and versions at once.
   * The endpoint validates that:
   * 1. Each example identifier exists in the database
   * 2. Each version tag exists for the corresponding example
   * Args:
   * course_id: ID of the course
   * request: Batch validation request with list of content_validations
   * permissions: Current user permissions
   * db: Database session
   * Returns:
   * ContentValidationGet with validation results for each content item
   * Raises:
   * 403: Insufficient permissions (requires _lecturer role)
   * 404: Course not found
   * Example request:
   * ```json
   * {
   * "content_validations": [
   * {
   * "content_id": "abc-123",
   * "example_identifier": "unit01.test_1",
   * "version_tag": "1.0.0"
   * },
   * {
   * "content_id": "def-456",
   * "example_identifier": "unit02.test_2",
   * "version_tag": "2.1.0"
   * }
   * ]
   * }
   * ```
   * Example response:
   * ```json
   * {
   * "valid": true,
   * "total_validated": 2,
   * "total_issues": 0,
   * "validation_results": [
   * {
   * "content_id": "abc-123",
   * "valid": true,
   * "example_validation": {
   * "identifier": "unit01.test_1",
   * "exists": true,
   * "example_id": "example-uuid",
   * "message": null
   * },
   * "version_validation": {
   * "version_tag": "1.0.0",
   * "exists": true,
   * "version_id": "version-uuid",
   * "message": null
   * },
   * "validation_message": null
   * }
   * ]
   * }
   * ```
   */
  async validateCourseContentBatchLecturersCoursesCourseIdValidatePost({ courseId, userId, body }: { courseId: string | string; userId?: string | null; body: ContentValidationCreate }): Promise<ContentValidationGet> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.post<ContentValidationGet>(this.buildPath('courses', courseId, 'validate'), body, { params: queryParams });
  }
}
