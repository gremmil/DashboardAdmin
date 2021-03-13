import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ApexOptions, ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'app-graphic-dashboard-line-options',
  templateUrl: './graphic-dashboard-line-options.component.html',
  styleUrls: ['./graphic-dashboard-line-options.component.scss'],
})
export class GraphicDashboardLineOptionsComponent implements OnInit {

    // the default colorPalette for this dashboard
  //var colorPalette = ['#01BFD6', '#5564BE', '#F7A600', '#EDCD24', '#F74F58'];
  colorPalette = ['#00D8B6', '#008FFB', '#FEB019', '#FF4560', '#775DD0']
  @Input('mobile') mobile: boolean
  @ViewChild("chartLine") chart: ChartComponent;
  public chartOptions: ApexOptions;

  constructor() { }

  ngOnInit() {
    this.loadChart()
  }
  loadChart(){
    this.chartOptions = {
      chart: {
        height: 340,
        type: 'line',
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
      colors: this.colorPalette,
      series: [
        {
          name: "Day Time",
          data: this.trigoSeries(52, 20)
        },
        {
          name: "Night Time",
          data: this.trigoSeries(52, 27)
        },
      ],
      title: {
        floating: false,
        text: 'Customers',
        align: 'left',
        style: {
          fontSize: '18px'
        }
      },
      subtitle: {
        text: '168,215',
        align: 'center',
        margin: 30,
        offsetY: 40,
        style: {
          color: '#222',
          fontSize: '24px',
        }
      },
      markers: {
        size: 0
      },
      grid: {
    
      },
      xaxis: {
        labels: {
          show: false
        },
        axisTicks: {
          show: false
        },
        tooltip: {
          enabled: false
        }
      },
      yaxis: {
        tickAmount: 2,
        labels: {
          show: false
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false
        },
        min: 0,
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetY: -20,
        offsetX: -30
      }
    }
  }
  trigoSeries(cnt, strength) {
    let data = [];
    for (let i = 0; i < cnt; i++) {
        data.push((Math.sin(i / strength) * (i / strength) + i / strength+1) * (strength*2));
    }
  
    return data;
  }
}
