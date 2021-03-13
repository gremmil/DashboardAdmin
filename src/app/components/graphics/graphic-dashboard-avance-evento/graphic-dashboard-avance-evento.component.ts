import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ApexOptions, ChartComponent } from "ng-apexcharts";

@Component({
  selector: 'app-graphic-dashboard-avance-evento',
  templateUrl: './graphic-dashboard-avance-evento.component.html',
  styleUrls: ['./graphic-dashboard-avance-evento.component.scss'],
})
export class GraphicDashboardAvanceEventoComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input('mobile') mobile: boolean
  public slideOpts = {
    initialSlide: 0,
    swiper: false
  };
  @ViewChild("chartAvanceEvento") chart: ChartComponent;
  public chartOptions: ApexOptions;

  constructor() {
  }
  ngOnInit(): void {
    this.loadChart()
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.chartOptions.series = [{
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
      }];
    }, 200)
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
      series: [
        {
          name: "Estado",
          data: []
        }
      ],
      chart: {
        type: "bar",
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
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top" // top, center, bottom
          }
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"]
        }
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        position: "top",
        labels: {
          show: !this.obtenerMobile(),
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5
            }
          }
        },
        tooltip: {
          enabled: true,
        },
        tickPlacement: 'on'
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [50, 0, 100, 100]
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "%";
          }
        }
      },
      title: {
        floating: false,
        text: 'Avance por Evento',
        align: 'left',
        style: {
          fontSize: '18px'
        }
      },
    }
  }

}

