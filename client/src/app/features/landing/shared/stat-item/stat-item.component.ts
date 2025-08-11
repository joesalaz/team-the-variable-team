import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stat-item',
  standalone: true,
  imports: [],
  templateUrl: './stat-item.component.html',
  styleUrl: './stat-item.component.css'
})
export class StatItemComponent {
  @Input() number: string = '';
  @Input() label: string = '';
}
