import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SessionService {
  constructor() { }

  /**
   * Set the session 
   */
  setSession(userId: string, userType: string) {
    localStorage.setItem('userId', userId);
    localStorage.setItem('userType', userType);
  }

  /**
   * Get the session 
   */
  getSession() {
    return {
      userId: localStorage.getItem('userId'),
      userType: localStorage.getItem('userType')
    };
  }

  /**
   * Logout the user with optional redirect destination
   * @param redirectTo - The route to redirect to after logout (default: landing page)
   */
  logout(redirectTo: string = '/'): void {
    // Clear all session data
    localStorage.removeItem('userId');
    localStorage.removeItem('userType');
    localStorage.clear();
    
    // Use window.location for now to avoid Router injection issues
    window.location.href = redirectTo;
  }

  /**
   * Check if user is currently authenticated
   */
  isAuthenticated(): boolean {
    const session = this.getSession();
    return !!(session.userId && session.userType);
  }

  /**
   * Clear session without redirect (useful for programmatic logout)
   */
  clearSession(): void {
    localStorage.removeItem('userId');
    localStorage.removeItem('userType');
    localStorage.clear();
  }
}
