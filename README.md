# Employment Seeking Application - Team "The Variable Team"

**Live Demo**: [Coming Soon - Deployment in Progress]

---

## 2025 Modernization Project

I'm bringing this old capstone project up to modern standards since the dependencies are way out of date and some have security issues.

### Modernization Progress

- **Started with**: 2019 Angular 7 app with tons of outdated dependencies
- **Upgrading to**: Modern Angular 18+ with current security patches
- **Current status**: Planning done, starting the actual updates
- **Plan details**: [Full Modernization Plan](./MODERNIZATION-PLAN-2025.md)

### What I'm updating

- Angular 7.2.15 → Angular 18+ (pretty big jump)
- TypeScript 3.2.2 → TypeScript 5.x (way better type checking)
- Protractor (dead) → Cypress (actually maintained)
- TSLint (also dead) → ESLint (current standard)
- Fixed 40+ security vulnerabilities in old packages

---

## About This Project

A full-stack employment platform we built for our capstone project at Southern Careers Institute back in 2019. It connects students looking for jobs with employers who are hiring.

## What It Does

- **User accounts**: Students, employers, and admins can all sign up and log in
- **Job postings**: Employers can post jobs with a rich text editor
- **Messaging**: Direct messages between employers and students
- **Profiles**: Both students and employers have profile pages
- **Search**: Find jobs or candidates with filters
- **Admin panel**: Admin users can manage everything
- **File uploads**: Students can upload resumes

## Team "The Variable Team"

### Jose Salazar - Full-Stack Developer

I did most of the backend work and some frontend components:

- **Login system**: Set up Passport.js with password encryption
- **Job posting**: Built the whole job posting system with Froala editor
- **Messaging**: Created the messaging system between users
- **Security fixes**: Fixed some issues where users could access other people's profiles
- **Components**: Made reusable Angular components for displaying user lists
- **Database**: Set up all the Sequelize models and relationships

Some of my commits:

- "Implemented Authentication to encrypt passwords, check usernames and passwords for proper login and profile routing"
- "Added messaging between users, created message-dialog component"
- "created employers list component to display employers to the student, created emp-job-post-view component"
- "Fixes for security issue... When a user could navigate to any user profile page by replacing id number in the url"

### JMatthiasH

- Managed the project and coordinated between team members
- Set up database config and deployment
- Worked on UI styling and routing

### CarolineMacarius

- Built the admin dashboard and user management
- Worked on CSS styling and layouts

### cortngiles13

- Created the student profile system and signup flow
- Contributed to database models

### flesh-atoms

- Designed the database schema and relationships
- Optimized data structures

## Tech Stack

### Frontend

- Angular 7+ with TypeScript
- Bootstrap 4 for styling
- Froala WYSIWYG Editor for rich text
- Font Awesome icons
- Angular Material components

### Backend

- Node.js with Express
- Passport.js for login
- Express-session for user sessions
- REST API endpoints

### Database

- SQLite database
- Sequelize ORM
- Models for users, job posts, messages, etc.

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

```text
team-the-variable-team/
|-- client/                     # Angular frontend
    |-- src/
        |-- app/
            |-- admin/         # Admin components
            |-- employer/      # Employer components
            |-- student/       # Student components
            |-- services/      # Angular services
            |-- core/          # Shared components
        |-- assets/            # Static assets
|-- models/                     # Sequelize models
|-- routes/                     # Express routes
|-- config/                     # Configuration files
|-- bin/                        # Server startup
|-- package.json               # Dependencies
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

*This documentation was created in 2025 to preserve and showcase our 2019 capstone project work. The application demonstrates the full-stack development skills and collaborative teamwork learned during my time at Southern Careers Institute.*
