import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as HighCharts from 'highcharts';
import * as HighStocks from 'highcharts/highstock';
import { Options } from "highcharts";

@Component({
  selector: 'app-detail-chart',
  templateUrl: './detail-chart.component.html',
  styleUrls: ['./detail-chart.component.scss']
})
export class DetailChartComponent implements OnInit {
  DetailChart: Options;

  @ViewChild('DetailChart', { static: false })  DetailChartEl: ElementRef;

  constructor(public el: ElementRef) { }

  ngOnInit() {

    this.DetailChart = {
      chart: {
        renderTo: 'growthChart',
        backgroundColor: '#ffffff'
      },
      navigation: {
        bindingsClassName: 'tools-container' 
      },
      credits: {
        enabled: false
      },
      rangeSelector: {
        enabled: false
      },
      legend: {
        enabled: false,
      },
    responsive: {
        rules: [{
          condition: {
            maxWidth: 700,
          },
          chartOptions: {
            legend: {
              layout: 'horizontal'}
   }
        }],
      },
      series: [{name: 'data',
      type: 'line',
      data: [43, 30, 45, 60, 52, 77, 69, 80, 20, 31, 25, 28, 31, 93, 37, 41],
        marker: {
          enabled: true,
          symbol: 'circle',
          radius: 6,
              lineColor: 'white',
              lineWidth: 2,
        }
    }
    ],
      plotOptions: {
        area:{
          showInLegend: false,
        },
        series: {
          states: {
            inactive: {
              opacity: 1
            }
          }
        }
      },
      xAxis: {
        gridLineWidth: 1,
        gridLineColor: 'transparent',
        visible: false,
          crosshair: {
          color: 'transparent',
        }
      },
        tooltip: {
                enabled: true,
        },
      scrollbar: { enabled: false },
      yAxis: {
        gridLineWidth: 1,
        offset: 40,
        visible: true,
      },
      navigator: {
        enabled: false
      }

    };
    HighStocks.stockChart('DetailChart', this.DetailChart);
  }

}
