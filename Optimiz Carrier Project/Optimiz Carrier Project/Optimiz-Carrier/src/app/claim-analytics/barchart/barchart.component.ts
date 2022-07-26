import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  salesData: ChartData<'line'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      { label: 'Mobiles', data: [35000,20000,35000,20000 ]   , backgroundColor: ["#55D8FE","#A3A0FB","#FFDA83","#FF8373"]},
      // { label: 'Laptop', data: [200, 100, 400, 50, 90]  },
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
