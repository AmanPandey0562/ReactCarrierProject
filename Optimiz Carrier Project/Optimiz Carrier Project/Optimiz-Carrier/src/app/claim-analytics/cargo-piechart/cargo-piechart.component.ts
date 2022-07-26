import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
@Component({
  selector: 'app-cargo-piechart',
  templateUrl: './cargo-piechart.component.html',
  styleUrls: ['./cargo-piechart.component.css']
})
export class CargoPiechartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  salesData: ChartData<'doughnut'> = {
    datasets: [
      {
        label: 'Mobiles',
        data: [641, 641, 641, 641, 641, 641],
        backgroundColor: [
          '#45B7AF',
          ' #46b9b1',
          '#59c0b9',
          '#6bc7c1',
          '#7ecec9',
          ' #90d5d0',
        ],
      },
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
