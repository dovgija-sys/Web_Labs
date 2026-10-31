import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PotatoFieldForm } from './potato-field-form';

describe('PotatoFieldForm', () => {
  let component: PotatoFieldForm;
  let fixture: ComponentFixture<PotatoFieldForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PotatoFieldForm],
    }).compileComponents();

    fixture = TestBed.createComponent(PotatoFieldForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
