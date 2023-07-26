import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaretrackListItemComponent } from './caretrack-list-item.component';

describe('CaretrackListItemComponent', () => {
  let component: CaretrackListItemComponent;
  let fixture: ComponentFixture<CaretrackListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaretrackListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CaretrackListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
