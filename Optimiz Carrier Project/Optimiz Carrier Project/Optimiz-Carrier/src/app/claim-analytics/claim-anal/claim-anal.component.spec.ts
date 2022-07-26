import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimAnalComponent } from './claim-anal.component';

describe('ClaimAnalComponent', () => {
  let component: ClaimAnalComponent;
  let fixture: ComponentFixture<ClaimAnalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimAnalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimAnalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
