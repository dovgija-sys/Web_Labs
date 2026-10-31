import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Field } from '../class/field';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-field-form',
  styleUrl: './field-form.css',
  templateUrl: './field-form.html',
})
export class FieldForm {
  private fb = inject(FormBuilder);
  form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    r: [0, [Validators.required, Validators.min(0.01)]],
    k: [0, [Validators.required, Validators.min(0.01)]],
  });

  baseYield: number | null = null;

  calculate(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { name, r, k, } = this.form.getRawValue();
    const field = new Field(name, r, k);

    this.baseYield = field.getYield();
  }
}
