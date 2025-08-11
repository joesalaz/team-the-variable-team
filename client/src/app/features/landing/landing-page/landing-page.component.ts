import { Component } from '@angular/core';
import { HeroSectionComponent } from '../components/hero-section/hero-section.component';
import { FeaturesGridComponent } from '../components/features-grid/features-grid.component';
import { StatsDisplayComponent } from '../components/stats-display/stats-display.component';
import { CallToActionComponent } from '../components/call-to-action/call-to-action.component';
import { LandingFooterComponent } from '../components/landing-footer/landing-footer.component';

/**
 * Main landing page that brings together all the sections.
 * Each section is its own component to keep code organized and reusable.
 * Header is now handled globally by app.component.
 */
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    HeroSectionComponent,
    FeaturesGridComponent,
    StatsDisplayComponent,
    CallToActionComponent,
    LandingFooterComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
