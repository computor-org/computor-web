/**
 * Auto-generated client for MessagesClient.
 * Endpoint: /messages
 */

import type { MessageCreate, MessageGet, MessageList, MessageUpdate } from 'types/generated';
import { APIClient, apiClient } from 'api/client';
import { BaseEndpointClient } from './baseClient';

export class MessagesClient extends BaseEndpointClient {
  constructor(client: APIClient = apiClient) {
    super(client, '/messages');
  }

  /**
   * List Messages
   * List messages with read status.
   */
  async listMessagesMessagesGet({ authorId, courseContentId, courseGroupId, courseId, courseIdAllMessages, courseMemberId, id, limit, parentId, scope, skip, submissionGroupId, userId }: { authorId?: string | null; courseContentId?: string | null; courseGroupId?: string | null; courseId?: string | null; courseIdAllMessages?: boolean | null; courseMemberId?: string | null; id?: string | null; limit?: number | null; parentId?: string | null; scope?: 'user' | 'course_member' | 'submission_group' | 'course_group' | 'course_content' | 'course' | null; skip?: number | null; submissionGroupId?: string | null; userId?: string | null }): Promise<MessageList[]> {
    const queryParams: Record<string, unknown> = {
      author_id: authorId,
      course_content_id: courseContentId,
      course_group_id: courseGroupId,
      course_id: courseId,
      course_id_all_messages: courseIdAllMessages,
      course_member_id: courseMemberId,
      id,
      limit,
      parent_id: parentId,
      scope,
      skip,
      submission_group_id: submissionGroupId,
      user_id: userId,
    };
    return this.client.get<MessageList[]>(this.basePath, { params: queryParams });
  }

  /**
   * Create Message
   * Create a new message with enforced author and defaults.
   */
  async createMessageMessagesPost({ userId, body }: { userId?: string | null; body: MessageCreate }): Promise<MessageGet> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.post<MessageGet>(this.basePath, body, { params: queryParams });
  }

  /**
   * Delete Message
   * Delete a message.
   */
  async deleteMessageMessagesIdDelete({ id, userId }: { id: string | string; userId?: string | null }): Promise<void> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.delete<void>(this.buildPath(id), { params: queryParams });
  }

  /**
   * Get Message
   * Get a message with read status.
   */
  async getMessageMessagesIdGet({ id, userId }: { id: string | string; userId?: string | null }): Promise<MessageGet> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.get<MessageGet>(this.buildPath(id), { params: queryParams });
  }

  /**
   * Update Message
   * Update a message.
   */
  async updateMessageMessagesIdPatch({ id, userId, body }: { id: string | string; userId?: string | null; body: MessageUpdate }): Promise<MessageGet> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.patch<MessageGet>(this.buildPath(id), body, { params: queryParams });
  }

  /**
   * Mark Message Unread
   * Mark a message as unread.
   */
  async markMessageUnreadMessagesIdReadsDelete({ id, userId }: { id: string | string; userId?: string | null }): Promise<void> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.delete<void>(this.buildPath(id, 'reads'), { params: queryParams });
  }

  /**
   * Mark Message Read
   * Mark a message as read.
   */
  async markMessageReadMessagesIdReadsPost({ id, userId }: { id: string | string; userId?: string | null }): Promise<void> {
    const queryParams: Record<string, unknown> = {
      user_id: userId,
    };
    return this.client.post<void>(this.buildPath(id, 'reads'), { params: queryParams });
  }
}
