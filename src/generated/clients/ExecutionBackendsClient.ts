/**
 * Auto-generated client for ExecutionBackendsClient.
 * Endpoint: /execution-backends
 */

import type { ExecutionBackendCreate, ExecutionBackendGet, ExecutionBackendList, ExecutionBackendUpdate } from 'types/generated';
import { APIClient, apiClient } from 'api/client';
import { BaseEndpointClient } from './baseClient';

export class ExecutionBackendsClient extends BaseEndpointClient {
  constructor(client: APIClient = apiClient) {
    super(client, '/execution-backends');
  }

  /**
   * List Execution-Backends
   */
  async listExecutionBackendsExecutionBackendsGet({ id, limit, skip, slug, type, userId }: { id?: string | null; limit?: number | null; skip?: number | null; slug?: string | null; type?: string | null; userId?: string | null }): Promise<ExecutionBackendList[]> {
    const queryParams: Record<string, unknown> = {
      id,
      limit,
      skip,
      slug,
      type,
      user_id: userId,
    };
    return this.client.get<ExecutionBackendList[]>(this.basePath, { params: queryParams });
  }

  /**
   * Create Execution-Backends
   */
  async createExecutionBackendsExecutionBackendsPost({ userId, body }: { userId?: string | null; body: ExecutionBackendCreate }): Promise<ExecutionBackendGet> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.post<ExecutionBackendGet>(this.basePath, body, { params: queryParams });
  }

  /**
   * Delete Execution-Backends
   */
  async deleteExecutionBackendsExecutionBackendsIdDelete({ id, userId }: { id: string | string; userId?: string | null }): Promise<void> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.delete<void>(this.buildPath(id), { params: queryParams });
  }

  /**
   * Get Execution-Backends
   */
  async getExecutionBackendsExecutionBackendsIdGet({ id, userId }: { id: string | string; userId?: string | null }): Promise<ExecutionBackendGet> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.get<ExecutionBackendGet>(this.buildPath(id), { params: queryParams });
  }

  /**
   * Update Execution-Backends
   */
  async updateExecutionBackendsExecutionBackendsIdPatch({ id, userId, body }: { id: string | string; userId?: string | null; body: ExecutionBackendUpdate }): Promise<ExecutionBackendGet> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.patch<ExecutionBackendGet>(this.buildPath(id), body, { params: queryParams });
  }
}
