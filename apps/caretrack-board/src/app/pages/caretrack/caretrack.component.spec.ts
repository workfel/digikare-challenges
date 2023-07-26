import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaretrackComponent } from './caretrack.component';

describe('CaretrackComponent', () => {
  let component: CaretrackComponent;
  let fixture: ComponentFixture<CaretrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaretrackComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CaretrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
