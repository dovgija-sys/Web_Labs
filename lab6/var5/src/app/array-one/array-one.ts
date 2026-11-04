import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ArrayOne } from '../class/arrayOne';

const MAX_ARRAY_LENGTH = 100;

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-array-one',
  standalone: true,
  styleUrl: './array-one.css',
  templateUrl: './array-one.html',
})
export class ArrayOneComponent {
  readonly form = new FormGroup({
    length: new FormControl(10, {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.min(1),
        Validators.max(MAX_ARRAY_LENGTH),
        Validators.pattern(/^\d+$/),
      ],
    }),
  });

  result: ArrayOne | null = null;

  get lengthControl(): FormControl<number> {
    return this.form.controls.length;
  }

  generate(): void {
    if (this.form.invalid) {
      this.result = null;
      this.form.markAllAsTouched();
      return;
    }

    this.result = new ArrayOne();
    this.result.genArray(this.lengthControl.value);
  }
}
