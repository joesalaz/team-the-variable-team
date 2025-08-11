import { Component } from '@angular/core';
import { FeatureCardComponent } from '../../shared/feature-card/feature-card.component';

/**
 * Features section that showcases the main benefits of the platform.
 * Uses the reusable feature-card component to display each feature
 * in a responsive grid layout.
 */
@Component({
  selector: 'app-features-grid',
  standalone: true,
  imports: [FeatureCardComponent],
  templateUrl: './features-grid.component.html',
  styleUrl: './features-grid.component.css'
})
export class FeaturesGridComponent {

}
