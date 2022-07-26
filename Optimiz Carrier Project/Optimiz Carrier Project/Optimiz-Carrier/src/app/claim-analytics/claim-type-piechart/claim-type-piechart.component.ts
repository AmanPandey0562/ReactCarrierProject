import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
@Component({
  selector: 'app-claim-type-piechart',
  templateUrl: './claim-type-piechart.component.html',
  styleUrls: ['./claim-type-piechart.component.css']
})
export class ClaimTypePiechartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  salesData: ChartData<'doughnut'> = {
    
    datasets: [
      { label: 'Mobiles', data: [770,770,770,770,770, ],backgroundColor: ["#8b6ac8 ","#997dcf","#a88fd6","#b6a1dc","#c5b5e3"]},
      // { label: 'Laptop', data: [200, 100, 400, 50, 90]},
      // { label: 'AC', data: [500, 400, 350, 450, 650]  },
      // { label: 'Headset', data: [1200, 1500, 1020, 1600, 900] },
    ],
  };
  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: false,
        text: 'Monthly Sales Data',
      },
    },
  };

}
