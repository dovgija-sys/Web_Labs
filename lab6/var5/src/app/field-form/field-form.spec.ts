import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FieldForm } from './field-form';

describe('FieldForm', () => {
  let component: FieldForm;
  let fixture: ComponentFixture<FieldForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldForm],
    }).compileComponents();

    fixture = TestBed.createComponent(FieldForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate the yield for one unit of a regular field', () => {
    component.form.setValue({ name: 'Північне', r: 4, k: 3 });

    component.calculate();

    expect(component.baseYield).toBe(12);
  });

  it('should not calculate with invalid values and should mark fields as touched', () => {
    component.calculate();

    expect(component.baseYield).toBeNull();
    expect(component.form.controls.name.touched).toBe(true);
    expect(component.form.controls.r.touched).toBe(true);
  });
});
