import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Grant } from '@shared/models/grant';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {


  login = output<Partial<Grant>>();

  form: FormGroup = new FormGroup({
    title: new FormControl('',),
    type: new FormControl(''),
    requirements: new FormControl(''),
  });


  onSubmit() {
    this.login.emit(this.form.value);
    console.log('Value--->', this.form.value);

  }
}
