import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedOfferComponent } from './accepted-offer.component';

describe('AcceptedOfferComponent', () => {
  let component: AcceptedOfferComponent;
  let fixture: ComponentFixture<AcceptedOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptedOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptedOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
