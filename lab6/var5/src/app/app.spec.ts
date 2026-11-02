import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { App } from './app';
import { FieldForm } from './field-form/field-form';
import { PotatoFieldForm } from './potato-field-form/potato-field-form';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Лабораторна робота №6');
  });

  it('should show the combined yield after both forms calculate', () => {
    const fixture = TestBed.createComponent(App);
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
    expect(
      fixture.nativeElement.querySelector('.overall-result')?.textContent,
    ).toContain('36');
  });
});
