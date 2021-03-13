import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ApexOptions, ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'app-graphic-dashboard-indicador-imagenes',
  templateUrl: './graphic-dashboard-indicador-imagenes.component.html',
  styleUrls: ['./graphic-dashboard-indicador-imagenes.component.scss'],
})
export class GraphicDashboardIndicadorImagenesComponent implements OnInit {

  // the default colorPalette for this dashboard
  //var colorPalette = ['#01BFD6', '#5564BE', '#F7A600', '#EDCD24', '#F74F58'];
  colorPalette = ['#00D8B6', '#008FFB', '#FEB019', '#FF4560', '#775DD0']
  @Input('mobile') mobile: boolean
  @ViewChild("charIndicadorImagenes") chart: ChartComponent;
  public chartOptions: ApexOptions;

  constructor() {
  }
  ngOnInit(): void {
    this.loadChart()
  }
  ngAfterViewInit(): void {
    /*setTimeout(()=>{
      this.chartOptions.series = [{
        data: [23]
      }];
    }, 200)*/
  }
  ngOnDestroy(): void {
    this.chartOptions.series = [{
      data: []
    }];
  }

  obtenerMobile() {
    return this.mobile
  }
  loadChart() {
    this.chartOptions = {
      chart: {
        type: 'donut',
        width: '100%',
        zoom: {
          enabled: true,
          type: 'x',  
          autoScaleYaxis: false,  
          zoomedArea: {
            fill: {
              color: '#90CAF9',
              opacity: 0.4
            },
            stroke: {
              color: '#0D47A1',
              opacity: 0.4,
              width: 1
            }
          }
      }
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          customScale: 0.8,
          donut: {
            size: '75%',
          },
          offsetY: 20,
        }
      },
      colors: this.colorPalette,
      title: {
        text: 'Indicador Imagenes',
        style: {
          fontSize: '20px',
          fontFamily: 'Helvetica',
          fontWeight: 500,
          color: '#262626',
        },
        floating: true,
        align: 'center'
      },
      series: [21, 23],
      labels: ['Enviadas', 'No Enviadas'],
      legend: {
        show: true,
        position: 'bottom',
      },
      xaxis: {
        position: "top",
        labels: {
          show: true,
        },
        axisBorder: {
          show: true
        },
        axisTicks: {
          show: true
        },
        tooltip: {
          enabled: true,
        },
        tickPlacement: 'on'
      }
    }
  }
}
