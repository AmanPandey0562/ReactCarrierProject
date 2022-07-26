import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadgeClaimComponent } from './loadge-claim.component';

describe('LoadgeClaimComponent', () => {
  let component: LoadgeClaimComponent;
  let fixture: ComponentFixture<LoadgeClaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadgeClaimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadgeClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
