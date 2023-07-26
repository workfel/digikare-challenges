import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaretrackCardComponent } from './caretrack-card.component';

describe('CaretrackCardComponent', () => {
  let component: CaretrackCardComponent;
  let fixture: ComponentFixture<CaretrackCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaretrackCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CaretrackCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
