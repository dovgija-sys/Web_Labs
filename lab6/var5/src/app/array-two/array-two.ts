import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ArrayTwo } from '../class/arrayTwo';

const MAX_DIMENSION = 20;

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-array-two',
  standalone: true,
  styleUrl: './array-two.css',
  templateUrl: './array-two.html',
})
export class ArrayTwoComponent {
  readonly form = new FormGroup({
    rows: new FormControl(5, {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.min(1),
        Validators.max(MAX_DIMENSION),
        Validators.pattern(/^\d+$/),
      ],
    }),
    columns: new FormControl(5, {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.min(1),
        Validators.max(MAX_DIMENSION),
        Validators.pattern(/^\d+$/),
      ],
    }),
  });

  result: ArrayTwo | null = null;

  generate(): void {
    if (this.form.invalid) {
      this.result = null;
      this.form.markAllAsTouched();
      return;
    }

    const { rows, columns } = this.form.getRawValue();
    this.result = new ArrayTwo();
    this.result.genArray(rows, columns);
  }
}
