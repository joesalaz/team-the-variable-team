# Employment Seeking Application - Team "The Variable Team"

**Live Demo**: [Coming Soon - Deployment in Progress]

---

## 2025 Modernization Project

Jose Salazar -member of team-the-variable-team. I am currently modernizing this 6-year-old capstone project to finally achieve live deployment and enhance the application beyond the original scope. Our team never had the opportunity to deploy this application live in 2019, and this modernization effort aims to not only make it production-ready but also implement features that time constraints prevented during the original capstone timeline.

### Modernization Status

- **Original**: 2019 Angular 7 application with 40+ deprecated dependencies
- **Target**: Modern Angular 18+ with current security patches
- **Progress**: Documentation phase complete, environment restoration in progress
- **Documentation**: [Full Modernization Plan](./MODERNIZATION-PLAN-2025.md)

### Technical Debt Addressed

- Angular 7.2.15 to Angular 18+ (6 major version upgrade)
- TypeScript 3.2.2 to TypeScript 5.x (modern type safety)
- Protractor (deprecated) to Cypress (modern E2E testing)
- TSLint (deprecated) to ESLint (current linting standards)
- 40+ security vulnerabilities to All dependencies updated and secured

This modernization focuses on bringing the application up to current standards for reliable production deployment and implementing features that were originally planned but not completed due to project timeline constraints.

---

## Project Overview

A comprehensive full-stack employment platform connecting students and employers, developed as our capstone project at Southern Careers Institute (2019). This application facilitates job posting, candidate discovery, and direct communication between employers and job seekers.

## Key Features

- **User Authentication**: Secure login system for students, employers, and administrators
- **Job Posting Platform**: Rich text job posting with Froala WYSIWYG editor
- **Real-time Messaging**: Direct communication between employers and candidates
- **Profile Management**: Comprehensive profiles for both students and employers
- **Search & Discovery**: Advanced filtering for jobs and candidates
- **Admin Dashboard**: Administrative oversight and user management
- **File Management**: Resume uploads and document handling

## Team "The Variable Team" - Contributions

### Jose Salazar - Lead Full-Stack Developer

Primary Architect of Core Systems

- **Authentication & Security**: Implemented Passport.js authentication with encrypted passwords

- **Job Posting Platform**: Built complete CRUD operations with Froala WYSIWYG integration

- **Messaging System**: Developed real-time communication between employers and candidates
- **Security Implementation**: Fixed critical security vulnerabilities in user routing and access control
- **Component Architecture**: Created reusable Angular components for user lists and interactions
- **Database Integration**: Designed and implemented Sequelize ORM models and relationships

Notable Commits (25+ contributions):

- "Implemented Authentication to encrypt passwords, check usernames and passwords for proper login and profile routing"
- "Added messaging between users, created message-dialog component"
- "created employers list component to display employers to the student, created emp-job-post-view component"
- "Fixes for security issue... When a user could navigate to any user profile page by replacing id number in the url"

### JMatthiasH - Integration Lead & Project Manager

- Project coordination and branch management
- Database configuration and deployment setup
- UI styling and design implementation
- Route configuration and testing

### CarolineMacarius - Admin System Developer

- Admin dashboard design and functionality
- User management interface
- Database administration features
- CSS styling and layout improvements

### cortngiles13 - Student Profile System

- Student profile components and functionality
- Student signup system
- Profile management features
- Database model contributions

### flesh-atoms - Database Architecture

- Database design and schema
- Model relationships and associations
- Data structure optimization

## Technical Architecture

### Frontend

- **Framework**: Angular 7+ with TypeScript
- **Styling**: Bootstrap 4 + Custom CSS
- **Rich Text**: Froala WYSIWYG Editor
- **Icons**: Font Awesome
- **UI Components**: Angular Material

### Backend

- **Runtime**: Node.js
- **Framework**: Express.js
- **Authentication**: Passport.js with local strategy
- **Session Management**: Express-session
- **API**: RESTful endpoints

### Database

- **Database**: SQLite
- **ORM**: Sequelize
- **Models**: Users (Students/Employers), Job Posts, Messages, Comments

### Development Tools

- **Testing**: Karma + Jasmine
- **E2E Testing**: Protractor
- **Build**: Angular CLI
- **Version Control**: Git with feature branch workflow

## Getting Started

### Prerequisites

