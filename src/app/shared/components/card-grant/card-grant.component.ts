import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Grant } from '@shared/models/grant';

@Component({
  selector: 'app-card-grant',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './card-grant.component.html',
  styleUrl: './card-grant.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardGrantComponent {
  grant = input.required<Grant>();
}
