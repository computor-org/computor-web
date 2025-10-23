/**
 * Auto-generated client for GroupsClient.
 * Endpoint: /groups
 */

import type { GroupCreate, GroupGet, GroupList, GroupType, GroupUpdate } from 'types/generated';
import { APIClient, apiClient } from 'api/client';
import { BaseEndpointClient } from './baseClient';

export class GroupsClient extends BaseEndpointClient {
  constructor(client: APIClient = apiClient) {
    super(client, '/groups');
  }

  /**
   * List Groups
   */
  async listGroupsGroupsGet({ archived, groupType, id, limit, name, skip, userId }: { archived?: boolean | null; groupType?: GroupType | null; id?: string | null; limit?: number | null; name?: string | null; skip?: number | null; userId?: string | null }): Promise<GroupList[]> {
    const queryParams: Record<string, unknown> = {
      archived,
      group_type: groupType,
      id,
      limit,
      name,
      skip,
      user_id: userId,
    };
    return this.client.get<GroupList[]>(this.basePath, { params: queryParams });
  }

  /**
   * Create Groups
   */
  async createGroupsGroupsPost({ userId, body }: { userId?: string | null; body: GroupCreate }): Promise<GroupGet> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.post<GroupGet>(this.basePath, body, { params: queryParams });
  }

  /**
   * Delete Groups
   */
  async deleteGroupsGroupsIdDelete({ id, userId }: { id: string | string; userId?: string | null }): Promise<void> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.delete<void>(this.buildPath(id), { params: queryParams });
  }

  /**
   * Get Groups
   */
  async getGroupsGroupsIdGet({ id, userId }: { id: string | string; userId?: string | null }): Promise<GroupGet> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.get<GroupGet>(this.buildPath(id), { params: queryParams });
  }

  /**
   * Update Groups
   */
  async updateGroupsGroupsIdPatch({ id, userId, body }: { id: string | string; userId?: string | null; body: GroupUpdate }): Promise<GroupGet> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.patch<GroupGet>(this.buildPath(id), body, { params: queryParams });
  }
}
