import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ApexOptions, ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'app-graphic-dashboard-area',
  templateUrl: './graphic-dashboard-area.component.html',
  styleUrls: ['./graphic-dashboard-area.component.scss'],
})
export class GraphicDashboardAreaComponent implements OnInit {

  // the default colorPalette for this dashboard
  //var colorPalette = ['#01BFD6', '#5564BE', '#F7A600', '#EDCD24', '#F74F58'];
  colorPalette = ['#00D8B6', '#008FFB', '#FEB019', '#FF4560', '#775DD0']
  @Input('mobile') mobile: boolean
  @ViewChild("chartArea") chart: ChartComponent;
  public chartOptions: ApexOptions;

  constructor() { }

  ngOnInit() {
    this.loadChart()
   }

  loadChart() {
    this.chartOptions = {
      chart: {
        height: 340,
        type: 'area',
        selection: {
          enabled: true
        },
        zoom: {
          enabled: true
        },
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {
            download: true,
            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: true,
            reset: true,
            customIcons: []
          },
          export: {
            csv: {
              filename: undefined,
              columnDelimiter: ',',
              headerCategory: 'category',
              headerValue: 'value',
              dateFormatter(timestamp) {
                return new Date(timestamp).toDateString()
              }
            },
            svg: {
              filename: undefined,
            },
            png: {
              filename: undefined,
            }
          },
          autoSelected: 'zoom' 
        }
      },
      stroke: {
        curve: 'straight'
      },
      colors: this.colorPalette,
      series: [
        {
          name: "Blog",
          data: [{
            x: 0,
            y: 0
          }, {
            x: 4,
            y: 5
          }, {
            x: 5,
            y: 3
          }, {
            x: 9,
            y: 8
          }, {
            x: 14,
            y: 4
          }, {
            x: 18,
            y: 5
          }, {
            x: 25,
            y: 0
          }]
        },
        {
          name: "Social Media",
          data: [{
            x: 0,
            y: 0
          }, {
            x: 4,
            y: 6
          }, {
            x: 5,
            y: 4
          }, {
            x: 14,
            y: 8
          }, {
            x: 18,
            y: 5.5
          }, {
            x: 21,
            y: 6
          }, {
            x: 25,
            y: 0
          }]
        },
        {
          name: "External",
          data: [{
            x: 0,
            y: 0
          }, {
            x: 2,
            y: 5
          }, {
            x: 5,
            y: 4
          }, {
            x: 10,
            y: 11
          }, {
            x: 14,
            y: 4
          }, {
            x: 18,
            y: 8
          }, {
            x: 25,
            y: 0
          }]
        }
      ],
      fill: {
        opacity: 1,
      },
      title: {
        text: 'Daily Visits Insights',
        align: 'left',
        style: {
          fontSize: '18px'
        }
      },
      markers: {
        size: 0
      },
      tooltip: {
        intersect: true,
        shared: false,
      },
      xaxis: {
        tooltip: {
          enabled: false
        },
        labels: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        tickAmount: 4,
        max: 12,
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            colors: '#78909c'
          }
        }
      },
      legend: {
        show: false
      }
    }
  }


}
