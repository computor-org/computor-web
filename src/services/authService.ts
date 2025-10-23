import { LoginCredentials, AuthResponse, AuthUser } from '../types/auth';
import { IAuthProviderWithLogin } from '../interfaces/IAuthProvider';

/**
 * Mock Authentication Service for Development
 *
 * SECURITY NOTE: This simulates HttpOnly cookie behavior for development.
 * In production, the backend would set real HttpOnly cookies.
 *
 * For development:
 * - Stores user data in sessionStorage (NOT localStorage)
 * - Simulates cookie-based auth without actual cookies
 * - Auto-clears on browser tab close
 */

// Mock users database
const mockUsers: (AuthUser & { password: string })[] = [
  {
    id: '1',
    username: 'admin',
    email: 'admin@university.edu',
    password: 'admin123',
    givenName: 'John',
    familyName: 'Admin',
    role: 'admin',
    permissions: [
      'view_students',
      'view_course_students',
      'create_assignments',
      'view_grades',
      'manage_course',
      'admin_access',
      'manage_users',
      'system_settings',
      'view_audit',
    ],
    courses: ['1', '2', '3'],
  },
  {
    id: '2',
    username: 'lecturer',
    email: 'lecturer@university.edu',
    password: 'lecturer123',
    givenName: 'Jane',
    familyName: 'Smith',
    role: 'lecturer',
    permissions: [
      'view_students',
      'view_course_students',
      'create_assignments',
      'view_grades',
      'manage_course',
    ],
    courses: ['1', '2'],
  },
  {
    id: '3',
    username: 'student',
    email: 'student@university.edu',
    password: 'student123',
    givenName: 'Bob',
    familyName: 'Johnson',
    role: 'student',
    permissions: ['view_assignments', 'submit_assignments'],
    courses: ['1'],
  },
];

// Simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export class AuthService implements IAuthProviderWithLogin {
  private readonly USER_KEY = 'mock_auth_user';
  private currentUser: AuthUser | null = null;

  constructor() {
    // Load user from sessionStorage on initialization
    this.loadUserFromStorage();
  }

  /**
   * Load user data from sessionStorage
   */
  private loadUserFromStorage(): void {
    try {
      const storedUser = sessionStorage.getItem(this.USER_KEY);
      if (storedUser) {
        this.currentUser = JSON.parse(storedUser);
      }
    } catch (error) {
      console.error('Failed to load user from storage:', error);
      this.currentUser = null;
    }
  }

  /**
   * Save user data to sessionStorage
   */
  private saveUserToStorage(user: AuthUser): void {
    try {
      sessionStorage.setItem(this.USER_KEY, JSON.stringify(user));
      this.currentUser = user;
    } catch (error) {
      console.error('Failed to save user to storage:', error);
    }
  }

  /**
   * Check if user is authenticated
   */
  isAuthenticated(): boolean {
    return this.currentUser !== null;
  }

  /**
   * Get current authenticated user
   */
  getCurrentUser(): AuthUser | null {
    return this.currentUser;
  }

  /**
   * Mock login - simulates backend cookie-based auth
   */
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    await delay(800); // Simulate network delay

    // Find user by email or username
    const user = mockUsers.find(
      u => u.username === credentials.username || u.email === credentials.username
    );

    if (!user) {
      return {
        success: false,
        error: 'User not found',
      };
    }

    // Check password
    if (user.password !== credentials.password) {
      return {
        success: false,
        error: 'Invalid password',
      };
    }

    // Remove password from user object
    const { password, ...userWithoutPassword } = user;

    // In real implementation, backend would set HttpOnly cookie here
    // For mock, we just store user data
    this.saveUserToStorage(userWithoutPassword);

    return {
      success: true,
      user: userWithoutPassword,
    };
  }

  /**
   * Mock logout - simulates clearing backend cookies
   */
  async logout(): Promise<void> {
    await delay(200);

    // In real implementation, backend would clear HttpOnly cookies
    this.clearSession();
  }

  /**
   * Mock session refresh - simulates backend cookie refresh
   */
  async refreshSession(): Promise<AuthResponse> {
    await delay(300);

    if (!this.currentUser) {
      return {
        success: false,
        error: 'No active session',
      };
    }

    // In real implementation, backend would refresh HttpOnly cookies
    // For mock, just return current user
    return {
      success: true,
      user: this.currentUser,
    };
  }

  /**
   * Clear local session data
   */
  clearSession(): void {
    sessionStorage.removeItem(this.USER_KEY);
    this.currentUser = null;
  }

  /**
   * Get demo credentials for development
   */
  getDemoCredentials() {
    return {
      admin: { username: 'admin', password: 'admin123' },
      lecturer: { username: 'lecturer', password: 'lecturer123' },
      student: { username: 'student', password: 'student123' },
    };
  }
}