- Node.js (v12+)
- npm or yarn
- SQLite3

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Woz-U-Group-Projects/team-the-variable-team.git
   cd team-the-variable-team
   ```

2. **Install backend dependencies**

   ```bash
   npm install
   ```

3. **Install frontend dependencies**

   ```bash
   cd client
   npm install
   cd ..
   ```

4. **Database Setup**

   ```bash
   # Database will be created automatically when the server starts
   # Models will be synced using Sequelize
   ```

5. **Start the development servers**

   **Backend (Terminal 1):**

   ```bash
   npm start
   # Server runs on http://localhost:8080
   ```

   **Frontend (Terminal 2):**

   ```bash
   cd client
   ng serve
   # Angular app runs on http://localhost:4200
   ```

### Default Access

- **Application**: <http://localhost:4200>

- **API**: <http://localhost:8080>

## Project Structure

```team-the-variable-team/
├── client/                     # Angular frontend
│   ├── src/
│   │   ├── app/
│   │   │   ├── admin/         # Admin components
│   │   │   ├── employer/      # Employer components
│   │   │   ├── student/       # Student components
│   │   │   ├── services/      # Angular services
│   │   │   └── core/          # Shared components
│   │   └── assets/            # Static assets
├── models/                     # Sequelize models
├── routes/                     # Express routes
├── config/                     # Configuration files
├── bin/                        # Server startup
└── package.json               # Dependencies
```

## User Roles & Access

### Students

- Create and manage profiles
- Search and view job postings
- Apply to positions
- Message employers
- Upload resumes and documents

### Employers

- Create company profiles
- Post job opportunities with rich text descriptions
- Search candidate profiles
- Message potential candidates
- Manage job postings

### Administrators

- Oversee all users and activities
- Manage platform content
- Monitor system usage
- Handle user support

## API Endpoints

### Authentication

- `POST /users/login` - User login
- `GET /users/logout` - User logout

### User Management

- `GET /users/students` - Retrieve students
- `GET /users/employers` - Retrieve employers
- `POST /users/students` - Create student profile
- `POST /users/employers` - Create employer profile

### Job Management

- `GET /users/empjobposts` - Get all job posts
- `POST /users/empjobposts` - Create job post
- `PUT /users/empjobpostsupdate/:id` - Update job post

### Messaging

- `POST /users/emppostjobcomments` - Post comments/messages

## Features

### Rich Text Job Posting

- Integrated Froala WYSIWYG editor
- Professional formatting capabilities
- Image and media support
- Mobile-responsive design

### Real-time Communication

- Direct messaging between users
- Comment system on job posts
- Notification system
- Message threading

### Advanced Search

- Filter by industry, skills, location
- Student/employer discovery
- Advanced matching algorithms

## Responsive Design

The application is fully responsive and works across:

- Desktop browsers
- Tablets
- Mobile devices
- Print layouts

## Future Enhancements

Potential improvements for future development:

- Real-time notifications (WebSocket)
- Advanced matching algorithms
- Video interview integration
- Mobile app development
- Social media integration
- Analytics dashboard

## Project Stats

- **Development Period**: April - June 2019
- **Team Size**: 5 developers
- **Total Commits**: 200+
- **Lines of Code**: 15,000+
- **Components**: 25+ Angular components
- **API Endpoints**: 20+ RESTful routes

## Educational Impact

This project served as our capstone at Southern Careers Institute, demonstrating:

- **Team Collaboration**: Git workflow with feature branches
- **Full-Stack Development**: End-to-end application development
- **Project Management**: Agile development practices
- **Problem Solving**: Real-world technical challenges
- **Professional Standards**: Code quality and documentation

## License

This project was developed for educational purposes at Southern Careers Institute.

## Contributing

This project represents our 2019 capstone work. For questions or discussions about the technical implementation, please reach out to the original team members.

## Contact

**Project Revival & Documentation**: Jose Salazar

- Email: <joesalaz.dev@gmail.com>
- LinkedIn: [linkedin.com/in/jose-salazar-a7103b1b7](https://linkedin.com/in/jose-salazar-a7103b1b7)
- GitHub: [github.com/joesalaz](https://github.com/joesalaz)

---

*This documentation was created in 2025 to preserve our 2019 capstone project work and document the ongoing modernization process. The original application represents the collaborative teamwork and full-stack development experience gained during our time at Southern Careers Institute.*
