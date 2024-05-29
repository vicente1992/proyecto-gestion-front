import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-grant',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>grant works!</p>`,
  styleUrl: './grant.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class GrantComponent { }
