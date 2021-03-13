import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ApexLegend, ApexOptions, ApexPlotOptions, ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'app-graphic-donut',
  templateUrl: './graphic-donut.component.html',
  styleUrls: ['./graphic-donut.component.scss'],
})
export class GraphicDonutComponent implements OnInit {

  // the default colorPalette for this dashboard
  //var colorPalette = ['#01BFD6', '#5564BE', '#F7A600', '#EDCD24', '#F74F58'];
  colorPalette = ['#00D8B6', '#008FFB', '#FEB019', '#FF4560', '#775DD0']
  @Input('mobile') mobile: boolean
  @ViewChild("chartDonut") chart: ChartComponent;
  public chartOptions: ApexOptions;

  public plotOptions: ApexPlotOptions
  public legendOptions: ApexLegend

  constructor() { }

  ngOnInit() {
    if (this.mobile) {
      this.plotOptions = {
        pie: {
          customScale: 1,
          donut: {
            size: '75%',
          },
          offsetY: 20,
        }
      }
      this.legendOptions = {
        position: 'bottom'
      }
    } else {
      this.plotOptions = {
        pie: {
          customScale: 0.8,
          donut: {
            size: '75%',
          },
          offsetY: 20,
        }
      }
      this.legendOptions = {
        position: 'left',
        offsetY: 80,
        offsetX: 20
      }
    }
    this.loadChart()
  }

  loadChart() {
    this.chartOptions = {
      chart: {
        height: 340,
        type: 'donut',
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
        },
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: this.plotOptions,
      colors: this.colorPalette,
      title: {
        text: 'Department Sales',
        style: {
          fontSize: '18px'
        }
      },
      series: [21, 23, 19, 14, 6],
      labels: ['Clothing', 'Food Products', 'Electronics', 'Kitchen Utility', 'Gardening'],
      legend: this.legendOptions
    }
  }

}
