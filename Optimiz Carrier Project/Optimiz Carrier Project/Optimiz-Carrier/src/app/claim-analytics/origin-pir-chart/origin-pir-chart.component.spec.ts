import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginPirChartComponent } from './origin-pir-chart.component';

describe('OriginPirChartComponent', () => {
  let component: OriginPirChartComponent;
  let fixture: ComponentFixture<OriginPirChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OriginPirChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OriginPirChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
