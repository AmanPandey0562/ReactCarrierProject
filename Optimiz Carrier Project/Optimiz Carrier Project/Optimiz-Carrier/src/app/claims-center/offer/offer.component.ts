import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions, ChartData } from 'chart.js';     

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  flag:boolean=false
  acceptOfferFlag:boolean=false
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.flag=!this.flag;
  }

  acceptOffer(){
    this.acceptOfferFlag=!this.acceptOfferFlag
  }

  salesData: ChartData<'bar'> = {
    
    datasets: [{
      label: 'My First Dataset',
      data: [72, 150],
      backgroundColor: [
        'rgb(0,191,255)',
        'rgb(135,206,250)'
      ],
      // hoverOffset: 4
    }],
  };
  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
      },
    },
  };
}

