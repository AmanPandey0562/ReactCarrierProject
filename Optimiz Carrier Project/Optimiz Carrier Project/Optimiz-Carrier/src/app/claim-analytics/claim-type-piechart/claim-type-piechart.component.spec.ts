import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimTypePiechartComponent } from './claim-type-piechart.component';

describe('ClaimTypePiechartComponent', () => {
  let component: ClaimTypePiechartComponent;
  let fixture: ComponentFixture<ClaimTypePiechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimTypePiechartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimTypePiechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
