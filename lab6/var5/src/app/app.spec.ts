import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should render navigation to Lab 6 and both array pages', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('nav a')).toHaveLength(3);
    expect(compiled.querySelector('nav a[href="/lab6"]')?.textContent)
      .toContain('Лабораторна робота №6');
  });

  it('should navigate to the previous lab and both array components', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const router = TestBed.inject(Router);

    await router.navigateByUrl('/lab6');
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('app-header h1')?.textContent)
      .toContain('Лабораторна робота №6');
    expect(fixture.nativeElement.querySelector('app-field-form')).toBeTruthy();

    await router.navigateByUrl('/array-one');
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('app-array-one')).toBeTruthy();

    await router.navigateByUrl('/array-two');
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('app-array-two')).toBeTruthy();
  });
});
