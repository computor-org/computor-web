/**
 * Auto-generated client for CourseExecutionBackendsClient.
 * Endpoint: /course-execution-backends
 */

import type { CourseExecutionBackendCreate, CourseExecutionBackendGet, CourseExecutionBackendList } from 'types/generated';
import { APIClient, apiClient } from 'api/client';
import { BaseEndpointClient } from './baseClient';

export class CourseExecutionBackendsClient extends BaseEndpointClient {
  constructor(client: APIClient = apiClient) {
    super(client, '/course-execution-backends');
  }

  /**
   * List Course Execution Backend
   */
  async listCourseExecutionBackendCourseExecutionBackendsGet({ courseId, executionBackendId, limit, skip, userId }: { courseId?: string | null; executionBackendId?: string | null; limit?: number | null; skip?: number | null; userId?: string | null }): Promise<CourseExecutionBackendList[]> {
    const queryParams: Record<string, unknown> = {
      course_id: courseId,
      execution_backend_id: executionBackendId,
      limit,
      skip,
      user_id: userId,
    };
    return this.client.get<CourseExecutionBackendList[]>(this.basePath, { params: queryParams });
  }

  /**
   * Create Course Execution Backend
   */
  async createCourseExecutionBackendCourseExecutionBackendsPost({ userId, body }: { userId?: string | null; body: CourseExecutionBackendCreate }): Promise<CourseExecutionBackendGet> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.post<CourseExecutionBackendGet>(this.basePath, body, { params: queryParams });
  }
}
