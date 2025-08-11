import { Component, Input } from '@angular/core';

/**
 * Reusable button component with consistent styling.
 * Supports different styles (primary/secondary) and sizes to keep
 * all buttons looking the same across the site.
 */
@Component({
  selector: 'app-action-button',
  standalone: true,
  imports: [],
  templateUrl: './action-button.component.html',
  styleUrl: './action-button.component.css'
})
export class ActionButtonComponent {
  @Input() text: string = '';
  @Input() variant: 'primary' | 'secondary' = 'primary';  // Button style
  @Input() size: 'normal' | 'large' = 'normal';           // Button size
  @Input() icon: string = '';                             // Optional Material icon
  @Input() href: string = '#';                            // Where the button goes
}
