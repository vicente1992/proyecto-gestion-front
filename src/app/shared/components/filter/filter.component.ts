import { CommonModule } from '@angular/common';
import { Component, Signal, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { LevelEducation } from '@features/admin/grant/shared/leve-education';
import { LevelEducationService } from '@features/admin/grant/shared/services/level-education.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
  providers: [LevelEducationService]
})
export class FilterComponent {
  #levelEducationService = inject(LevelEducationService);

  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    levelEducation: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
  });


  #levelsEducations$: Observable<LevelEducation[]> = this.#levelEducationService.getAll();

  levelsEducations: Signal<LevelEducation[]> = toSignal(this.#levelsEducations$, { initialValue: [] });
}
