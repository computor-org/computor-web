/**
 * Auto-generated client for OrganizationsClient.
 * Endpoint: /organizations
 */

import type { OrganizationCreate, OrganizationGet, OrganizationList, OrganizationType, OrganizationUpdate, OrganizationUpdateTokenUpdate } from 'types/generated';
import { APIClient, apiClient } from 'api/client';
import { BaseEndpointClient } from './baseClient';

export class OrganizationsClient extends BaseEndpointClient {
  constructor(client: APIClient = apiClient) {
    super(client, '/organizations');
  }

  /**
   * List Organizations
   */
  async listOrganizationsOrganizationsGet({ country, description, email, faxNumber, id, limit, locality, number, organizationType, path, postalCode, region, skip, streetAddress, telephone, title, url, userId }: { country?: string | null; description?: string | null; email?: string | null; faxNumber?: string | null; id?: string | null; limit?: number | null; locality?: string | null; number?: string | null; organizationType?: OrganizationType | null; path?: string | null; postalCode?: string | null; region?: string | null; skip?: number | null; streetAddress?: string | null; telephone?: string | null; title?: string | null; url?: string | null; userId?: string | null }): Promise<OrganizationList[]> {
    const queryParams: Record<string, unknown> = {
      country,
      description,
      email,
      fax_number: faxNumber,
      id,
      limit,
      locality,
      number,
      organization_type: organizationType,
      path,
      postal_code: postalCode,
      region,
      skip,
      street_address: streetAddress,
      telephone,
      title,
      url,
      user_id: userId,
    };
    return this.client.get<OrganizationList[]>(this.basePath, { params: queryParams });
  }

  /**
   * Create Organizations
   */
  async createOrganizationsOrganizationsPost({ userId, body }: { userId?: string | null; body: OrganizationCreate }): Promise<OrganizationGet> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.post<OrganizationGet>(this.basePath, body, { params: queryParams });
  }

  /**
   * Delete Organizations
   */
  async deleteOrganizationsOrganizationsIdDelete({ id, userId }: { id: string | string; userId?: string | null }): Promise<void> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.delete<void>(this.buildPath(id), { params: queryParams });
  }

  /**
   * Get Organizations
   */
  async getOrganizationsOrganizationsIdGet({ id, userId }: { id: string | string; userId?: string | null }): Promise<OrganizationGet> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.get<OrganizationGet>(this.buildPath(id), { params: queryParams });
  }

  /**
   * Update Organizations
   */
  async updateOrganizationsOrganizationsIdPatch({ id, userId, body }: { id: string | string; userId?: string | null; body: OrganizationUpdate }): Promise<OrganizationGet> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.patch<OrganizationGet>(this.buildPath(id), body, { params: queryParams });
  }

  /**
   * Route Organizations
   */
  async routeOrganizationsOrganizationsIdArchivePatch({ id, userId }: { id: string | string; userId?: string | null }): Promise<void> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.patch<void>(this.buildPath(id, 'archive'), { params: queryParams });
  }

  /**
   * Patch Organizations Token
   * Update organization provider token.
   */
  async patchOrganizationsTokenOrganizationsOrganizationIdTokenPatch({ organizationId, type, userId, body }: { organizationId: string | string; type: string; userId?: string | null; body: OrganizationUpdateTokenUpdate }): Promise<void> {
    const queryParams: Record<string, unknown> = {
      type,
      user_id: userId,
    };
    return this.client.patch<void>(this.buildPath(organizationId, 'token'), body, { params: queryParams });
  }
}
