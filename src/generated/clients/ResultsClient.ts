/**
 * Auto-generated client for ResultsClient.
 * Endpoint: /results
 */

import type { ResultCreate, ResultGet, ResultList, ResultUpdate, TaskStatus } from 'types/generated';
import { APIClient, apiClient } from 'api/client';
import { BaseEndpointClient } from './baseClient';

export class ResultsClient extends BaseEndpointClient {
  constructor(client: APIClient = apiClient) {
    super(client, '/results');
  }

  /**
   * List Results
   */
  async listResultsResultsGet({ courseContentId, courseContentTypeId, courseMemberId, executionBackendId, grade, id, latest, limit, result, skip, status, submissionArtifactId, submissionGroupId, submitterId, testSystemId, userId, versionIdentifier }: { courseContentId?: string | null; courseContentTypeId?: string | null; courseMemberId?: string | null; executionBackendId?: string | null; grade?: number | null; id?: string | null; latest?: boolean | null; limit?: number | null; result?: number | null; skip?: number | null; status?: TaskStatus | null; submissionArtifactId?: string | null; submissionGroupId?: string | null; submitterId?: string | null; testSystemId?: string | null; userId?: string | null; versionIdentifier?: string | null }): Promise<ResultList[]> {
    const queryParams: Record<string, unknown> = {
      course_content_id: courseContentId,
      course_content_type_id: courseContentTypeId,
      course_member_id: courseMemberId,
      execution_backend_id: executionBackendId,
      grade,
      id,
      latest,
      limit,
      result,
      skip,
      status,
      submission_artifact_id: submissionArtifactId,
      submission_group_id: submissionGroupId,
      submitter_id: submitterId,
      test_system_id: testSystemId,
      user_id: userId,
      version_identifier: versionIdentifier,
    };
    return this.client.get<ResultList[]>(this.basePath, { params: queryParams });
  }

  /**
   * Create Result
   */
  async createResultResultsPost({ userId, body }: { userId?: string | null; body: ResultCreate }): Promise<ResultGet> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.post<ResultGet>(this.basePath, body, { params: queryParams });
  }

  /**
   * Delete Result
   */
  async deleteResultResultsResultIdDelete({ resultId, userId }: { resultId: string | string; userId?: string | null }): Promise<void> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.delete<void>(this.buildPath(resultId), { params: queryParams });
  }

  /**
   * Get Result
   */
  async getResultResultsResultIdGet({ resultId, userId }: { resultId: string | string; userId?: string | null }): Promise<ResultGet> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.get<ResultGet>(this.buildPath(resultId), { params: queryParams });
  }

  /**
   * Update Result
   * Update a result.
   * CRITICAL: Uses ResultRepository for automatic cache invalidation of:
   * - Student views (GET /students/course-contents)
   * - Tutor views (GET /tutors/course-members/{id}/course-contents)
   * - Lecturer views
   */
  async updateResultResultsResultIdPatch({ resultId, userId, body }: { resultId: string | string; userId?: string | null; body: ResultUpdate }): Promise<ResultGet> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.patch<ResultGet>(this.buildPath(resultId), body, { params: queryParams });
  }

  /**
   * Result Status
   * Get the current status of a test result.
   */
  async resultStatusResultsResultIdStatusGet({ resultId, userId }: { resultId: string | string; userId?: string | null }): Promise<TaskStatus> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.get<TaskStatus>(this.buildPath(resultId, 'status'), { params: queryParams });
  }
}
