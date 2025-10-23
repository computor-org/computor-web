/**
 * Auto-generated validation classes for Users models
 * DO NOT EDIT MANUALLY
 */

import type { AccountCreate, AccountGet, AccountList, AccountQuery, AccountUpdate, CourseMemberProviderAccountUpdate, UserCreate, UserGet, UserGroupCreate, UserGroupGet, UserGroupList, UserGroupQuery, UserGroupUpdate, UserList, UserPassword, UserQuery, UserRegistrationRequest, UserRegistrationResponse, UserRoleCreate, UserRoleGet, UserRoleList, UserRoleQuery, UserRoleUpdate, UserUpdate } from '../types/users';
import { UserTypeEnum } from '../types/users';
import { BaseValidator, ValidationError } from './BaseValidator';

export function validateUserTypeEnum(value: any): UserTypeEnum {
  const validValues = ['user', 'token'];
  if (!validValues.includes(value)) {
    throw new ValidationError('UserTypeEnum', `Invalid value: ${value}. Expected one of: ${validValues.join(', ')}`);
  }
  return value as UserTypeEnum;
}

/**
 * Request payload to set or update a provider account for a course member.
 */
export class CourseMemberProviderAccountUpdateValidator extends BaseValidator<CourseMemberProviderAccountUpdate> {
  private static _schema: any = null;

  /**
   * Get JSON Schema for this model
   * Useful for form generation, validation, and documentation
   */
  static getSchema(): any {
    if (!this._schema) {
      this._schema = JSON.parse(`{
  "description": "Request payload to set or update a provider account for a course member.",
  "properties": {
    "provider_account_id": {
      "description": "Account identifier on the external provider (e.g., GitLab username)",
      "maxLength": 255,
      "minLength": 1,
      "title": "Provider Account Id",
      "type": "string"
    },
    "provider_access_token": {
      "anyOf": [
        {
          "maxLength": 4096,
          "minLength": 1,
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Personal access token or credential to verify provider ownership",
      "title": "Provider Access Token"
    }
  },
  "required": [
    "provider_account_id"
  ],
  "title": "CourseMemberProviderAccountUpdate",
  "type": "object",
  "x-model-name": "CourseMemberProviderAccountUpdate"
}`);
    }
    return this._schema;
  }

  /**
   * Get schema for a specific field
   */
  static getFieldSchema(fieldName: string): any {
    return this.getSchema().properties?.[fieldName];
  }

  /**
   * Check if a field is required
   */
  static isFieldRequired(fieldName: string): boolean {
    return this.getSchema().required?.includes(fieldName) ?? false;
  }

  /**
   * Get all required field names
   */
  static getRequiredFields(): string[] {
    return this.getSchema().required ?? [];
  }

  /**
   * Get all field names
   */
  static getFields(): string[] {
    return Object.keys(this.getSchema().properties ?? {});
  }

  validate(data: any): CourseMemberProviderAccountUpdate {
    const errors: string[] = [];

    if (typeof data !== 'object' || data === null) {
      throw new ValidationError('CourseMemberProviderAccountUpdate', 'Expected an object');
    }

    // Required field: provider_account_id
    if (!('provider_account_id' in data)) {
      errors.push('Missing required field: provider_account_id');
    } else {
      if (typeof data.provider_account_id !== 'string') {
        errors.push('Field provider_account_id must be a string');
      }
    }

    // Optional field: provider_access_token
    if ('provider_access_token' in data && data.provider_access_token !== undefined && data.provider_access_token !== null) {
      // Union type - skipping detailed validation
    }

    if (errors.length > 0) {
      throw new ValidationError('CourseMemberProviderAccountUpdate', errors.join('; '));
    }

    return data as CourseMemberProviderAccountUpdate;
  }

  safeValidate(data: any): { success: true; data: CourseMemberProviderAccountUpdate } | { success: false; error: ValidationError } {
    try {
      const validData = this.validate(data);
      return { success: true, data: validData };
    } catch (error) {
      if (error instanceof ValidationError) {
        return { success: false, error };
      }
      return { success: false, error: new ValidationError('CourseMemberProviderAccountUpdate', String(error)) };
    }
  }
}

/**
 * User registration request.
 */
export class UserRegistrationRequestValidator extends BaseValidator<UserRegistrationRequest> {
  private static _schema: any = null;

  /**
   * Get JSON Schema for this model
   * Useful for form generation, validation, and documentation
   */
  static getSchema(): any {
    if (!this._schema) {
      this._schema = JSON.parse(`{
  "description": "User registration request.",
  "properties": {
    "username": {
      "description": "Username",
      "maxLength": 50,
      "minLength": 3,
      "title": "Username",
      "type": "string"
    },
    "email": {
      "description": "Email address",
      "title": "Email",
      "type": "string"
    },
    "password": {
      "description": "Password",
      "minLength": 8,
      "title": "Password",
      "type": "string"
    },
    "given_name": {
      "description": "First name",
      "minLength": 1,
      "title": "Given Name",
      "type": "string"
    },
    "family_name": {
      "description": "Last name",
      "minLength": 1,
      "title": "Family Name",
      "type": "string"
    },
    "provider": {
      "default": "keycloak",
      "description": "Authentication provider to register with",
      "title": "Provider",
      "type": "string"
    },
    "send_verification_email": {
      "default": true,
      "description": "Send email verification",
      "title": "Send Verification Email",
      "type": "boolean"
    }
  },
  "required": [
    "username",
    "email",
    "password",
    "given_name",
    "family_name"
  ],
  "title": "UserRegistrationRequest",
  "type": "object",
  "x-model-name": "UserRegistrationRequest"
}`);
    }
    return this._schema;
  }

  /**
   * Get schema for a specific field
   */
  static getFieldSchema(fieldName: string): any {
    return this.getSchema().properties?.[fieldName];
  }

  /**
   * Check if a field is required
   */
  static isFieldRequired(fieldName: string): boolean {
    return this.getSchema().required?.includes(fieldName) ?? false;
  }

  /**
   * Get all required field names
   */
  static getRequiredFields(): string[] {
    return this.getSchema().required ?? [];
  }

  /**
   * Get all field names
   */
  static getFields(): string[] {
    return Object.keys(this.getSchema().properties ?? {});
  }

  validate(data: any): UserRegistrationRequest {
    const errors: string[] = [];

    if (typeof data !== 'object' || data === null) {
      throw new ValidationError('UserRegistrationRequest', 'Expected an object');
    }

    // Required field: username
    if (!('username' in data)) {
      errors.push('Missing required field: username');
    } else {
      if (typeof data.username !== 'string') {
        errors.push('Field username must be a string');
      }
    }

    // Required field: email
    if (!('email' in data)) {
      errors.push('Missing required field: email');
    } else {
      if (typeof data.email !== 'string') {
        errors.push('Field email must be a string');
      }
    }

    // Required field: password
    if (!('password' in data)) {
      errors.push('Missing required field: password');
    } else {
      if (typeof data.password !== 'string') {
        errors.push('Field password must be a string');
      }
    }

    // Required field: given_name
    if (!('given_name' in data)) {
      errors.push('Missing required field: given_name');
    } else {
      if (typeof data.given_name !== 'string') {
        errors.push('Field given_name must be a string');
      }
    }

    // Required field: family_name
    if (!('family_name' in data)) {
      errors.push('Missing required field: family_name');
    } else {
      if (typeof data.family_name !== 'string') {
        errors.push('Field family_name must be a string');
      }
    }

    // Optional field: provider
    if ('provider' in data && data.provider !== undefined && data.provider !== null) {
      if (typeof data.provider !== 'string') {
        errors.push('Field provider must be a string');
      }
    }

    // Optional field: send_verification_email
    if ('send_verification_email' in data && data.send_verification_email !== undefined && data.send_verification_email !== null) {
      if (typeof data.send_verification_email !== 'boolean') {
        errors.push('Field send_verification_email must be a boolean');
      }
    }

    if (errors.length > 0) {
      throw new ValidationError('UserRegistrationRequest', errors.join('; '));
    }

    return data as UserRegistrationRequest;
  }

  safeValidate(data: any): { success: true; data: UserRegistrationRequest } | { success: false; error: ValidationError } {
    try {
      const validData = this.validate(data);
      return { success: true, data: validData };
    } catch (error) {
      if (error instanceof ValidationError) {
        return { success: false, error };
      }
      return { success: false, error: new ValidationError('UserRegistrationRequest', String(error)) };
    }
  }
}

/**
 * Response after successful user registration.
 */
export class UserRegistrationResponseValidator extends BaseValidator<UserRegistrationResponse> {
  private static _schema: any = null;

  /**
   * Get JSON Schema for this model
   * Useful for form generation, validation, and documentation
   */
  static getSchema(): any {
    if (!this._schema) {
      this._schema = JSON.parse(`{
  "description": "Response after successful user registration.",
  "properties": {
    "user_id": {
      "description": "User ID in Computor",
      "title": "User Id",
      "type": "string"
    },
    "provider_user_id": {
      "description": "User ID in authentication provider",
      "title": "Provider User Id",
      "type": "string"
    },
    "username": {
      "description": "Username",
      "title": "Username",
      "type": "string"
    },
    "email": {
      "description": "Email address",
      "title": "Email",
      "type": "string"
    },
    "message": {
      "description": "Success message",
      "title": "Message",
      "type": "string"
    }
  },
  "required": [
    "user_id",
    "provider_user_id",
    "username",
    "email",
    "message"
  ],
  "title": "UserRegistrationResponse",
  "type": "object",
  "x-model-name": "UserRegistrationResponse"
}`);
    }
    return this._schema;
  }

  /**
   * Get schema for a specific field
   */
  static getFieldSchema(fieldName: string): any {
    return this.getSchema().properties?.[fieldName];
  }

  /**
   * Check if a field is required
   */
  static isFieldRequired(fieldName: string): boolean {
    return this.getSchema().required?.includes(fieldName) ?? false;
  }

  /**
   * Get all required field names
   */
  static getRequiredFields(): string[] {
    return this.getSchema().required ?? [];
  }

  /**
   * Get all field names
   */
  static getFields(): string[] {
    return Object.keys(this.getSchema().properties ?? {});
  }

