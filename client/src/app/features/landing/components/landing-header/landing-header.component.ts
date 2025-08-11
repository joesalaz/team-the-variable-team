import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { SessionService } from '../../../../services/session.service';
import { MessengerService } from '../../../../services/messenger.service';

@Component({
  selector: 'app-landing-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './landing-header.component.html',
  styleUrl: './landing-header.component.css'
})
export class LandingHeaderComponent implements OnInit {
  // Authentication state
  isAuthenticated = false;
  userType: 'student' | 'employer' | null = null;
  userId: string | null = null;
  
  // Messages dropdown state
  showMessagesDropdown = false;
  
  constructor(
    private sessionService: SessionService,
    public messengerService: MessengerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Check authentication status
    const session = this.sessionService.getSession();
    this.isAuthenticated = session && session.userId ? true : false;
    
    // Type-safe assignment for userType
    const sessionUserType = session?.userType;
    this.userType = (sessionUserType === 'student' || sessionUserType === 'employer') 
      ? sessionUserType 
      : null;
      
    this.userId = session?.userId || null;

    // Load unread messages count for authenticated users
    if (this.isAuthenticated && this.userId) {
      this.loadUnreadMessages();
    }
  }

  /**
   * Load and count unread messages for the authenticated user
   */
  private loadUnreadMessages(): void {
    if (!this.userId || !this.userType) return;

    const query: any = {};
    
    // Set appropriate recipient ID based on user type
    if (this.userType === 'employer') {
      query.EmployerRecipientID = this.userId;
    } else if (this.userType === 'student') {
      query.StudentRecipientID = this.userId;
    }

    // Get incoming messages and count unread ones
    this.messengerService.getIncoming(query).subscribe(res => {
      if (res && res.length) {
        this.messengerService.incoming = res;
        // Count unread messages
        this.messengerService.unread = 0;
        this.messengerService.incoming.forEach(message => {
          if (message.Read == 0 && 
            ((message.EmpRecipient && message.EmpRecipient.ID == this.userId) ||
             (message.StdRecipient && message.StdRecipient.StudentID == this.userId))) {
            this.messengerService.unread++;
          }
        });
      }
    });
  }

  /**
   * Get current unread message count
   */
  get unreadMessageCount(): number {
    return this.messengerService.unread || 0;
  }

  /**
   * Get navigation items based on authentication status and user type
   * Note: Messages are handled separately in the user menu area
   */
  get navigationItems() {
    if (!this.isAuthenticated) {
      return [
        { label: 'For Students', link: '/students', icon: 'school' },
        { label: 'For Employers', link: '/employers', icon: 'business' },
        { label: 'About', link: '/about', icon: 'info' }
      ];
    } else if (this.userType === 'student') {
      return [
        { label: 'My Profile', link: `/stdprofile/${this.userId}`, icon: 'person' },
        { label: 'Find Jobs', link: '/employers', icon: 'work' }
        // Messages handled separately in user menu
      ];
    } else if (this.userType === 'employer') {
      return [
        { label: 'My Company', link: `/empprofile/${this.userId}`, icon: 'business' },
        { label: 'Find Talent', link: '/students', icon: 'people' }
        // Messages handled separately in user menu
      ];
    }
    return [];
  }

  /**
   * Toggle messages dropdown visibility
   */
  toggleMessagesDropdown(): void {
    this.showMessagesDropdown = !this.showMessagesDropdown;
    
    if (this.showMessagesDropdown) {
      // Refresh messages when opening
      this.loadUnreadMessages();
    }
  }

  /**
   * Debug method to check if menu click is working
   */
  debugMenuClick(): void {
    console.log('Messages button clicked!');
    console.log('Messages available:', this.messengerService.incoming);
    console.log('Unread count:', this.messengerService.unread);
    
    // Log the first message structure for debugging
    if (this.messengerService.incoming && this.messengerService.incoming.length > 0) {
      console.log('First message structure:', this.messengerService.incoming[0]);
      console.log('Available properties:', Object.keys(this.messengerService.incoming[0]));
    }
  }

  /**
   * Open message dialog to view message details
   */
  openMessageDialog(message: any): void {
    console.log('Opening message:', message); // Debug log
    
    // Mark message as read
    if (!message.Read) {
      this.messengerService.markAsRead(message.ID);
    }
    
    // Extract sender name using the actual properties we know exist
    let senderName = 'Unknown Sender';
    
    if (message.EmployerCreatorID) {
      senderName = `Employer (ID: ${message.EmployerCreatorID})`;
    } else if (message.StudentCreatorID) {
      senderName = `Student (ID: ${message.StudentCreatorID})`;
    }
    
    const messageDate = new Date(message.Created).toLocaleString();
    
    // Show message details
    alert(`Message from: ${senderName}\nDate: ${messageDate}\n\nMessage:\n${message.Message}`);
    
    // Close dropdown after viewing message
    this.showMessagesDropdown = false;
  }

  /**
   * Public method to refresh unread messages count
   * Can be called from other components when messages are read/received
   */
  public refreshMessages(): void {
    if (this.isAuthenticated && this.userId) {
      this.loadUnreadMessages();
    }
  }

  /**
   * Handle user logout with optional custom redirect
   */
  logout(): void {
    // Use the improved session service logout with default landing page redirect
    this.sessionService.logout('/');
  }
}
