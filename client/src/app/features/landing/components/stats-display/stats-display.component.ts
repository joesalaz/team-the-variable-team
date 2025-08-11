import { Component } from '@angular/core';
import { StatItemComponent } from '../../shared/stat-item/stat-item.component';

@Component({
  selector: 'app-stats-display',
  standalone: true,
  imports: [StatItemComponent],
  templateUrl: './stats-display.component.html',
  styleUrl: './stats-display.component.css'
})
export class StatsDisplayComponent {

}
