import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpClaimsComponent } from './pop-up-claims.component';

describe('PopUpClaimsComponent', () => {
  let component: PopUpClaimsComponent;
  let fixture: ComponentFixture<PopUpClaimsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpClaimsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
