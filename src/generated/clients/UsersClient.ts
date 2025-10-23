/**
 * Auto-generated client for UsersClient.
 * Endpoint: /users
 */

import type { UserCreate, UserGet, UserList, UserTypeEnum, UserUpdate } from 'types/generated';
import { APIClient, apiClient } from 'api/client';
import { BaseEndpointClient } from './baseClient';

export class UsersClient extends BaseEndpointClient {
  constructor(client: APIClient = apiClient) {
    super(client, '/users');
  }

  /**
   * List Users
   */
  async listUsersUsersGet({ archived, email, familyName, givenName, id, limit, number, skip, userId, userType, username }: { archived?: boolean | null; email?: string | null; familyName?: string | null; givenName?: string | null; id?: string | null; limit?: number | null; number?: string | null; skip?: number | null; userId?: string | null; userType?: UserTypeEnum | null; username?: string | null }): Promise<UserList[]> {
    const queryParams: Record<string, unknown> = {
      archived,
      email,
      family_name: familyName,
      given_name: givenName,
      id,
      limit,
      number,
      skip,
      user_id: userId,
      user_type: userType,
      username,
    };
    return this.client.get<UserList[]>(this.basePath, { params: queryParams });
  }

  /**
   * Create Users
   */
  async createUsersUsersPost({ userId, body }: { userId?: string | null; body: UserCreate }): Promise<UserGet> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.post<UserGet>(this.basePath, body, { params: queryParams });
  }

  /**
   * Delete Users
   */
  async deleteUsersUsersIdDelete({ id, userId }: { id: string | string; userId?: string | null }): Promise<void> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.delete<void>(this.buildPath(id), { params: queryParams });
  }

  /**
   * Get Users
   */
  async getUsersUsersIdGet({ id, userId }: { id: string | string; userId?: string | null }): Promise<UserGet> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.get<UserGet>(this.buildPath(id), { params: queryParams });
  }

  /**
   * Update Users
   */
  async updateUsersUsersIdPatch({ id, userId, body }: { id: string | string; userId?: string | null; body: UserUpdate }): Promise<UserGet> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.patch<UserGet>(this.buildPath(id), body, { params: queryParams });
  }

  /**
   * Route Users
   */
  async routeUsersUsersIdArchivePatch({ id, userId }: { id: string | string; userId?: string | null }): Promise<void> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.patch<void>(this.buildPath(id, 'archive'), { params: queryParams });
  }
}
