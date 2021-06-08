import { Component, SimpleChanges, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as HighStocks from 'highcharts/highstock';
import { Options, SeriesAreaOptions } from 'highcharts/highstock';
import * as HighCharts from 'highcharts';
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  faFolderPlus = faFolderPlus;
growthChart: Options;
  @ViewChild('growthChart', { static: false })  growthChartEl: ElementRef;

  state = 'hide';

  cardData = [{
    cardHeading: 'Live conversation count',
    cardTotal: '32k',
    Id: '0',
    data : [{x: Date.UTC(2021,0,1), y: 35000},
      {x: Date.UTC(2021,1,1), y: 48000},
      {x: Date.UTC(2021,2,1), y: 25000},
      {x: Date.UTC(2021,3,1), y: 48000},
      {x: Date.UTC(2021,4,1), y: 60000}],
  },
  {
    cardHeading: 'Cc conversation count',
    cardTotal: '52k',
    Id: '1',
    data : [{x: Date.UTC(2021,0,1), y: 35000},
      {x: Date.UTC(2021,1,1), y: 48000},
      {x: Date.UTC(2021,2,1), y: 25000},
      {x: Date.UTC(2021,3,1), y: 48000},
      {x: Date.UTC(2021,4,1), y: 60000}],
  },
  {
    cardHeading: 'Ss conversation count',
    cardTotal: '42k',
    Id: '2',
    data : [{x: Date.UTC(2021,0,1), y: 35000},
      {x: Date.UTC(2021,1,1), y: 48000},
      {x: Date.UTC(2021,2,1), y: 25000},
      {x: Date.UTC(2021,3,1), y: 48000},
      {x: Date.UTC(2021,4,1), y: 60000}],

  },
  {
    cardHeading: 'Qq conversation count',
    cardTotal: '32k',
    Id: '3',
    data : [{x: Date.UTC(2021,0,1), y: 35000},
      {x: Date.UTC(2021,1,1), y: 48000},
      {x: Date.UTC(2021,2,1), y: 25000},
      {x: Date.UTC(2021,3,1), y: 48000},
      {x: Date.UTC(2021,4,1), y: 60000}],

  },
  {
    cardHeading: 'FG conversation count',
    cardTotal: '22k',
    Id: '4',
    data : [{x: Date.UTC(2021,0,1), y: 35000},
      {x: Date.UTC(2021,1,1), y: 48000},
      {x: Date.UTC(2021,2,1), y: 25000},
      {x: Date.UTC(2021,3,1), y: 48000},
      {x: Date.UTC(2021,4,1), y: 60000}],

  },
  {
    cardHeading: 'Hd conversation count',
    cardTotal: '12k',
    Id: '5',
    data : [{x: Date.UTC(2021,0,1), y: 35000},
      {x: Date.UTC(2021,1,1), y: 48000},
      {x: Date.UTC(2021,2,1), y: 25000},
      {x: Date.UTC(2021,3,1), y: 48000},
      {x: Date.UTC(2021,4,1), y: 60000}],

  }]

  constructor(public el: ElementRef ) {  }

  ngOnInit() {
       
    this.growthChart = {
      chart: {
        renderTo: "growthChart1" ,
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
      series: [{name: "growthChart",
      type: 'area',
      fillColor: {
        linearGradient: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 1
        },
        stops: [
          [0, HighCharts.getOptions().colors[0]],
          [1, HighCharts.color(HighCharts.getOptions().colors[0]).setOpacity(0).get('rgba').toString()]
        ]
      },
      data : [{x: Date.UTC(2021,0,1), y: 35000},
        {x: Date.UTC(2021,1,1), y: 48000},
        {x: Date.UTC(2021,2,1), y: 25000},
        {x: Date.UTC(2021,3,1), y: 48000},
        {x: Date.UTC(2021,4,1), y: 60000}],
       marker: {
        enabled: false,
        symbol: 'circle',
        radius: 0,
        states: {
          hover: {
           enabled: false
          }
        }
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
                enabled: false,
        },
      scrollbar: { enabled: false },
      yAxis: {
        offset: 40,
        gridLineColor: 'transparent',
        visible: false,
      },
      navigator: {
        enabled: false
      }

    };
    HighStocks.stockChart('growthChart1', this.growthChart);

    this.growthChart = {
      chart: {
        renderTo: "growthChart2" ,
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
      series: [{name: "growthChart",
      type: 'area',
      fillColor: {
        linearGradient: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 1
        },
        stops: [
          [0, HighCharts.getOptions().colors[0]],
          [1, HighCharts.color(HighCharts.getOptions().colors[0]).setOpacity(0).get('rgba').toString()]
        ]
      },
      data : [{x: Date.UTC(2021,0,1), y: 35000},
        {x: Date.UTC(2021,1,1), y: 48000},
        {x: Date.UTC(2021,2,1), y: 25000},
        {x: Date.UTC(2021,3,1), y: 48000},
        {x: Date.UTC(2021,4,1), y: 60000}],
       marker: {
        enabled: false,
        symbol: 'circle',
        radius: 0,
        states: {
          hover: {
           enabled: false
          }
        }
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
                enabled: false,
        },
      scrollbar: { enabled: false },
      yAxis: {
        offset: 40,
        gridLineColor: 'transparent',
        visible: false,
      },
      navigator: {
        enabled: false
      }

    };
    HighStocks.stockChart('growthChart2', this.growthChart);


    this.growthChart = {
      chart: {
        renderTo: "growthChart3" ,
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
      series: [{name: "growthChart",
      type: 'area',
      fillColor: {
        linearGradient: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 1
        },
        stops: [
          [0, HighCharts.getOptions().colors[0]],
          [1, HighCharts.color(HighCharts.getOptions().colors[0]).setOpacity(0).get('rgba').toString()]
        ]
      },
      data : [{x: Date.UTC(2021,0,1), y: 35000},
        {x: Date.UTC(2021,1,1), y: 48000},
        {x: Date.UTC(2021,2,1), y: 25000},
        {x: Date.UTC(2021,3,1), y: 48000},
        {x: Date.UTC(2021,4,1), y: 60000}],
       marker: {
        enabled: false,
        symbol: 'circle',
        radius: 0,
        states: {
          hover: {
           enabled: false
          }
        }
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
                enabled: false,
        },
      scrollbar: { enabled: false },
      yAxis: {
        offset: 40,
        gridLineColor: 'transparent',
        visible: false,
      },
      navigator: {
        enabled: false
      }

    };
    HighStocks.stockChart('growthChart3', this.growthChart);


    this.growthChart = {
      chart: {
        renderTo: "growthChart4" ,
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
      series: [{name: "growthChart",
      type: 'area',
      fillColor: {
        linearGradient: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 1
        },
        stops: [
          [0, HighCharts.getOptions().colors[0]],
          [1, HighCharts.color(HighCharts.getOptions().colors[0]).setOpacity(0).get('rgba').toString()]
        ]
      },
      data : [{x: Date.UTC(2021,0,1), y: 35000},
        {x: Date.UTC(2021,1,1), y: 48000},
        {x: Date.UTC(2021,2,1), y: 25000},
        {x: Date.UTC(2021,3,1), y: 48000},
        {x: Date.UTC(2021,4,1), y: 60000}],
       marker: {
        enabled: false,
        symbol: 'circle',
        radius: 0,
        states: {
          hover: {
           enabled: false
          }
        }
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
                enabled: false,
        },
      scrollbar: { enabled: false },
      yAxis: {
        offset: 40,
        gridLineColor: 'transparent',
        visible: false,
      },
      navigator: {
        enabled: false
      }

    };
    HighStocks.stockChart('growthChart4', this.growthChart);


    this.growthChart = {
      chart: {
        renderTo: "growthChart5" ,
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
      series: [{name: "growthChart",
      type: 'area',
      fillColor: {
        linearGradient: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 1
        },
        stops: [
          [0, HighCharts.getOptions().colors[0]],
          [1, HighCharts.color(HighCharts.getOptions().colors[0]).setOpacity(0).get('rgba').toString()]
        ]
      },
      data : [{x: Date.UTC(2021,0,1), y: 35000},
        {x: Date.UTC(2021,1,1), y: 48000},
        {x: Date.UTC(2021,2,1), y: 25000},
        {x: Date.UTC(2021,3,1), y: 48000},
        {x: Date.UTC(2021,4,1), y: 60000}],
       marker: {
        enabled: false,
        symbol: 'circle',
        radius: 0,
        states: {
          hover: {
           enabled: false
          }
        }
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
                enabled: false,
        },
      scrollbar: { enabled: false },
      yAxis: {
        offset: 40,
        gridLineColor: 'transparent',
        visible: false,
      },
      navigator: {
        enabled: false
      }

    };
    HighStocks.stockChart('growthChart5', this.growthChart);


    this.growthChart = {
      chart: {
        renderTo: "growthChart6" ,
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
      series: [{name: "growthChart",
      type: 'area',
      fillColor: {
        linearGradient: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 1
        },
        stops: [
          [0, HighCharts.getOptions().colors[0]],
          [1, HighCharts.color(HighCharts.getOptions().colors[0]).setOpacity(0).get('rgba').toString()]
        ]
      },
      data : [{x: Date.UTC(2021,0,1), y: 35000},
        {x: Date.UTC(2021,1,1), y: 48000},
        {x: Date.UTC(2021,2,1), y: 25000},
        {x: Date.UTC(2021,3,1), y: 48000},
        {x: Date.UTC(2021,4,1), y: 60000}],
       marker: {
        enabled: false,
        symbol: 'circle',
        radius: 0,
        states: {
          hover: {
           enabled: false
          }
        }
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
                enabled: false,
        },
      scrollbar: { enabled: false },
      yAxis: {
        offset: 40,
        gridLineColor: 'transparent',
        visible: false,
      },
      navigator: {
        enabled: false
      }

    };
    HighStocks.stockChart('growthChart6', this.growthChart);

 
  }

  
}
