import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  salesData: ChartData<'doughnut'> = {
    
    datasets: [
      { label: 'Mobiles', data: [480,480,480,480,480,480,480,480 ],backgroundColor: [" #1a75ff"," #1a75ff","#3385ff"," #4d94ff","#66a3ff","#80b3ff"," #99c2ff","#b3d1ff"]},
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
