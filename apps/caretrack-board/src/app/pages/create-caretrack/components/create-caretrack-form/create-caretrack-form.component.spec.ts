import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateCaretrackFormComponent } from './create-caretrack-form.component';

describe('CreateCaretrackFormComponent', () => {
  let component: CreateCaretrackFormComponent;
  let fixture: ComponentFixture<CreateCaretrackFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCaretrackFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCaretrackFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
