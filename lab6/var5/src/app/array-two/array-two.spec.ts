import { TestBed } from '@angular/core/testing';
import { ArrayTwoComponent } from './array-two';

describe('ArrayTwoComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayTwoComponent],
    }).compileComponents();
  });

  it('creates a matrix of the requested dimensions and reports multiples of five', () => {
    const fixture = TestBed.createComponent(ArrayTwoComponent);
    const component = fixture.componentInstance;

    component.form.setValue({ rows: 3, columns: 4 });
    component.generate();
    fixture.detectChanges();

    expect(component.result?.values).toHaveLength(3);
    expect(component.result?.values.every((row) => row.length === 4)).toBe(true);
    expect(
      Array.from(
        (fixture.nativeElement as HTMLElement).querySelectorAll('thead th'),
      ).map((header) => header.textContent?.trim()),
    ).toEqual(['#', '1', '2', '3', '4']);
    expect(
      Array.from(
        (fixture.nativeElement as HTMLElement).querySelectorAll('tbody th[scope="row"]'),
      ).map((header) => header.textContent?.trim()),
    ).toEqual(['1', '2', '3']);
    expect(component.result?.multiples_of_5.every((value) => value % 5 === 0)).toBe(true);
    expect(component.result?.multiples_of_5).toHaveLength(component.result?.indexesI.length ?? 0);
    expect(component.result?.multiples_of_5).toHaveLength(component.result?.indexesJ.length ?? 0);

    component.result?.multiples_of_5.forEach((value, index) => {
      const rowIndex = component.result?.indexesI[index];
      const columnIndex = component.result?.indexesJ[index];
      expect(rowIndex).toBeDefined();
      expect(columnIndex).toBeDefined();
      expect(component.result?.values[rowIndex ?? -1][columnIndex ?? -1]).toBe(value);
    });
  });

  it('rejects non-positive, out-of-range, and fractional dimensions', () => {
    const fixture = TestBed.createComponent(ArrayTwoComponent);
    const component = fixture.componentInstance;

    component.form.setValue({ rows: 0, columns: 4 });
    component.generate();
    expect(component.result).toBeNull();
    fixture.detectChanges();
    expect((fixture.nativeElement as HTMLElement).querySelector('button')?.hasAttribute('disabled')).toBe(true);

    component.form.setValue({ rows: 21, columns: 4 });
    component.generate();
    expect(component.result).toBeNull();

    component.form.setValue({ rows: 2.5, columns: 4 });
    component.generate();
    expect(component.result).toBeNull();
  });
});
