import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateCaretrackComponent } from './create-caretrack.component';

describe('CreateCaretrackComponent', () => {
  let component: CreateCaretrackComponent;
  let fixture: ComponentFixture<CreateCaretrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCaretrackComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCaretrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