  validate(data: any): UserRegistrationResponse {
    const errors: string[] = [];

    if (typeof data !== 'object' || data === null) {
      throw new ValidationError('UserRegistrationResponse', 'Expected an object');
    }

    // Required field: user_id
    if (!('user_id' in data)) {
      errors.push('Missing required field: user_id');
    } else {
      if (typeof data.user_id !== 'string') {
        errors.push('Field user_id must be a string');
      }
    }

    // Required field: provider_user_id
    if (!('provider_user_id' in data)) {
      errors.push('Missing required field: provider_user_id');
    } else {
      if (typeof data.provider_user_id !== 'string') {
        errors.push('Field provider_user_id must be a string');
      }
    }

    // Required field: username
    if (!('username' in data)) {
      errors.push('Missing required field: username');
    } else {
      if (typeof data.username !== 'string') {
        errors.push('Field username must be a string');
      }
    }

    // Required field: email
    if (!('email' in data)) {
      errors.push('Missing required field: email');
    } else {
      if (typeof data.email !== 'string') {
        errors.push('Field email must be a string');
      }
    }

    // Required field: message
    if (!('message' in data)) {
      errors.push('Missing required field: message');
    } else {
      if (typeof data.message !== 'string') {
        errors.push('Field message must be a string');
      }
    }

    if (errors.length > 0) {
      throw new ValidationError('UserRegistrationResponse', errors.join('; '));
    }

    return data as UserRegistrationResponse;
  }

  safeValidate(data: any): { success: true; data: UserRegistrationResponse } | { success: false; error: ValidationError } {
    try {
      const validData = this.validate(data);
      return { success: true, data: validData };
    } catch (error) {
      if (error instanceof ValidationError) {
        return { success: false, error };
      }
      return { success: false, error: new ValidationError('UserRegistrationResponse', String(error)) };
    }
  }
}

/**
 * Validator for AccountCreate
 */
export class AccountCreateValidator extends BaseValidator<AccountCreate> {
  private static _schema: any = null;

  /**
   * Get JSON Schema for this model
   * Useful for form generation, validation, and documentation
   */
  static getSchema(): any {
    if (!this._schema) {
      this._schema = JSON.parse(`{
  "properties": {
    "provider": {
      "description": "Authentication provider name",
      "maxLength": 255,
      "minLength": 1,
      "title": "Provider",
      "type": "string"
    },
    "type": {
      "description": "Type of authentication account",
      "title": "Type",
      "type": "string"
    },
    "provider_account_id": {
      "description": "Account ID from the provider",
      "maxLength": 255,
      "minLength": 1,
      "title": "Provider Account Id",
      "type": "string"
    },
    "user_id": {
      "description": "Associated user ID",
      "title": "User Id",
      "type": "string"
    },
    "properties": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Provider-specific properties",
      "title": "Properties"
    }
  },
  "required": [
    "provider",
    "type",
    "provider_account_id",
    "user_id"
  ],
  "title": "AccountCreate",
  "type": "object",
  "x-model-name": "AccountCreate"
}`);
    }
    return this._schema;
  }

  /**
   * Get schema for a specific field
   */
  static getFieldSchema(fieldName: string): any {
    return this.getSchema().properties?.[fieldName];
  }

  /**
   * Check if a field is required
   */
  static isFieldRequired(fieldName: string): boolean {
    return this.getSchema().required?.includes(fieldName) ?? false;
  }

  /**
   * Get all required field names
   */
  static getRequiredFields(): string[] {
    return this.getSchema().required ?? [];
  }

  /**
   * Get all field names
   */
  static getFields(): string[] {
    return Object.keys(this.getSchema().properties ?? {});
  }

  validate(data: any): AccountCreate {
    const errors: string[] = [];

    if (typeof data !== 'object' || data === null) {
      throw new ValidationError('AccountCreate', 'Expected an object');
    }

    // Required field: provider
    if (!('provider' in data)) {
      errors.push('Missing required field: provider');
    } else {
      if (typeof data.provider !== 'string') {
        errors.push('Field provider must be a string');
      }
    }

    // Required field: type
    if (!('type' in data)) {
      errors.push('Missing required field: type');
    } else {
      if (typeof data.type !== 'string') {
        errors.push('Field type must be a string');
      }
    }

    // Required field: provider_account_id
    if (!('provider_account_id' in data)) {
      errors.push('Missing required field: provider_account_id');
    } else {
      if (typeof data.provider_account_id !== 'string') {
        errors.push('Field provider_account_id must be a string');
      }
    }

    // Required field: user_id
    if (!('user_id' in data)) {
      errors.push('Missing required field: user_id');
    } else {
      if (typeof data.user_id !== 'string') {
        errors.push('Field user_id must be a string');
      }
    }

    // Optional field: properties
    if ('properties' in data && data.properties !== undefined && data.properties !== null) {
      // Union type - skipping detailed validation
    }

    if (errors.length > 0) {
      throw new ValidationError('AccountCreate', errors.join('; '));
    }

    return data as AccountCreate;
  }

  safeValidate(data: any): { success: true; data: AccountCreate } | { success: false; error: ValidationError } {
    try {
      const validData = this.validate(data);
      return { success: true, data: validData };
    } catch (error) {
      if (error instanceof ValidationError) {
        return { success: false, error };
      }
      return { success: false, error: new ValidationError('AccountCreate', String(error)) };
    }
  }
}

/**
 * Validator for AccountGet
 */
export class AccountGetValidator extends BaseValidator<AccountGet> {
  private static _schema: any = null;

  /**
   * Get JSON Schema for this model
   * Useful for form generation, validation, and documentation
   */
  static getSchema(): any {
    if (!this._schema) {
      this._schema = JSON.parse(`{
  "properties": {
    "created_at": {
      "anyOf": [
        {
          "format": "date-time",
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Creation timestamp",
      "title": "Created At"
    },
    "updated_at": {
      "anyOf": [
        {
          "format": "date-time",
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Update timestamp",
      "title": "Updated At"
    },
    "created_by": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Created By"
    },
    "updated_by": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Updated By"
    },
    "id": {
      "description": "Account unique identifier",
      "title": "Id",
      "type": "string"
    },
    "provider": {
      "description": "Authentication provider name",
      "title": "Provider",
      "type": "string"
    },
    "type": {
      "description": "Type of authentication account",
      "title": "Type",
      "type": "string"
    },
    "provider_account_id": {
      "description": "Account ID from the provider",
      "title": "Provider Account Id",
      "type": "string"
    },
    "user_id": {
      "description": "Associated user ID",
      "title": "User Id",
      "type": "string"
    },
    "properties": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Provider-specific properties",
      "title": "Properties"
    }
  },
  "required": [
    "id",
    "provider",
    "type",
    "provider_account_id",
    "user_id"
  ],
  "title": "AccountGet",
  "type": "object",
  "x-model-name": "AccountGet"
}`);
    }
    return this._schema;
  }

  /**
   * Get schema for a specific field
   */
  static getFieldSchema(fieldName: string): any {
    return this.getSchema().properties?.[fieldName];
  }

  /**
   * Check if a field is required
   */
  static isFieldRequired(fieldName: string): boolean {
    return this.getSchema().required?.includes(fieldName) ?? false;
  }

  /**
   * Get all required field names
   */
  static getRequiredFields(): string[] {
    return this.getSchema().required ?? [];
  }

  /**
   * Get all field names
   */
  static getFields(): string[] {
    return Object.keys(this.getSchema().properties ?? {});
  }

