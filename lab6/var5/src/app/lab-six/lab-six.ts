import { Component } from '@angular/core';
import { FieldForm } from '../field-form/field-form';
import { Header } from '../header/header';
import { PotatoFieldForm } from '../potato-field-form/potato-field-form';

@Component({
  imports: [Header, FieldForm, PotatoFieldForm],
  selector: 'app-lab-six',
  styleUrl: '../app.css',
  templateUrl: './lab-six.html',
})
export class LabSixComponent {
  private fieldYield: number | null = null;
  private potatoFieldYield: number | null = null;
  sumYield: number | null = null;

  setFieldYield(value: number): void {
    this.fieldYield = value;
    this.updateSum();
  }

  setPotatoFieldYield(value: number): void {
    this.potatoFieldYield = value;
    this.updateSum();
  }

  private updateSum(): void {
    this.sumYield =
      this.fieldYield === null || this.potatoFieldYield === null
        ? null
        : this.fieldYield + this.potatoFieldYield;
  }
}
