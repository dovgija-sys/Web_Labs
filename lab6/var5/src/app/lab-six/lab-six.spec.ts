import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FieldForm } from '../field-form/field-form';
import { PotatoFieldForm } from '../potato-field-form/potato-field-form';
import { LabSixComponent } from './lab-six';

describe('LabSixComponent', () => {
  it('keeps the previous lab calculations and shows their combined result', async () => {
    await TestBed.configureTestingModule({
      imports: [LabSixComponent],
    }).compileComponents();

    const fixture = TestBed.createComponent(LabSixComponent);
    const fieldForm = fixture.debugElement.query(By.directive(FieldForm))
      .componentInstance as FieldForm;
    const potatoFieldForm = fixture.debugElement.query(By.directive(PotatoFieldForm))
      .componentInstance as PotatoFieldForm;

    fieldForm.form.setValue({ name: 'Північне', r: 4, k: 3 });
    fieldForm.calculate();
    expect(fixture.componentInstance.sumYield).toBeNull();

    potatoFieldForm.form.setValue({ name: 'Південне', r: 4, k: 3, S: 2 });
    potatoFieldForm.calculate();
    fixture.detectChanges();

    expect(fixture.componentInstance.sumYield).toBe(36);
    expect(fixture.nativeElement.querySelector('.overall-result')?.textContent)
      .toContain('36');
  });
});
