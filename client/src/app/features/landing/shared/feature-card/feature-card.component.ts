import { Component, Input } from '@angular/core';

/**
 * Reusable card component for displaying features.
 * Takes an icon, title, and description to create consistent cards
 * throughout the landing page.
 */
@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [],
  templateUrl: './feature-card.component.html',
  styleUrl: './feature-card.component.css'
})
export class FeatureCardComponent {
  @Input() icon: string = '';        // Material icon name (like 'search' or 'school')
  @Input() title: string = '';       // Feature headline
  @Input() description: string = ''; // Feature explanation
}
