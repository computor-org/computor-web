/**
 * Auto-generated client for CoursesClient.
 * Endpoint: /courses
 */

import type { CourseCreate, CourseExecutionBackendGet, CourseGet, CourseList, CourseUpdate } from 'types/generated';
import { APIClient, apiClient } from 'api/client';
import { BaseEndpointClient } from './baseClient';

export class CoursesClient extends BaseEndpointClient {
  constructor(client: APIClient = apiClient) {
    super(client, '/courses');
  }

  /**
   * List Courses
   */
  async listCoursesCoursesGet({ courseFamilyId, description, fullPath, id, languageCode, limit, organizationId, path, providerUrl, skip, title, userId }: { courseFamilyId?: string | null; description?: string | null; fullPath?: string | null; id?: string | null; languageCode?: string | null; limit?: number | null; organizationId?: string | null; path?: string | null; providerUrl?: string | null; skip?: number | null; title?: string | null; userId?: string | null }): Promise<CourseList[]> {
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
    return this.client.get<CourseList[]>(this.basePath, { params: queryParams });
  }

  /**
   * Create Courses
   */
  async createCoursesCoursesPost({ userId, body }: { userId?: string | null; body: CourseCreate }): Promise<CourseGet> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.post<CourseGet>(this.basePath, body, { params: queryParams });
  }

  /**
   * Delete Course Execution Backend Endpoint
   * Delete course execution backend.
   */
  async deleteCourseExecutionBackendEndpointCoursesCourseIdExecutionBackendsExecutionBackendIdDelete({ courseId, executionBackendId, userId }: { courseId: string | string; executionBackendId: string | string; userId?: string | null }): Promise<Record<string, unknown> & Record<string, unknown>> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.delete<Record<string, unknown> & Record<string, unknown>>(this.buildPath(courseId, 'execution-backends', executionBackendId), { params: queryParams });
  }

  /**
   * Patch Course Execution Backend Endpoint
   * Update course execution backend configuration.
   */
  async patchCourseExecutionBackendEndpointCoursesCourseIdExecutionBackendsExecutionBackendIdPatch({ courseId, executionBackendId, userId, body }: { courseId: string | string; executionBackendId: string | string; userId?: string | null; body: Record<string, unknown> & Record<string, unknown> }): Promise<CourseExecutionBackendGet> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.patch<CourseExecutionBackendGet>(this.buildPath(courseId, 'execution-backends', executionBackendId), body, { params: queryParams });
  }

  /**
   * Delete Courses
   */
  async deleteCoursesCoursesIdDelete({ id, userId }: { id: string | string; userId?: string | null }): Promise<void> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.delete<void>(this.buildPath(id), { params: queryParams });
  }

  /**
   * Get Courses
   */
  async getCoursesCoursesIdGet({ id, userId }: { id: string | string; userId?: string | null }): Promise<CourseGet> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.get<CourseGet>(this.buildPath(id), { params: queryParams });
  }

  /**
   * Update Courses
   */
  async updateCoursesCoursesIdPatch({ id, userId, body }: { id: string | string; userId?: string | null; body: CourseUpdate }): Promise<CourseGet> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.patch<CourseGet>(this.buildPath(id), body, { params: queryParams });
  }
}
