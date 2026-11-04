import { TestBed } from '@angular/core/testing';
import { ArrayOneComponent } from './array-one';

describe('ArrayOneComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayOneComponent],
    }).compileComponents();
  });

  it('generates the requested number of values and their doubles', () => {
    const fixture = TestBed.createComponent(ArrayOneComponent);
    const component = fixture.componentInstance;

    component.form.controls.length.setValue(4);
    component.generate();

    expect(component.result?.values).toHaveLength(4);
    expect(component.result?.values_multiple_2).toEqual(
      component.result?.values.map((value) => value * 2),
    );
  });

  it('rejects invalid and fractional lengths, and starts fresh on regeneration', () => {
    const fixture = TestBed.createComponent(ArrayOneComponent);
    const component = fixture.componentInstance;

    component.form.controls.length.setValue(0);
    component.generate();
    expect(component.result).toBeNull();
    fixture.detectChanges();
    expect((fixture.nativeElement as HTMLElement).querySelector('button')?.hasAttribute('disabled')).toBe(true);

    component.form.controls.length.setValue(1.5);
    component.generate();
    expect(component.result).toBeNull();

    component.form.controls.length.setValue(2);
    component.generate();
    expect(component.result?.values).toHaveLength(2);
    component.form.controls.length.setValue(0);
    component.generate();
    expect(component.result).toBeNull();

    component.form.controls.length.setValue(2);
    component.generate();
    component.form.controls.length.setValue(1);
    component.generate();
    expect(component.result?.values).toHaveLength(1);
    expect(component.result?.values_multiple_2).toHaveLength(1);
  });
});
