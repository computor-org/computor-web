/**
 * Auto-generated client for AuthenticationClient.
 * Endpoint: /auth
 */

import type { LocalLoginRequest, LocalLoginResponse, LocalTokenRefreshRequest, LocalTokenRefreshResponse, LogoutResponse, ProviderInfo, TokenRefreshRequest, TokenRefreshResponse, UserRegistrationRequest, UserRegistrationResponse } from 'types/generated';
import { APIClient, apiClient } from 'api/client';
import { BaseEndpointClient } from './baseClient';

export class AuthenticationClient extends BaseEndpointClient {
  constructor(client: APIClient = apiClient) {
    super(client, '/auth');
  }

  /**
   * List All Plugins
   * List all available plugins (admin only).
   * Shows both enabled and disabled plugins with full metadata.
   */
  async listAllPluginsAuthAdminPluginsGet(): Promise<Record<string, unknown> & Record<string, unknown>> {
    return this.client.get<Record<string, unknown> & Record<string, unknown>>(this.buildPath('admin', 'plugins'));
  }

  /**
   * Reload Plugins
   * Reload all plugins (admin only).
   */
  async reloadPluginsAuthAdminPluginsReloadPost(): Promise<Record<string, unknown> & Record<string, unknown>> {
    return this.client.post<Record<string, unknown> & Record<string, unknown>>(this.buildPath('admin', 'plugins', 'reload'));
  }

  /**
   * Disable Plugin
   * Disable a plugin (admin only).
   */
  async disablePluginAuthAdminPluginsPluginNameDisablePost({ pluginName }: { pluginName: string }): Promise<Record<string, unknown> & Record<string, unknown>> {
    return this.client.post<Record<string, unknown> & Record<string, unknown>>(this.buildPath('admin', 'plugins', pluginName, 'disable'));
  }

  /**
   * Enable Plugin
   * Enable a plugin (admin only).
   */
  async enablePluginAuthAdminPluginsPluginNameEnablePost({ pluginName }: { pluginName: string }): Promise<Record<string, unknown> & Record<string, unknown>> {
    return this.client.post<Record<string, unknown> & Record<string, unknown>>(this.buildPath('admin', 'plugins', pluginName, 'enable'));
  }

  /**
   * Login With Credentials
   * Login with username and password to obtain Bearer tokens.
   * This endpoint authenticates users with local credentials and returns
   * access and refresh tokens that can be used for subsequent API requests.
   * The access token should be included in the Authorization header as:
   * `Authorization: Bearer <access_token>`
   * Rate Limits (to prevent brute-force attacks):
   * - 100 attempts per minute per IP address (allows multiple users on same network)
   * - 5 attempts per minute per username (prevents account takeover)
   * Returns 429 Too Many Requests if either limit is exceeded.
   */
  async loginWithCredentialsAuthLoginPost({ userId, body }: { userId?: string | null; body: LocalLoginRequest }): Promise<LocalLoginResponse> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.post<LocalLoginResponse>(this.buildPath('login'), body, { params: queryParams });
  }

  /**
   * Logout
   * Logout from current session.
   * This endpoint works with any authentication type:
   * - Local authentication (Bearer tokens)
   * - SSO authentication (provider tokens)
   * The Bearer token from the Authorization header will be invalidated.
   */
  async logoutAuthLogoutPost({ userId }: { userId?: string | null }): Promise<LogoutResponse> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.post<LogoutResponse>(this.buildPath('logout'), { params: queryParams });
  }

  /**
   * List Providers
   * List available authentication providers.
   * Returns all enabled authentication providers with their metadata.
   */
  async listProvidersAuthProvidersGet(): Promise<ProviderInfo[]> {
    return this.client.get<ProviderInfo[]>(this.buildPath('providers'));
  }

  /**
   * Refresh Token
   * Refresh SSO access token using refresh token.
   * This endpoint allows users to refresh their session token using
   * the refresh token obtained during initial SSO authentication.
   * Requires authentication to ensure only the token owner can refresh it.
   */
  async refreshTokenAuthRefreshPost({ userId, body }: { userId?: string | null; body: TokenRefreshRequest }): Promise<TokenRefreshResponse> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.post<TokenRefreshResponse>(this.buildPath('refresh'), body, { params: queryParams });
  }

  /**
   * Refresh Local Token
   * Refresh local access token using refresh token.
   * This endpoint allows users to refresh their session token for local
   * (username/password) authentication using the refresh token obtained
   * during initial login.
   * Authentication is not required for this endpoint since the access token
   * may be expired. The refresh token itself is validated to ensure security.
   */
  async refreshLocalTokenAuthRefreshLocalPost({ userId, body }: { userId?: string | null; body: LocalTokenRefreshRequest }): Promise<LocalTokenRefreshResponse> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.post<LocalTokenRefreshResponse>(this.buildPath('refresh', 'local'), body, { params: queryParams });
  }

  /**
   * Register User
   * Register a new user with SSO provider.
   * Creates user in both the authentication provider and local database.
   */
  async registerUserAuthRegisterPost({ userId, body }: { userId?: string | null; body: UserRegistrationRequest }): Promise<UserRegistrationResponse> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.post<UserRegistrationResponse>(this.buildPath('register'), body, { params: queryParams });
  }

  /**
   * Sso Success
   * Default success page after SSO authentication.
   */
  async ssoSuccessAuthSuccessGet(): Promise<void> {
    return this.client.get<void>(this.buildPath('success'));
  }

  /**
   * Handle Callback
   * Handle OAuth callback from provider.
   * Exchanges the authorization code for tokens and creates/updates user account.
   */
  async handleCallbackAuthProviderCallbackGet({ provider, code, state, userId }: { provider: string; code: string; state?: string | null; userId?: string | null }): Promise<void> {
    const queryParams: Record<string, unknown> = {
      code,
      state,
      user_id: userId,
    };
    return this.client.get<void>(this.buildPath(provider, 'callback'), { params: queryParams });
  }

  /**
   * Initiate Login
   * Initiate SSO login for a specific provider.
   * Redirects the user to the provider's login page.
   */
  async initiateLoginAuthProviderLoginGet({ provider, redirectUri }: { provider: string; redirectUri?: string | null }): Promise<void> {
    const queryParams: Record<string, unknown> = {
      redirect_uri: redirectUri,
    };
    return this.client.get<void>(this.buildPath(provider, 'login'), { params: queryParams });
  }
}
