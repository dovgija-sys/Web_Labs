import { Component, inject, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Field } from '../class/field';
import { PotatoField } from '../class/potato-field';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-potato-field-form',
  styleUrl: './potato-field-form.css',
  templateUrl: './potato-field-form.html',
})
export class PotatoFieldForm {
  yieldCalculated = output<number>();

  private fb = inject(FormBuilder);
  form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    r: [0, [Validators.required, Validators.min(0.01)]],
    k: [0, [Validators.required, Validators.min(0.01)]],
    S: [0, [Validators.required, Validators.min(0.01)]],
  });

  baseYield: number | null = null;
  totalYield: number | null = null;

  calculate(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { name, r, k, S } = this.form.getRawValue();
    const field = new Field(name, r, k);
    const potatoField = new PotatoField(name, r, k, S);

    this.baseYield = field.getYield();
    this.totalYield = potatoField.getYield();
    this.yieldCalculated.emit(this.totalYield);
  }
}
