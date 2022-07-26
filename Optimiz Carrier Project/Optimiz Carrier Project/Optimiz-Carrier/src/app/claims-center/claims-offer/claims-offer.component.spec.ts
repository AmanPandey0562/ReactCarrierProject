import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('ClaimsOfferComponent', () => {
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
   
    })
    .compileComponents();

   
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
