# Landing Page Feature

## Overview

Professional landing page for anonymous users visiting the site. Replaces the old direct-to-login approach with proper marketing and user onboarding.

## Structure

```landing/
|-- landing-page/          # Main container component
|-- components/            # Page sections
    |-- landing-header/    # Navigation for non-logged-in users
    |-- hero-section/      # Main headline and CTAs
    |-- features-grid/     # Why choose us section
    |-- stats-display/     # Social proof numbers
    |-- call-to-action/    # Final conversion section
    |-- landing-footer/    # Links and company info
|-- shared/               # Reusable components
    |-- feature-card/     # Individual feature display
    |-- stat-item/        # Individual statistic
    |-- action-button/    # Consistent button styling
```

## Design Approach

- **Modular Components**: Each section is separate for easy maintenance
- **Reusable Elements**: Cards and buttons can be used elsewhere in the app
- **Material Design**: Clean, professional styling
- **Mobile Responsive**: Works on all screen sizes

## Key Features

- Modern Angular 19 standalone components
- CSS Grid for responsive layouts
- Material Icons integration
- Professional color scheme and typography
- Conversion-focused user flow (Student -> Find Jobs, Employer -> Post Jobs)

## Usage

The landing page is set as the default route (`/`) and replaces the old login-first approach with proper user onboarding.
