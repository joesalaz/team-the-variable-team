# Employment Seeking Application - Team "The Variable Team"

**Live Demo**: [Coming Soon - Deployment in Progress]

---

## 2025 Modernization Project

I successfully brought this 2019 capstone project up to modern standards. The app is now running on Angular 19 with all current dependencies and security patches.

### Modernization Completed

- **Started with**: 2019 Angular 7 app with 40+ security vulnerabilities
- **Successfully upgraded to**: Angular 19.0.0 with modern tooling
- **Completion date**: August 10, 2025
- **Status**: Fully functional on Angular 19
- **Documentation**: [Complete Modernization Progress](./MODERNIZATION-PROGRESS.md)

### Major Updates Completed

- Angular 7.2.15 -> Angular 19.0.0 (major version jump)
- TypeScript 3.2.2 -> TypeScript 5.7.0 (much better type checking)  
- Protractor (deprecated) -> Cypress 13.17.0 (modern testing)
- TSLint (deprecated) -> ESLint 9.18.0 (current standard)
- All 40+ security vulnerabilities resolved
- Modern HTTP client with provideHttpClient()
- Updated Angular Material and NgBootstrap
- Fixed case sensitivity issues across database and frontend
- Resolved modal z-index conflicts

### Strategic Approach

The key breakthrough was understanding that Angular 19 defaults components to `standalone: true`, which broke all existing components. Instead of rewriting the entire app, I added `standalone: false` to all 50+ components to maintain compatibility while setting up a foundation for gradual modernization to standalone architecture later.

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

- Angular 19.0.0 with TypeScript 5.7.0
- Bootstrap 4 for styling  
- Froala WYSIWYG Editor for rich text
- Font Awesome icons
- Angular Material 19.0.0 components
- NgBootstrap 18.0.0

### Backend

- Node.js with Express
- Passport.js for authentication
- Express-session for user sessions
- REST API endpoints

### Database

- SQLite database
- Sequelize ORM
- Models for users, job posts, messages, etc.

### Development Tools

- **Testing**: Karma + Jasmine 5.4.0
- **E2E Testing**: Cypress 13.17.0 (migrated from Protractor)
- **Linting**: ESLint 9.18.0 (migrated from TSLint)
- **Build**: Angular CLI 19.0.0
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

## License & Philosophy

### Why AGPL v3 with Anti-Predatory Protections?

This project is licensed under **GNU Affero General Public License v3.0** with additional anti-predatory clauses. Here's why:

#### The Original Vision

When our team built this platform in 2019, our goal was to create something that could genuinely help students like ourselves. We wanted to build a platform that would:

- **Showcase our learned skills** to potential employers
- **Connect students with real opportunities** in web and software development
- **Provide a practical tool** that addresses the real struggles of students entering the workforce
- **Demonstrate our capability** to build production-ready applications

#### Protecting the Mission

As I am moderniing this project in 2025, I realized that student job platforms are prime targets for predatory business models. Too many platforms exploit desperate students with:

- "Free" job searching that turns into premium subscription traps
- Charges for applying to jobs (when applications should always be free)
- Advertisement-heavy platforms that prioritize profit over student success
- Hidden fees that kick in just when students need the platform most

#### The Solution: Strong Copyleft Protection

**AGPL v3 ensures that anyone using this code must:**

- **Open-source their entire platform** (including web services)
- **Keep all student-facing features free** (commercial exploitation is discouraged)
- **Contribute improvements back** to the community
- **Maintain transparency** about their business model

#### What This Means for Students and Developers

**For Students:** Any platform built from this code must remain transparent and student-focused.

**For Developers:** You're welcome to learn from, improve, and build upon this work for:

- Educational projects and portfolios
- Non-profit job placement services  
- Open-source contributions
- Research and academic use

**For Employers:** This demonstrates our commitment to ethical software development and protecting end users.

**For Investors/Companies:** If you want to build a commercial platform using this code, you must open-source your entire operation - which naturally discourages predatory business models.

#### The Bottom Line

This license choice reflects our values: **technology should serve students, not exploit them.** The job search process is stressful enough without platforms that prey on desperation.

By choosing AGPL v3, we ensure this code contributes to a more ethical job market for students in tech.

### License Details

See [LICENSE.md](./LICENSE.md) for complete licensing terms and anti-predatory protections.

## Contributing

This project represents our 2019 capstone work. For questions or discussions about the technical implementation, please reach out to the original team members.

## Contact

**Project Revival & Documentation**: Jose Salazar

- Email: <JSalazar.dev@outlook.com>
- LinkedIn: [linkedin.com/in/jose-salazar-a7103b1b7](https://linkedin.com/in/jose-salazar-a7103b1b7)
- GitHub: [github.com/joesalaz](https://github.com/joesalaz)

---

*This documentation was created in 2025 to preserve and showcase our 2019 capstone project work. The application demonstrates the full-stack development skills and collaborative teamwork learned during my time at Southern Careers Institute.*
