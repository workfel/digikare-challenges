import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaretracksComponent } from './caretracks.component';

describe('CaretracksComponent', () => {
  let component: CaretracksComponent;
  let fixture: ComponentFixture<CaretracksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaretracksComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CaretracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