  validate(data: any): AccountGet {
    const errors: string[] = [];

    if (typeof data !== 'object' || data === null) {
      throw new ValidationError('AccountGet', 'Expected an object');
    }

    // Optional field: created_at
    if ('created_at' in data && data.created_at !== undefined && data.created_at !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: updated_at
    if ('updated_at' in data && data.updated_at !== undefined && data.updated_at !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: created_by
    if ('created_by' in data && data.created_by !== undefined && data.created_by !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: updated_by
    if ('updated_by' in data && data.updated_by !== undefined && data.updated_by !== null) {
      // Union type - skipping detailed validation
    }

    // Required field: id
    if (!('id' in data)) {
      errors.push('Missing required field: id');
    } else {
      if (typeof data.id !== 'string') {
        errors.push('Field id must be a string');
      }
    }

    // Required field: provider
    if (!('provider' in data)) {
      errors.push('Missing required field: provider');
    } else {
      if (typeof data.provider !== 'string') {
        errors.push('Field provider must be a string');
      }
    }

    // Required field: type
    if (!('type' in data)) {
      errors.push('Missing required field: type');
    } else {
      if (typeof data.type !== 'string') {
        errors.push('Field type must be a string');
      }
    }

    // Required field: provider_account_id
    if (!('provider_account_id' in data)) {
      errors.push('Missing required field: provider_account_id');
    } else {
      if (typeof data.provider_account_id !== 'string') {
        errors.push('Field provider_account_id must be a string');
      }
    }

    // Required field: user_id
    if (!('user_id' in data)) {
      errors.push('Missing required field: user_id');
    } else {
      if (typeof data.user_id !== 'string') {
        errors.push('Field user_id must be a string');
      }
    }

    // Optional field: properties
    if ('properties' in data && data.properties !== undefined && data.properties !== null) {
      // Union type - skipping detailed validation
    }

    if (errors.length > 0) {
      throw new ValidationError('AccountGet', errors.join('; '));
    }

    return data as AccountGet;
  }

  safeValidate(data: any): { success: true; data: AccountGet } | { success: false; error: ValidationError } {
    try {
      const validData = this.validate(data);
      return { success: true, data: validData };
    } catch (error) {
      if (error instanceof ValidationError) {
        return { success: false, error };
      }
      return { success: false, error: new ValidationError('AccountGet', String(error)) };
    }
  }
}

/**
 * Validator for AccountList
 */
export class AccountListValidator extends BaseValidator<AccountList> {
  private static _schema: any = null;

  /**
   * Get JSON Schema for this model
   * Useful for form generation, validation, and documentation
   */
  static getSchema(): any {
    if (!this._schema) {
      this._schema = JSON.parse(`{
  "properties": {
    "created_at": {
      "anyOf": [
        {
          "format": "date-time",
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Creation timestamp",
      "title": "Created At"
    },
    "updated_at": {
      "anyOf": [
        {
          "format": "date-time",
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Update timestamp",
      "title": "Updated At"
    },
    "id": {
      "description": "Account unique identifier",
      "title": "Id",
      "type": "string"
    },
    "provider": {
      "description": "Authentication provider name",
      "title": "Provider",
      "type": "string"
    },
    "type": {
      "description": "Type of authentication account",
      "title": "Type",
      "type": "string"
    },
    "provider_account_id": {
      "description": "Account ID from the provider",
      "title": "Provider Account Id",
      "type": "string"
    },
    "user_id": {
      "description": "Associated user ID",
      "title": "User Id",
      "type": "string"
    }
  },
  "required": [
    "id",
    "provider",
    "type",
    "provider_account_id",
    "user_id"
  ],
  "title": "AccountList",
  "type": "object",
  "x-model-name": "AccountList"
}`);
    }
    return this._schema;
  }

  /**
   * Get schema for a specific field
   */
  static getFieldSchema(fieldName: string): any {
    return this.getSchema().properties?.[fieldName];
  }

  /**
   * Check if a field is required
   */
  static isFieldRequired(fieldName: string): boolean {
    return this.getSchema().required?.includes(fieldName) ?? false;
  }

  /**
   * Get all required field names
   */
  static getRequiredFields(): string[] {
    return this.getSchema().required ?? [];
  }

  /**
   * Get all field names
   */
  static getFields(): string[] {
    return Object.keys(this.getSchema().properties ?? {});
  }

  validate(data: any): AccountList {
    const errors: string[] = [];

    if (typeof data !== 'object' || data === null) {
      throw new ValidationError('AccountList', 'Expected an object');
    }

    // Optional field: created_at
    if ('created_at' in data && data.created_at !== undefined && data.created_at !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: updated_at
    if ('updated_at' in data && data.updated_at !== undefined && data.updated_at !== null) {
      // Union type - skipping detailed validation
    }

    // Required field: id
    if (!('id' in data)) {
      errors.push('Missing required field: id');
    } else {
      if (typeof data.id !== 'string') {
        errors.push('Field id must be a string');
      }
    }

    // Required field: provider
    if (!('provider' in data)) {
      errors.push('Missing required field: provider');
    } else {
      if (typeof data.provider !== 'string') {
        errors.push('Field provider must be a string');
      }
    }

    // Required field: type
    if (!('type' in data)) {
      errors.push('Missing required field: type');
    } else {
      if (typeof data.type !== 'string') {
        errors.push('Field type must be a string');
      }
    }

    // Required field: provider_account_id
    if (!('provider_account_id' in data)) {
      errors.push('Missing required field: provider_account_id');
    } else {
      if (typeof data.provider_account_id !== 'string') {
        errors.push('Field provider_account_id must be a string');
      }
    }

    // Required field: user_id
    if (!('user_id' in data)) {
      errors.push('Missing required field: user_id');
    } else {
      if (typeof data.user_id !== 'string') {
        errors.push('Field user_id must be a string');
      }
    }

    if (errors.length > 0) {
      throw new ValidationError('AccountList', errors.join('; '));
    }

    return data as AccountList;
  }

  safeValidate(data: any): { success: true; data: AccountList } | { success: false; error: ValidationError } {
    try {
      const validData = this.validate(data);
      return { success: true, data: validData };
    } catch (error) {
      if (error instanceof ValidationError) {
        return { success: false, error };
      }
      return { success: false, error: new ValidationError('AccountList', String(error)) };
    }
  }
}

/**
 * Validator for AccountUpdate
 */
export class AccountUpdateValidator extends BaseValidator<AccountUpdate> {
  private static _schema: any = null;

  /**
   * Get JSON Schema for this model
   * Useful for form generation, validation, and documentation
   */
  static getSchema(): any {
    if (!this._schema) {
      this._schema = JSON.parse(`{
  "properties": {
    "provider": {
      "anyOf": [
        {
          "maxLength": 255,
          "minLength": 1,
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Authentication provider name",
      "title": "Provider"
    },
    "type": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Type of authentication account",
      "title": "Type"
    },
    "provider_account_id": {
      "anyOf": [
        {
          "maxLength": 255,
          "minLength": 1,
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Account ID from the provider",
      "title": "Provider Account Id"
    },
    "properties": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Provider-specific properties",
      "title": "Properties"
    }
  },
  "title": "AccountUpdate",
  "type": "object",
  "x-model-name": "AccountUpdate"
}`);
    }
    return this._schema;
  }

  /**
   * Get schema for a specific field
   */
  static getFieldSchema(fieldName: string): any {
    return this.getSchema().properties?.[fieldName];
  }

  /**
   * Check if a field is required
   */
  static isFieldRequired(fieldName: string): boolean {
    return this.getSchema().required?.includes(fieldName) ?? false;
  }

  /**
   * Get all required field names
   */
  static getRequiredFields(): string[] {
    return this.getSchema().required ?? [];
  }

  /**
   * Get all field names
   */
  static getFields(): string[] {
    return Object.keys(this.getSchema().properties ?? {});
  }

  validate(data: any): AccountUpdate {
    const errors: string[] = [];

    if (typeof data !== 'object' || data === null) {
      throw new ValidationError('AccountUpdate', 'Expected an object');
    }

    // Optional field: provider
    if ('provider' in data && data.provider !== undefined && data.provider !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: type
    if ('type' in data && data.type !== undefined && data.type !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: provider_account_id
    if ('provider_account_id' in data && data.provider_account_id !== undefined && data.provider_account_id !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: properties
    if ('properties' in data && data.properties !== undefined && data.properties !== null) {
      // Union type - skipping detailed validation
    }

    if (errors.length > 0) {
      throw new ValidationError('AccountUpdate', errors.join('; '));
    }

    return data as AccountUpdate;
  }

  safeValidate(data: any): { success: true; data: AccountUpdate } | { success: false; error: ValidationError } {
    try {
      const validData = this.validate(data);
      return { success: true, data: validData };
    } catch (error) {
      if (error instanceof ValidationError) {
        return { success: false, error };
      }
      return { success: false, error: new ValidationError('AccountUpdate', String(error)) };
    }
  }
}

/**
 * Validator for AccountQuery
 */
export class AccountQueryValidator extends BaseValidator<AccountQuery> {
  private static _schema: any = null;

  /**
   * Get JSON Schema for this model
   * Useful for form generation, validation, and documentation
   */
  static getSchema(): any {
    if (!this._schema) {
      this._schema = JSON.parse(`{
  "properties": {
    "skip": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "null"
        }
      ],
      "default": 0,
      "title": "Skip"
    },
    "limit": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "null"
        }
      ],
      "default": 100,
      "title": "Limit"
    },
    "id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Id"
    },
    "provider": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Provider"
    },
    "type": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Type"
    },
    "provider_account_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Provider Account Id"
    },
    "user_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "User Id"
    }
  },
  "title": "AccountQuery",
  "type": "object",
  "x-model-name": "AccountQuery"
}`);
    }
    return this._schema;
  }

  /**
   * Get schema for a specific field
   */
  static getFieldSchema(fieldName: string): any {
    return this.getSchema().properties?.[fieldName];
  }

  /**
   * Check if a field is required
   */
  static isFieldRequired(fieldName: string): boolean {
    return this.getSchema().required?.includes(fieldName) ?? false;
  }

  /**
   * Get all required field names
   */
  static getRequiredFields(): string[] {
    return this.getSchema().required ?? [];
  }

  /**
   * Get all field names
   */
  static getFields(): string[] {
    return Object.keys(this.getSchema().properties ?? {});
  }

  validate(data: any): AccountQuery {
    const errors: string[] = [];

    if (typeof data !== 'object' || data === null) {
      throw new ValidationError('AccountQuery', 'Expected an object');
    }

    // Optional field: skip
    if ('skip' in data && data.skip !== undefined && data.skip !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: limit
    if ('limit' in data && data.limit !== undefined && data.limit !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: id
    if ('id' in data && data.id !== undefined && data.id !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: provider
    if ('provider' in data && data.provider !== undefined && data.provider !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: type
    if ('type' in data && data.type !== undefined && data.type !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: provider_account_id
    if ('provider_account_id' in data && data.provider_account_id !== undefined && data.provider_account_id !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: user_id
    if ('user_id' in data && data.user_id !== undefined && data.user_id !== null) {
      // Union type - skipping detailed validation
    }

    if (errors.length > 0) {
      throw new ValidationError('AccountQuery', errors.join('; '));
    }

    return data as AccountQuery;
  }

  safeValidate(data: any): { success: true; data: AccountQuery } | { success: false; error: ValidationError } {
    try {
      const validData = this.validate(data);
      return { success: true, data: validData };
    } catch (error) {
      if (error instanceof ValidationError) {
        return { success: false, error };
      }
      return { success: false, error: new ValidationError('AccountQuery', String(error)) };
    }
  }
}

/**
 * Validator for UserGroupCreate
 */
export class UserGroupCreateValidator extends BaseValidator<UserGroupCreate> {
  private static _schema: any = null;

  /**
   * Get JSON Schema for this model
   * Useful for form generation, validation, and documentation
   */
  static getSchema(): any {
    if (!this._schema) {
      this._schema = JSON.parse(`{
  "properties": {
    "user_id": {
      "description": "User ID",
      "title": "User Id",
      "type": "string"
    },
    "group_id": {
      "description": "Group ID",
      "title": "Group Id",
      "type": "string"
    },
    "transient": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": false,
      "description": "Whether this is a transient membership",
      "title": "Transient"
    }
  },
  "required": [
    "user_id",
    "group_id"
  ],
  "title": "UserGroupCreate",
  "type": "object",
  "x-model-name": "UserGroupCreate"
}`);
    }
    return this._schema;
  }

  /**
   * Get schema for a specific field
   */
  static getFieldSchema(fieldName: string): any {
    return this.getSchema().properties?.[fieldName];
  }

  /**
   * Check if a field is required
   */
  static isFieldRequired(fieldName: string): boolean {
    return this.getSchema().required?.includes(fieldName) ?? false;
  }

  /**
   * Get all required field names
   */
  static getRequiredFields(): string[] {
    return this.getSchema().required ?? [];
  }

  /**
   * Get all field names
   */
  static getFields(): string[] {
    return Object.keys(this.getSchema().properties ?? {});
  }

  validate(data: any): UserGroupCreate {
    const errors: string[] = [];

    if (typeof data !== 'object' || data === null) {
      throw new ValidationError('UserGroupCreate', 'Expected an object');
    }

    // Required field: user_id
    if (!('user_id' in data)) {
      errors.push('Missing required field: user_id');
    } else {
      if (typeof data.user_id !== 'string') {
        errors.push('Field user_id must be a string');
      }
    }

    // Required field: group_id
    if (!('group_id' in data)) {
      errors.push('Missing required field: group_id');
    } else {
      if (typeof data.group_id !== 'string') {
        errors.push('Field group_id must be a string');
      }
    }

    // Optional field: transient
    if ('transient' in data && data.transient !== undefined && data.transient !== null) {
      // Union type - skipping detailed validation
    }

    if (errors.length > 0) {
      throw new ValidationError('UserGroupCreate', errors.join('; '));
    }

    return data as UserGroupCreate;
  }

  safeValidate(data: any): { success: true; data: UserGroupCreate } | { success: false; error: ValidationError } {
    try {
      const validData = this.validate(data);
      return { success: true, data: validData };
    } catch (error) {
      if (error instanceof ValidationError) {
        return { success: false, error };
      }
      return { success: false, error: new ValidationError('UserGroupCreate', String(error)) };
    }
  }
}

/**
 * Validator for UserGroupGet
 */
export class UserGroupGetValidator extends BaseValidator<UserGroupGet> {
  private static _schema: any = null;

  /**
   * Get JSON Schema for this model
   * Useful for form generation, validation, and documentation
   */
  static getSchema(): any {
    if (!this._schema) {
      this._schema = JSON.parse(`{
  "properties": {
    "created_at": {
      "anyOf": [
        {
          "format": "date-time",
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Creation timestamp",
      "title": "Created At"
    },
    "updated_at": {
      "anyOf": [
        {
          "format": "date-time",
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Update timestamp",
      "title": "Updated At"
    },
    "created_by": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Created By"
    },
    "updated_by": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Updated By"
    },
    "user_id": {
      "description": "User ID",
      "title": "User Id",
      "type": "string"
    },
    "group_id": {
      "description": "Group ID",
      "title": "Group Id",
      "type": "string"
    },
    "transient": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Whether this is transient membership",
      "title": "Transient"
    }
  },
  "required": [
    "user_id",
    "group_id"
  ],
  "title": "UserGroupGet",
  "type": "object",
  "x-model-name": "UserGroupGet"
}`);
    }
    return this._schema;
  }

  /**
   * Get schema for a specific field
   */
  static getFieldSchema(fieldName: string): any {
    return this.getSchema().properties?.[fieldName];
  }

  /**
   * Check if a field is required
   */
  static isFieldRequired(fieldName: string): boolean {
    return this.getSchema().required?.includes(fieldName) ?? false;
  }

  /**
   * Get all required field names
   */
  static getRequiredFields(): string[] {
    return this.getSchema().required ?? [];
  }

  /**
   * Get all field names
   */
  static getFields(): string[] {
    return Object.keys(this.getSchema().properties ?? {});
  }

  validate(data: any): UserGroupGet {
    const errors: string[] = [];

    if (typeof data !== 'object' || data === null) {
      throw new ValidationError('UserGroupGet', 'Expected an object');
    }

    // Optional field: created_at
    if ('created_at' in data && data.created_at !== undefined && data.created_at !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: updated_at
    if ('updated_at' in data && data.updated_at !== undefined && data.updated_at !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: created_by
    if ('created_by' in data && data.created_by !== undefined && data.created_by !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: updated_by
    if ('updated_by' in data && data.updated_by !== undefined && data.updated_by !== null) {
      // Union type - skipping detailed validation
    }

    // Required field: user_id
    if (!('user_id' in data)) {
      errors.push('Missing required field: user_id');
    } else {
      if (typeof data.user_id !== 'string') {
        errors.push('Field user_id must be a string');
      }
    }

    // Required field: group_id
    if (!('group_id' in data)) {
      errors.push('Missing required field: group_id');
    } else {
      if (typeof data.group_id !== 'string') {
        errors.push('Field group_id must be a string');
      }
    }

    // Optional field: transient
    if ('transient' in data && data.transient !== undefined && data.transient !== null) {
      // Union type - skipping detailed validation
    }

    if (errors.length > 0) {
      throw new ValidationError('UserGroupGet', errors.join('; '));
    }

    return data as UserGroupGet;
  }

  safeValidate(data: any): { success: true; data: UserGroupGet } | { success: false; error: ValidationError } {
    try {
      const validData = this.validate(data);
      return { success: true, data: validData };
    } catch (error) {
      if (error instanceof ValidationError) {
        return { success: false, error };
      }
      return { success: false, error: new ValidationError('UserGroupGet', String(error)) };
    }
  }
}

/**
 * Validator for UserGroupList
 */
export class UserGroupListValidator extends BaseValidator<UserGroupList> {
  private static _schema: any = null;

  /**
   * Get JSON Schema for this model
   * Useful for form generation, validation, and documentation
   */
  static getSchema(): any {
    if (!this._schema) {
      this._schema = JSON.parse(`{
  "properties": {
    "created_at": {
      "anyOf": [
        {
          "format": "date-time",
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Creation timestamp",
      "title": "Created At"
    },
    "updated_at": {
      "anyOf": [
        {
          "format": "date-time",
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Update timestamp",
      "title": "Updated At"
    },
    "user_id": {
      "description": "User ID",
      "title": "User Id",
      "type": "string"
    },
    "group_id": {
      "description": "Group ID",
      "title": "Group Id",
      "type": "string"
    },
    "transient": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Whether this is transient membership",
      "title": "Transient"
    }
  },
  "required": [
    "user_id",
    "group_id"
  ],
  "title": "UserGroupList",
  "type": "object",
  "x-model-name": "UserGroupList"
}`);
    }
    return this._schema;
  }

  /**
   * Get schema for a specific field
   */
  static getFieldSchema(fieldName: string): any {
    return this.getSchema().properties?.[fieldName];
  }

  /**
   * Check if a field is required
   */
  static isFieldRequired(fieldName: string): boolean {
    return this.getSchema().required?.includes(fieldName) ?? false;
  }

  /**
   * Get all required field names
   */
  static getRequiredFields(): string[] {
    return this.getSchema().required ?? [];
  }

  /**
   * Get all field names
   */
  static getFields(): string[] {
    return Object.keys(this.getSchema().properties ?? {});
  }

  validate(data: any): UserGroupList {
    const errors: string[] = [];

    if (typeof data !== 'object' || data === null) {
      throw new ValidationError('UserGroupList', 'Expected an object');
    }

    // Optional field: created_at
    if ('created_at' in data && data.created_at !== undefined && data.created_at !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: updated_at
    if ('updated_at' in data && data.updated_at !== undefined && data.updated_at !== null) {
      // Union type - skipping detailed validation
    }

    // Required field: user_id
    if (!('user_id' in data)) {
      errors.push('Missing required field: user_id');
    } else {
      if (typeof data.user_id !== 'string') {
        errors.push('Field user_id must be a string');
      }
    }

    // Required field: group_id
    if (!('group_id' in data)) {
      errors.push('Missing required field: group_id');
    } else {
      if (typeof data.group_id !== 'string') {
        errors.push('Field group_id must be a string');
      }
    }

    // Optional field: transient
    if ('transient' in data && data.transient !== undefined && data.transient !== null) {
      // Union type - skipping detailed validation
    }

    if (errors.length > 0) {
      throw new ValidationError('UserGroupList', errors.join('; '));
    }

    return data as UserGroupList;
  }

  safeValidate(data: any): { success: true; data: UserGroupList } | { success: false; error: ValidationError } {
    try {
      const validData = this.validate(data);
      return { success: true, data: validData };
    } catch (error) {
      if (error instanceof ValidationError) {
        return { success: false, error };
      }
      return { success: false, error: new ValidationError('UserGroupList', String(error)) };
    }
  }
}

/**
 * Validator for UserGroupUpdate
 */
export class UserGroupUpdateValidator extends BaseValidator<UserGroupUpdate> {
  private static _schema: any = null;

  /**
   * Get JSON Schema for this model
   * Useful for form generation, validation, and documentation
   */
  static getSchema(): any {
    if (!this._schema) {
      this._schema = JSON.parse(`{
  "properties": {
    "transient": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Whether this is transient membership",
      "title": "Transient"
    }
  },
  "title": "UserGroupUpdate",
  "type": "object",
  "x-model-name": "UserGroupUpdate"
}`);
    }
    return this._schema;
  }

  /**
   * Get schema for a specific field
   */
  static getFieldSchema(fieldName: string): any {
    return this.getSchema().properties?.[fieldName];
  }

  /**
   * Check if a field is required
   */
  static isFieldRequired(fieldName: string): boolean {
    return this.getSchema().required?.includes(fieldName) ?? false;
  }

  /**
   * Get all required field names
   */
  static getRequiredFields(): string[] {
    return this.getSchema().required ?? [];
  }

  /**
   * Get all field names
   */
  static getFields(): string[] {
    return Object.keys(this.getSchema().properties ?? {});
  }

  validate(data: any): UserGroupUpdate {
    const errors: string[] = [];

    if (typeof data !== 'object' || data === null) {
      throw new ValidationError('UserGroupUpdate', 'Expected an object');
    }

    // Optional field: transient
    if ('transient' in data && data.transient !== undefined && data.transient !== null) {
      // Union type - skipping detailed validation
    }

    if (errors.length > 0) {
      throw new ValidationError('UserGroupUpdate', errors.join('; '));
    }

    return data as UserGroupUpdate;
  }

  safeValidate(data: any): { success: true; data: UserGroupUpdate } | { success: false; error: ValidationError } {
    try {
      const validData = this.validate(data);
      return { success: true, data: validData };
    } catch (error) {
      if (error instanceof ValidationError) {
        return { success: false, error };
      }
      return { success: false, error: new ValidationError('UserGroupUpdate', String(error)) };
    }
  }
}

/**
 * Validator for UserGroupQuery
 */
export class UserGroupQueryValidator extends BaseValidator<UserGroupQuery> {
  private static _schema: any = null;

  /**
   * Get JSON Schema for this model
   * Useful for form generation, validation, and documentation
   */
  static getSchema(): any {
    if (!this._schema) {
      this._schema = JSON.parse(`{
  "properties": {
    "skip": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "null"
        }
      ],
      "default": 0,
      "title": "Skip"
    },
    "limit": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "null"
        }
      ],
      "default": 100,
      "title": "Limit"
    },
    "user_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Filter by user ID",
      "title": "User Id"
    },
    "group_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Filter by group ID",
      "title": "Group Id"
    },
    "transient": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Filter by transient status",
      "title": "Transient"
    }
  },
  "title": "UserGroupQuery",
  "type": "object",
  "x-model-name": "UserGroupQuery"
}`);
    }
    return this._schema;
  }

  /**
   * Get schema for a specific field
   */
  static getFieldSchema(fieldName: string): any {
    return this.getSchema().properties?.[fieldName];
  }

  /**
   * Check if a field is required
   */
  static isFieldRequired(fieldName: string): boolean {
    return this.getSchema().required?.includes(fieldName) ?? false;
  }

  /**
   * Get all required field names
   */
  static getRequiredFields(): string[] {
    return this.getSchema().required ?? [];
  }

  /**
   * Get all field names
   */
  static getFields(): string[] {
    return Object.keys(this.getSchema().properties ?? {});
  }

  validate(data: any): UserGroupQuery {
    const errors: string[] = [];

    if (typeof data !== 'object' || data === null) {
      throw new ValidationError('UserGroupQuery', 'Expected an object');
    }

    // Optional field: skip
    if ('skip' in data && data.skip !== undefined && data.skip !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: limit
    if ('limit' in data && data.limit !== undefined && data.limit !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: user_id
    if ('user_id' in data && data.user_id !== undefined && data.user_id !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: group_id
    if ('group_id' in data && data.group_id !== undefined && data.group_id !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: transient
    if ('transient' in data && data.transient !== undefined && data.transient !== null) {
      // Union type - skipping detailed validation
    }

    if (errors.length > 0) {
      throw new ValidationError('UserGroupQuery', errors.join('; '));
    }

    return data as UserGroupQuery;
  }

  safeValidate(data: any): { success: true; data: UserGroupQuery } | { success: false; error: ValidationError } {
    try {
      const validData = this.validate(data);
      return { success: true, data: validData };
    } catch (error) {
      if (error instanceof ValidationError) {
        return { success: false, error };
      }
      return { success: false, error: new ValidationError('UserGroupQuery', String(error)) };
    }
  }
}

/**
 * Validator for UserCreate
 */
export class UserCreateValidator extends BaseValidator<UserCreate> {
  private static _schema: any = null;

  /**
   * Get JSON Schema for this model
   * Useful for form generation, validation, and documentation
   */
  static getSchema(): any {
    if (!this._schema) {
      this._schema = JSON.parse(`{
  "$defs": {
    "UserTypeEnum": {
      "enum": [
        "user",
        "token"
      ],
      "title": "UserTypeEnum",
      "type": "string"
    }
  },
  "properties": {
    "id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "User ID (UUID will be generated if not provided)",
      "title": "Id"
    },
    "given_name": {
      "anyOf": [
        {
          "maxLength": 255,
          "minLength": 1,
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "User's given name",
      "title": "Given Name"
    },
    "family_name": {
      "anyOf": [
        {
          "maxLength": 255,
          "minLength": 1,
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "User's family name",
      "title": "Family Name"
    },
    "email": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "User's email address",
      "title": "Email"
    },
    "number": {
      "anyOf": [
        {
          "maxLength": 255,
          "minLength": 1,
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "User number/identifier",
      "title": "Number"
    },
    "user_type": {
      "anyOf": [
        {
          "$ref": "#/$defs/UserTypeEnum"
        },
        {
          "type": "null"
        }
      ],
      "default": "user",
      "description": "Type of user account"
    },
    "username": {
      "anyOf": [
        {
          "maxLength": 50,
          "minLength": 3,
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Unique username",
      "title": "Username"
    },
    "properties": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Additional user properties",
      "title": "Properties"
    }
  },
  "title": "UserCreate",
  "type": "object",
  "x-model-name": "UserCreate"
}`);
    }
    return this._schema;
  }

  /**
   * Get schema for a specific field
   */
  static getFieldSchema(fieldName: string): any {
    return this.getSchema().properties?.[fieldName];
  }

  /**
   * Check if a field is required
   */
  static isFieldRequired(fieldName: string): boolean {
    return this.getSchema().required?.includes(fieldName) ?? false;
  }

  /**
   * Get all required field names
   */
  static getRequiredFields(): string[] {
    return this.getSchema().required ?? [];
  }

  /**
   * Get all field names
   */
  static getFields(): string[] {
    return Object.keys(this.getSchema().properties ?? {});
  }

  validate(data: any): UserCreate {
    const errors: string[] = [];

    if (typeof data !== 'object' || data === null) {
      throw new ValidationError('UserCreate', 'Expected an object');
    }

    // Optional field: id
    if ('id' in data && data.id !== undefined && data.id !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: given_name
    if ('given_name' in data && data.given_name !== undefined && data.given_name !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: family_name
    if ('family_name' in data && data.family_name !== undefined && data.family_name !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: email
    if ('email' in data && data.email !== undefined && data.email !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: number
    if ('number' in data && data.number !== undefined && data.number !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: user_type
    if ('user_type' in data && data.user_type !== undefined && data.user_type !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: username
    if ('username' in data && data.username !== undefined && data.username !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: properties
    if ('properties' in data && data.properties !== undefined && data.properties !== null) {
      // Union type - skipping detailed validation
    }

    if (errors.length > 0) {
      throw new ValidationError('UserCreate', errors.join('; '));
    }

    return data as UserCreate;
  }

  safeValidate(data: any): { success: true; data: UserCreate } | { success: false; error: ValidationError } {
    try {
      const validData = this.validate(data);
      return { success: true, data: validData };
    } catch (error) {
      if (error instanceof ValidationError) {
        return { success: false, error };
      }
      return { success: false, error: new ValidationError('UserCreate', String(error)) };
    }
  }
}

/**
 * Validator for UserGet
 */
export class UserGetValidator extends BaseValidator<UserGet> {
  private static _schema: any = null;

  /**
   * Get JSON Schema for this model
   * Useful for form generation, validation, and documentation
   */
  static getSchema(): any {
    if (!this._schema) {
      this._schema = JSON.parse(`{
  "$defs": {
    "GitLabConfigGet": {
      "properties": {
        "settings": {
          "anyOf": [
            {
              "additionalProperties": true,
              "type": "object"
            },
            {
              "type": "null"
            }
          ],
          "title": "Settings"
        },
        "url": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "title": "Url"
        },
        "full_path": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "title": "Full Path"
        },
        "directory": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "title": "Directory"
        },
        "registry": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "title": "Registry"
        },
        "parent": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "title": "Parent"
        },
        "group_id": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "title": "Group Id"
        },
        "parent_id": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "title": "Parent Id"
        },
        "namespace_id": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "title": "Namespace Id"
        },
        "namespace_path": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "title": "Namespace Path"
        },
        "web_url": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "title": "Web Url"
        },
        "visibility": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "title": "Visibility"
        },
        "last_synced_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "title": "Last Synced At"
        }
      },
      "title": "GitLabConfigGet",
      "type": "object"
    },
    "OrganizationGet": {
      "properties": {
        "created_at": {
          "anyOf": [
            {
              "format": "date-time",
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Creation timestamp",
          "title": "Created At"
        },
        "updated_at": {
          "anyOf": [
            {
              "format": "date-time",
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Update timestamp",
          "title": "Updated At"
        },
        "created_by": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "title": "Created By"
        },
        "updated_by": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "title": "Updated By"
        },
        "id": {
          "description": "Organization unique identifier",
          "title": "Id",
          "type": "string"
        },
        "path": {
          "description": "Hierarchical path",
          "title": "Path",
          "type": "string"
        },
        "title": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Organization title",
          "title": "Title"
        },
        "description": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Organization description",
          "title": "Description"
        },
        "organization_type": {
          "$ref": "#/$defs/OrganizationType",
          "description": "Type of organization"
        },
        "user_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Associated user ID",
          "title": "User Id"
        },
        "properties": {
          "anyOf": [
            {
              "$ref": "#/$defs/OrganizationPropertiesGet"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Additional properties"
        },
        "number": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Organization number",
          "title": "Number"
        },
        "email": {
          "anyOf": [
            {
              "format": "email",
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Contact email",
          "title": "Email"
        },
        "telephone": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Phone number",
          "title": "Telephone"
        },
        "fax_number": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Fax number",
          "title": "Fax Number"
        },
        "url": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Website URL",
          "title": "Url"
        },
        "postal_code": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Postal code",
          "title": "Postal Code"
        },
        "street_address": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Street address",
          "title": "Street Address"
        },
        "locality": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "City/locality",
          "title": "Locality"
        },
        "region": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "State/region",
          "title": "Region"
        },
        "country": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Country",
          "title": "Country"
        }
      },
      "required": [
        "id",
        "path",
        "organization_type"
      ],
      "title": "OrganizationGet",
      "type": "object"
    },
    "OrganizationPropertiesGet": {
      "additionalProperties": true,
      "properties": {
        "gitlab": {
          "anyOf": [
            {
              "$ref": "#/$defs/GitLabConfigGet"
            },
            {
              "type": "null"
            }
          ],
          "default": null
        }
      },
      "title": "OrganizationPropertiesGet",
      "type": "object"
    },
    "OrganizationType": {
      "enum": [
        "user",
        "community",
        "organization"
      ],
      "title": "OrganizationType",
      "type": "string"
    },
    "ProfileGet": {
      "properties": {
        "created_at": {
          "anyOf": [
            {
              "format": "date-time",
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Creation timestamp",
          "title": "Created At"
        },
        "updated_at": {
          "anyOf": [
            {
              "format": "date-time",
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Update timestamp",
          "title": "Updated At"
        },
        "created_by": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "title": "Created By"
        },
        "updated_by": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "title": "Updated By"
        },
        "id": {
          "description": "Profile unique identifier",
          "title": "Id",
          "type": "string"
        },
        "user_id": {
          "description": "Associated user ID",
          "title": "User Id",
          "type": "string"
        },
        "avatar_color": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Avatar color as RGB integer",
          "title": "Avatar Color"
        },
        "avatar_image": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Avatar image URL",
          "title": "Avatar Image"
        },
        "nickname": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Unique nickname",
          "title": "Nickname"
        },
        "bio": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "User biography",
          "title": "Bio"
        },
        "url": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "User website URL",
          "title": "Url"
        },
        "language_code": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "ISO 639-1 language code",
          "title": "Language Code"
        },
        "properties": {
          "anyOf": [
            {
              "additionalProperties": true,
              "type": "object"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Additional properties",
          "title": "Properties"
        }
      },
      "required": [
        "id",
        "user_id"
      ],
      "title": "ProfileGet",
      "type": "object"
    },
    "StudentProfileGet": {
      "properties": {
        "student_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "title": "Student Id"
        },
        "student_email": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "title": "Student Email"
        },
        "user_id": {
          "title": "User Id",
          "type": "string"
        },
        "organization_id": {
          "title": "Organization Id",
          "type": "string"
        },
        "created_at": {
          "anyOf": [
            {
              "format": "date-time",
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Creation timestamp",
          "title": "Created At"
        },
        "updated_at": {
          "anyOf": [
            {
              "format": "date-time",
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Update timestamp",
          "title": "Updated At"
        },
        "created_by": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "title": "Created By"
        },
        "updated_by": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "title": "Updated By"
        },
        "id": {
          "title": "Id",
          "type": "string"
        },
        "organization": {
          "anyOf": [
            {
              "$ref": "#/$defs/OrganizationGet"
            },
            {
              "type": "null"
            }
          ],
          "default": null
        }
      },
      "required": [
        "user_id",
        "organization_id",
        "id"
      ],
      "title": "StudentProfileGet",
      "type": "object"
    },
    "UserTypeEnum": {
      "enum": [
        "user",
        "token"
      ],
      "title": "UserTypeEnum",
      "type": "string"
    }
  },
  "properties": {
    "created_at": {
      "anyOf": [
        {
          "format": "date-time",
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Creation timestamp",
      "title": "Created At"
    },
    "updated_at": {
      "anyOf": [
        {
          "format": "date-time",
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Update timestamp",
      "title": "Updated At"
    },
    "created_by": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Created By"
    },
    "updated_by": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Updated By"
    },
    "id": {
      "description": "User unique identifier",
      "title": "Id",
      "type": "string"
    },
    "given_name": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "User's given name",
      "title": "Given Name"
    },
    "family_name": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "User's family name",
      "title": "Family Name"
    },
    "email": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "User's email address",
      "title": "Email"
    },
    "number": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "User number/identifier",
      "title": "Number"
    },
    "user_type": {
      "anyOf": [
        {
          "$ref": "#/$defs/UserTypeEnum"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Type of user account"
    },
    "username": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Unique username",
      "title": "Username"
    },
    "properties": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Additional user properties",
      "title": "Properties"
    },
    "archived_at": {
      "anyOf": [
        {
          "format": "date-time",
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Timestamp when user was archived",
      "title": "Archived At"
    },
    "student_profiles": {
      "default": [],
      "description": "Associated student profiles",
      "items": {
        "$ref": "#/$defs/StudentProfileGet"
      },
      "title": "Student Profiles",
      "type": "array"
    },
    "profile": {
      "anyOf": [
        {
          "$ref": "#/$defs/ProfileGet"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "User profile"
    }
  },
  "required": [
    "id"
  ],
  "title": "UserGet",
  "type": "object",
  "x-model-name": "UserGet"
}`);
    }
    return this._schema;
  }

  /**
   * Get schema for a specific field
   */
  static getFieldSchema(fieldName: string): any {
    return this.getSchema().properties?.[fieldName];
  }

  /**
   * Check if a field is required
   */
  static isFieldRequired(fieldName: string): boolean {
    return this.getSchema().required?.includes(fieldName) ?? false;
  }

  /**
   * Get all required field names
   */
  static getRequiredFields(): string[] {
    return this.getSchema().required ?? [];
  }

  /**
   * Get all field names
   */
  static getFields(): string[] {
    return Object.keys(this.getSchema().properties ?? {});
  }

  validate(data: any): UserGet {
    const errors: string[] = [];

    if (typeof data !== 'object' || data === null) {
      throw new ValidationError('UserGet', 'Expected an object');
    }

    // Optional field: created_at
    if ('created_at' in data && data.created_at !== undefined && data.created_at !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: updated_at
    if ('updated_at' in data && data.updated_at !== undefined && data.updated_at !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: created_by
    if ('created_by' in data && data.created_by !== undefined && data.created_by !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: updated_by
    if ('updated_by' in data && data.updated_by !== undefined && data.updated_by !== null) {
      // Union type - skipping detailed validation
    }

    // Required field: id
    if (!('id' in data)) {
      errors.push('Missing required field: id');
    } else {
      if (typeof data.id !== 'string') {
        errors.push('Field id must be a string');
      }
    }

    // Optional field: given_name
    if ('given_name' in data && data.given_name !== undefined && data.given_name !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: family_name
    if ('family_name' in data && data.family_name !== undefined && data.family_name !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: email
    if ('email' in data && data.email !== undefined && data.email !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: number
    if ('number' in data && data.number !== undefined && data.number !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: user_type
    if ('user_type' in data && data.user_type !== undefined && data.user_type !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: username
    if ('username' in data && data.username !== undefined && data.username !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: properties
    if ('properties' in data && data.properties !== undefined && data.properties !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: archived_at
    if ('archived_at' in data && data.archived_at !== undefined && data.archived_at !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: student_profiles
    if ('student_profiles' in data && data.student_profiles !== undefined && data.student_profiles !== null) {
      if (!Array.isArray(data.student_profiles)) {
        errors.push('Field student_profiles must be an array');
      }
    }

    // Optional field: profile
    if ('profile' in data && data.profile !== undefined && data.profile !== null) {
      // Union type - skipping detailed validation
    }

    if (errors.length > 0) {
      throw new ValidationError('UserGet', errors.join('; '));
    }

    return data as UserGet;
  }

  safeValidate(data: any): { success: true; data: UserGet } | { success: false; error: ValidationError } {
    try {
      const validData = this.validate(data);
      return { success: true, data: validData };
    } catch (error) {
      if (error instanceof ValidationError) {
        return { success: false, error };
      }
      return { success: false, error: new ValidationError('UserGet', String(error)) };
    }
  }
}

/**
 * Validator for UserList
 */
export class UserListValidator extends BaseValidator<UserList> {
  private static _schema: any = null;

  /**
   * Get JSON Schema for this model
   * Useful for form generation, validation, and documentation
   */
  static getSchema(): any {
    if (!this._schema) {
      this._schema = JSON.parse(`{
  "$defs": {
    "UserTypeEnum": {
      "enum": [
        "user",
        "token"
      ],
      "title": "UserTypeEnum",
      "type": "string"
    }
  },
  "properties": {
    "created_at": {
      "anyOf": [
        {
          "format": "date-time",
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Creation timestamp",
      "title": "Created At"
    },
    "updated_at": {
      "anyOf": [
        {
          "format": "date-time",
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Update timestamp",
      "title": "Updated At"
    },
    "id": {
      "description": "User unique identifier",
      "title": "Id",
      "type": "string"
    },
    "given_name": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "User's given name",
      "title": "Given Name"
    },
    "family_name": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "User's family name",
      "title": "Family Name"
    },
    "email": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "User's email address",
      "title": "Email"
    },
    "user_type": {
      "anyOf": [
        {
          "$ref": "#/$defs/UserTypeEnum"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Type of user account"
    },
    "username": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Unique username",
      "title": "Username"
    },
    "archived_at": {
      "anyOf": [
        {
          "format": "date-time",
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Archive timestamp",
      "title": "Archived At"
    }
  },
  "required": [
    "id"
  ],
  "title": "UserList",
  "type": "object",
  "x-model-name": "UserList"
}`);
    }
    return this._schema;
  }

  /**
   * Get schema for a specific field
   */
  static getFieldSchema(fieldName: string): any {
    return this.getSchema().properties?.[fieldName];
  }

  /**
   * Check if a field is required
   */
  static isFieldRequired(fieldName: string): boolean {
    return this.getSchema().required?.includes(fieldName) ?? false;
  }

  /**
   * Get all required field names
   */
  static getRequiredFields(): string[] {
    return this.getSchema().required ?? [];
  }

  /**
   * Get all field names
   */
  static getFields(): string[] {
    return Object.keys(this.getSchema().properties ?? {});
  }

  validate(data: any): UserList {
    const errors: string[] = [];

    if (typeof data !== 'object' || data === null) {
      throw new ValidationError('UserList', 'Expected an object');
    }

    // Optional field: created_at
    if ('created_at' in data && data.created_at !== undefined && data.created_at !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: updated_at
    if ('updated_at' in data && data.updated_at !== undefined && data.updated_at !== null) {
      // Union type - skipping detailed validation
    }

    // Required field: id
    if (!('id' in data)) {
      errors.push('Missing required field: id');
    } else {
      if (typeof data.id !== 'string') {
        errors.push('Field id must be a string');
      }
    }

    // Optional field: given_name
    if ('given_name' in data && data.given_name !== undefined && data.given_name !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: family_name
    if ('family_name' in data && data.family_name !== undefined && data.family_name !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: email
    if ('email' in data && data.email !== undefined && data.email !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: user_type
    if ('user_type' in data && data.user_type !== undefined && data.user_type !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: username
    if ('username' in data && data.username !== undefined && data.username !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: archived_at
    if ('archived_at' in data && data.archived_at !== undefined && data.archived_at !== null) {
      // Union type - skipping detailed validation
    }

    if (errors.length > 0) {
      throw new ValidationError('UserList', errors.join('; '));
    }

    return data as UserList;
  }

  safeValidate(data: any): { success: true; data: UserList } | { success: false; error: ValidationError } {
    try {
      const validData = this.validate(data);
      return { success: true, data: validData };
    } catch (error) {
      if (error instanceof ValidationError) {
        return { success: false, error };
      }
      return { success: false, error: new ValidationError('UserList', String(error)) };
    }
  }
}

/**
 * Validator for UserUpdate
 */
export class UserUpdateValidator extends BaseValidator<UserUpdate> {
  private static _schema: any = null;

  /**
   * Get JSON Schema for this model
   * Useful for form generation, validation, and documentation
   */
  static getSchema(): any {
    if (!this._schema) {
      this._schema = JSON.parse(`{
  "properties": {
    "given_name": {
      "anyOf": [
        {
          "maxLength": 255,
          "minLength": 1,
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "User's given name",
      "title": "Given Name"
    },
    "family_name": {
      "anyOf": [
        {
          "maxLength": 255,
          "minLength": 1,
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "User's family name",
      "title": "Family Name"
    },
    "email": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "User's email address",
      "title": "Email"
    },
    "number": {
      "anyOf": [
        {
          "maxLength": 255,
          "minLength": 1,
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "User number/identifier",
      "title": "Number"
    },
    "username": {
      "anyOf": [
        {
          "maxLength": 50,
          "minLength": 3,
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Unique username",
      "title": "Username"
    },
    "properties": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Additional user properties",
      "title": "Properties"
    }
  },
  "title": "UserUpdate",
  "type": "object",
  "x-model-name": "UserUpdate"
}`);
    }
    return this._schema;
  }

  /**
   * Get schema for a specific field
   */
  static getFieldSchema(fieldName: string): any {
    return this.getSchema().properties?.[fieldName];
  }

  /**
   * Check if a field is required
   */
  static isFieldRequired(fieldName: string): boolean {
    return this.getSchema().required?.includes(fieldName) ?? false;
  }

  /**
   * Get all required field names
   */
  static getRequiredFields(): string[] {
    return this.getSchema().required ?? [];
  }

  /**
   * Get all field names
   */
  static getFields(): string[] {
    return Object.keys(this.getSchema().properties ?? {});
  }

  validate(data: any): UserUpdate {
    const errors: string[] = [];

    if (typeof data !== 'object' || data === null) {
      throw new ValidationError('UserUpdate', 'Expected an object');
    }

    // Optional field: given_name
    if ('given_name' in data && data.given_name !== undefined && data.given_name !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: family_name
    if ('family_name' in data && data.family_name !== undefined && data.family_name !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: email
    if ('email' in data && data.email !== undefined && data.email !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: number
    if ('number' in data && data.number !== undefined && data.number !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: username
    if ('username' in data && data.username !== undefined && data.username !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: properties
    if ('properties' in data && data.properties !== undefined && data.properties !== null) {
      // Union type - skipping detailed validation
    }

    if (errors.length > 0) {
      throw new ValidationError('UserUpdate', errors.join('; '));
    }

    return data as UserUpdate;
  }

  safeValidate(data: any): { success: true; data: UserUpdate } | { success: false; error: ValidationError } {
    try {
      const validData = this.validate(data);
      return { success: true, data: validData };
    } catch (error) {
      if (error instanceof ValidationError) {
        return { success: false, error };
      }
      return { success: false, error: new ValidationError('UserUpdate', String(error)) };
    }
  }
}

/**
 * Validator for UserQuery
 */
export class UserQueryValidator extends BaseValidator<UserQuery> {
  private static _schema: any = null;

  /**
   * Get JSON Schema for this model
   * Useful for form generation, validation, and documentation
   */
  static getSchema(): any {
    if (!this._schema) {
      this._schema = JSON.parse(`{
  "$defs": {
    "UserTypeEnum": {
      "enum": [
        "user",
        "token"
      ],
      "title": "UserTypeEnum",
      "type": "string"
    }
  },
  "properties": {
    "skip": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "null"
        }
      ],
      "default": 0,
      "title": "Skip"
    },
    "limit": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "null"
        }
      ],
      "default": 100,
      "title": "Limit"
    },
    "id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Id"
    },
    "given_name": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Given Name"
    },
    "family_name": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Family Name"
    },
    "email": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Email"
    },
    "number": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Number"
    },
    "user_type": {
      "anyOf": [
        {
          "$ref": "#/$defs/UserTypeEnum"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "archived": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Archived"
    },
    "username": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Username"
    }
  },
  "title": "UserQuery",
  "type": "object",
  "x-model-name": "UserQuery"
}`);
    }
    return this._schema;
  }

  /**
   * Get schema for a specific field
   */
  static getFieldSchema(fieldName: string): any {
    return this.getSchema().properties?.[fieldName];
  }

  /**
   * Check if a field is required
   */
  static isFieldRequired(fieldName: string): boolean {
    return this.getSchema().required?.includes(fieldName) ?? false;
  }

  /**
   * Get all required field names
   */
  static getRequiredFields(): string[] {
    return this.getSchema().required ?? [];
  }

  /**
   * Get all field names
   */
  static getFields(): string[] {
    return Object.keys(this.getSchema().properties ?? {});
  }

  validate(data: any): UserQuery {
    const errors: string[] = [];

    if (typeof data !== 'object' || data === null) {
      throw new ValidationError('UserQuery', 'Expected an object');
    }

    // Optional field: skip
    if ('skip' in data && data.skip !== undefined && data.skip !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: limit
    if ('limit' in data && data.limit !== undefined && data.limit !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: id
    if ('id' in data && data.id !== undefined && data.id !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: given_name
    if ('given_name' in data && data.given_name !== undefined && data.given_name !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: family_name
    if ('family_name' in data && data.family_name !== undefined && data.family_name !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: email
    if ('email' in data && data.email !== undefined && data.email !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: number
    if ('number' in data && data.number !== undefined && data.number !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: user_type
    if ('user_type' in data && data.user_type !== undefined && data.user_type !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: archived
    if ('archived' in data && data.archived !== undefined && data.archived !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: username
    if ('username' in data && data.username !== undefined && data.username !== null) {
      // Union type - skipping detailed validation
    }

    if (errors.length > 0) {
      throw new ValidationError('UserQuery', errors.join('; '));
    }

    return data as UserQuery;
  }

  safeValidate(data: any): { success: true; data: UserQuery } | { success: false; error: ValidationError } {
    try {
      const validData = this.validate(data);
      return { success: true, data: validData };
    } catch (error) {
      if (error instanceof ValidationError) {
        return { success: false, error };
      }
      return { success: false, error: new ValidationError('UserQuery', String(error)) };
    }
  }
}

/**
 * Password update request for user endpoints.
 */
export class UserPasswordValidator extends BaseValidator<UserPassword> {
  private static _schema: any = null;

  /**
   * Get JSON Schema for this model
   * Useful for form generation, validation, and documentation
   */
  static getSchema(): any {
    if (!this._schema) {
      this._schema = JSON.parse(`{
  "description": "Password update request for user endpoints.",
  "properties": {
    "username": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Target username (admin only, otherwise current user)",
      "title": "Username"
    },
    "password": {
      "description": "New password",
      "title": "Password",
      "type": "string"
    },
    "password_old": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Old password (required for non-admin password changes)",
      "title": "Password Old"
    }
  },
  "required": [
    "password"
  ],
  "title": "UserPassword",
  "type": "object",
  "x-model-name": "UserPassword"
}`);
    }
    return this._schema;
  }

  /**
   * Get schema for a specific field
   */
  static getFieldSchema(fieldName: string): any {
    return this.getSchema().properties?.[fieldName];
  }

  /**
   * Check if a field is required
   */
  static isFieldRequired(fieldName: string): boolean {
    return this.getSchema().required?.includes(fieldName) ?? false;
  }

  /**
   * Get all required field names
   */
  static getRequiredFields(): string[] {
    return this.getSchema().required ?? [];
  }

  /**
   * Get all field names
   */
  static getFields(): string[] {
    return Object.keys(this.getSchema().properties ?? {});
  }

  validate(data: any): UserPassword {
    const errors: string[] = [];

    if (typeof data !== 'object' || data === null) {
      throw new ValidationError('UserPassword', 'Expected an object');
    }

    // Optional field: username
    if ('username' in data && data.username !== undefined && data.username !== null) {
      // Union type - skipping detailed validation
    }

    // Required field: password
    if (!('password' in data)) {
      errors.push('Missing required field: password');
    } else {
      if (typeof data.password !== 'string') {
        errors.push('Field password must be a string');
      }
    }

    // Optional field: password_old
    if ('password_old' in data && data.password_old !== undefined && data.password_old !== null) {
      // Union type - skipping detailed validation
    }

    if (errors.length > 0) {
      throw new ValidationError('UserPassword', errors.join('; '));
    }

    return data as UserPassword;
  }

  safeValidate(data: any): { success: true; data: UserPassword } | { success: false; error: ValidationError } {
    try {
      const validData = this.validate(data);
      return { success: true, data: validData };
    } catch (error) {
      if (error instanceof ValidationError) {
        return { success: false, error };
      }
      return { success: false, error: new ValidationError('UserPassword', String(error)) };
    }
  }
}

/**
 * Validator for UserRoleCreate
 */
export class UserRoleCreateValidator extends BaseValidator<UserRoleCreate> {
  private static _schema: any = null;

  /**
   * Get JSON Schema for this model
   * Useful for form generation, validation, and documentation
   */
  static getSchema(): any {
    if (!this._schema) {
      this._schema = JSON.parse(`{
  "properties": {
    "user_id": {
      "title": "User Id",
      "type": "string"
    },
    "role_id": {
      "title": "Role Id",
      "type": "string"
    }
  },
  "required": [
    "user_id",
    "role_id"
  ],
  "title": "UserRoleCreate",
  "type": "object",
  "x-model-name": "UserRoleCreate"
}`);
    }
    return this._schema;
  }

  /**
   * Get schema for a specific field
   */
  static getFieldSchema(fieldName: string): any {
    return this.getSchema().properties?.[fieldName];
  }

  /**
   * Check if a field is required
   */
  static isFieldRequired(fieldName: string): boolean {
    return this.getSchema().required?.includes(fieldName) ?? false;
  }

  /**
   * Get all required field names
   */
  static getRequiredFields(): string[] {
    return this.getSchema().required ?? [];
  }

  /**
   * Get all field names
   */
  static getFields(): string[] {
    return Object.keys(this.getSchema().properties ?? {});
  }

  validate(data: any): UserRoleCreate {
    const errors: string[] = [];

    if (typeof data !== 'object' || data === null) {
      throw new ValidationError('UserRoleCreate', 'Expected an object');
    }

    // Required field: user_id
    if (!('user_id' in data)) {
      errors.push('Missing required field: user_id');
    } else {
      if (typeof data.user_id !== 'string') {
        errors.push('Field user_id must be a string');
      }
    }

    // Required field: role_id
    if (!('role_id' in data)) {
      errors.push('Missing required field: role_id');
    } else {
      if (typeof data.role_id !== 'string') {
        errors.push('Field role_id must be a string');
      }
    }

    if (errors.length > 0) {
      throw new ValidationError('UserRoleCreate', errors.join('; '));
    }

    return data as UserRoleCreate;
  }

  safeValidate(data: any): { success: true; data: UserRoleCreate } | { success: false; error: ValidationError } {
    try {
      const validData = this.validate(data);
      return { success: true, data: validData };
    } catch (error) {
      if (error instanceof ValidationError) {
        return { success: false, error };
      }
      return { success: false, error: new ValidationError('UserRoleCreate', String(error)) };
    }
  }
}

/**
 * Validator for UserRoleGet
 */
export class UserRoleGetValidator extends BaseValidator<UserRoleGet> {
  private static _schema: any = null;

  /**
   * Get JSON Schema for this model
   * Useful for form generation, validation, and documentation
   */
  static getSchema(): any {
    if (!this._schema) {
      this._schema = JSON.parse(`{
  "properties": {
    "created_at": {
      "anyOf": [
        {
          "format": "date-time",
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Creation timestamp",
      "title": "Created At"
    },
    "updated_at": {
      "anyOf": [
        {
          "format": "date-time",
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Update timestamp",
      "title": "Updated At"
    },
    "created_by": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Created By"
    },
    "updated_by": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Updated By"
    },
    "user_id": {
      "title": "User Id",
      "type": "string"
    },
    "role_id": {
      "title": "Role Id",
      "type": "string"
    }
  },
  "required": [
    "user_id",
    "role_id"
  ],
  "title": "UserRoleGet",
  "type": "object",
  "x-model-name": "UserRoleGet"
}`);
    }
    return this._schema;
  }

  /**
   * Get schema for a specific field
   */
  static getFieldSchema(fieldName: string): any {
    return this.getSchema().properties?.[fieldName];
  }

  /**
   * Check if a field is required
   */
  static isFieldRequired(fieldName: string): boolean {
    return this.getSchema().required?.includes(fieldName) ?? false;
  }

  /**
   * Get all required field names
   */
  static getRequiredFields(): string[] {
    return this.getSchema().required ?? [];
  }

  /**
   * Get all field names
   */
  static getFields(): string[] {
    return Object.keys(this.getSchema().properties ?? {});
  }

  validate(data: any): UserRoleGet {
    const errors: string[] = [];

    if (typeof data !== 'object' || data === null) {
      throw new ValidationError('UserRoleGet', 'Expected an object');
    }

    // Optional field: created_at
    if ('created_at' in data && data.created_at !== undefined && data.created_at !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: updated_at
    if ('updated_at' in data && data.updated_at !== undefined && data.updated_at !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: created_by
    if ('created_by' in data && data.created_by !== undefined && data.created_by !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: updated_by
    if ('updated_by' in data && data.updated_by !== undefined && data.updated_by !== null) {
      // Union type - skipping detailed validation
    }

    // Required field: user_id
    if (!('user_id' in data)) {
      errors.push('Missing required field: user_id');
    } else {
      if (typeof data.user_id !== 'string') {
        errors.push('Field user_id must be a string');
      }
    }

    // Required field: role_id
    if (!('role_id' in data)) {
      errors.push('Missing required field: role_id');
    } else {
      if (typeof data.role_id !== 'string') {
        errors.push('Field role_id must be a string');
      }
    }

    if (errors.length > 0) {
      throw new ValidationError('UserRoleGet', errors.join('; '));
    }

    return data as UserRoleGet;
  }

  safeValidate(data: any): { success: true; data: UserRoleGet } | { success: false; error: ValidationError } {
    try {
      const validData = this.validate(data);
      return { success: true, data: validData };
    } catch (error) {
      if (error instanceof ValidationError) {
        return { success: false, error };
      }
      return { success: false, error: new ValidationError('UserRoleGet', String(error)) };
    }
  }
}

/**
 * Validator for UserRoleList
 */
export class UserRoleListValidator extends BaseValidator<UserRoleList> {
  private static _schema: any = null;

  /**
   * Get JSON Schema for this model
   * Useful for form generation, validation, and documentation
   */
  static getSchema(): any {
    if (!this._schema) {
      this._schema = JSON.parse(`{
  "properties": {
    "user_id": {
      "title": "User Id",
      "type": "string"
    },
    "role_id": {
      "title": "Role Id",
      "type": "string"
    }
  },
  "required": [
    "user_id",
    "role_id"
  ],
  "title": "UserRoleList",
  "type": "object",
  "x-model-name": "UserRoleList"
}`);
    }
    return this._schema;
  }

  /**
   * Get schema for a specific field
   */
  static getFieldSchema(fieldName: string): any {
    return this.getSchema().properties?.[fieldName];
  }

  /**
   * Check if a field is required
   */
  static isFieldRequired(fieldName: string): boolean {
    return this.getSchema().required?.includes(fieldName) ?? false;
  }

  /**
   * Get all required field names
   */
  static getRequiredFields(): string[] {
    return this.getSchema().required ?? [];
  }

  /**
   * Get all field names
   */
  static getFields(): string[] {
    return Object.keys(this.getSchema().properties ?? {});
  }

  validate(data: any): UserRoleList {
    const errors: string[] = [];

    if (typeof data !== 'object' || data === null) {
      throw new ValidationError('UserRoleList', 'Expected an object');
    }

    // Required field: user_id
    if (!('user_id' in data)) {
      errors.push('Missing required field: user_id');
    } else {
      if (typeof data.user_id !== 'string') {
        errors.push('Field user_id must be a string');
      }
    }

    // Required field: role_id
    if (!('role_id' in data)) {
      errors.push('Missing required field: role_id');
    } else {
      if (typeof data.role_id !== 'string') {
        errors.push('Field role_id must be a string');
      }
    }

    if (errors.length > 0) {
      throw new ValidationError('UserRoleList', errors.join('; '));
    }

    return data as UserRoleList;
  }

  safeValidate(data: any): { success: true; data: UserRoleList } | { success: false; error: ValidationError } {
    try {
      const validData = this.validate(data);
      return { success: true, data: validData };
    } catch (error) {
      if (error instanceof ValidationError) {
        return { success: false, error };
      }
      return { success: false, error: new ValidationError('UserRoleList', String(error)) };
    }
  }
}

/**
 * Validator for UserRoleUpdate
 */
export class UserRoleUpdateValidator extends BaseValidator<UserRoleUpdate> {
  private static _schema: any = null;

  /**
   * Get JSON Schema for this model
   * Useful for form generation, validation, and documentation
   */
  static getSchema(): any {
    if (!this._schema) {
      this._schema = JSON.parse(`{
  "properties": {
    "role_id": {
      "title": "Role Id",
      "type": "string"
    }
  },
  "required": [
    "role_id"
  ],
  "title": "UserRoleUpdate",
  "type": "object",
  "x-model-name": "UserRoleUpdate"
}`);
    }
    return this._schema;
  }

  /**
   * Get schema for a specific field
   */
  static getFieldSchema(fieldName: string): any {
    return this.getSchema().properties?.[fieldName];
  }

  /**
   * Check if a field is required
   */
  static isFieldRequired(fieldName: string): boolean {
    return this.getSchema().required?.includes(fieldName) ?? false;
  }

  /**
   * Get all required field names
   */
  static getRequiredFields(): string[] {
    return this.getSchema().required ?? [];
  }

  /**
   * Get all field names
   */
  static getFields(): string[] {
    return Object.keys(this.getSchema().properties ?? {});
  }

  validate(data: any): UserRoleUpdate {
    const errors: string[] = [];

    if (typeof data !== 'object' || data === null) {
      throw new ValidationError('UserRoleUpdate', 'Expected an object');
    }

    // Required field: role_id
    if (!('role_id' in data)) {
      errors.push('Missing required field: role_id');
    } else {
      if (typeof data.role_id !== 'string') {
        errors.push('Field role_id must be a string');
      }
    }

    if (errors.length > 0) {
      throw new ValidationError('UserRoleUpdate', errors.join('; '));
    }

    return data as UserRoleUpdate;
  }

  safeValidate(data: any): { success: true; data: UserRoleUpdate } | { success: false; error: ValidationError } {
    try {
      const validData = this.validate(data);
      return { success: true, data: validData };
    } catch (error) {
      if (error instanceof ValidationError) {
        return { success: false, error };
      }
      return { success: false, error: new ValidationError('UserRoleUpdate', String(error)) };
    }
  }
}

/**
 * Validator for UserRoleQuery
 */
export class UserRoleQueryValidator extends BaseValidator<UserRoleQuery> {
  private static _schema: any = null;

  /**
   * Get JSON Schema for this model
   * Useful for form generation, validation, and documentation
   */
  static getSchema(): any {
    if (!this._schema) {
      this._schema = JSON.parse(`{
  "properties": {
    "skip": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "null"
        }
      ],
      "default": 0,
      "title": "Skip"
    },
    "limit": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "null"
        }
      ],
      "default": 100,
      "title": "Limit"
    },
    "user_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "User Id"
    },
    "role_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Role Id"
    }
  },
  "title": "UserRoleQuery",
  "type": "object",
  "x-model-name": "UserRoleQuery"
}`);
    }
    return this._schema;
  }

  /**
   * Get schema for a specific field
   */
  static getFieldSchema(fieldName: string): any {
    return this.getSchema().properties?.[fieldName];
  }

  /**
   * Check if a field is required
   */
  static isFieldRequired(fieldName: string): boolean {
    return this.getSchema().required?.includes(fieldName) ?? false;
  }

  /**
   * Get all required field names
   */
  static getRequiredFields(): string[] {
    return this.getSchema().required ?? [];
  }

  /**
   * Get all field names
   */
  static getFields(): string[] {
    return Object.keys(this.getSchema().properties ?? {});
  }

  validate(data: any): UserRoleQuery {
    const errors: string[] = [];

    if (typeof data !== 'object' || data === null) {
      throw new ValidationError('UserRoleQuery', 'Expected an object');
    }

    // Optional field: skip
    if ('skip' in data && data.skip !== undefined && data.skip !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: limit
    if ('limit' in data && data.limit !== undefined && data.limit !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: user_id
    if ('user_id' in data && data.user_id !== undefined && data.user_id !== null) {
      // Union type - skipping detailed validation
    }

    // Optional field: role_id
    if ('role_id' in data && data.role_id !== undefined && data.role_id !== null) {
      // Union type - skipping detailed validation
    }

    if (errors.length > 0) {
      throw new ValidationError('UserRoleQuery', errors.join('; '));
    }

    return data as UserRoleQuery;
  }

  safeValidate(data: any): { success: true; data: UserRoleQuery } | { success: false; error: ValidationError } {
    try {
      const validData = this.validate(data);
      return { success: true, data: validData };
    } catch (error) {
      if (error instanceof ValidationError) {
        return { success: false, error };
      }
      return { success: false, error: new ValidationError('UserRoleQuery', String(error)) };
    }
  }
}
