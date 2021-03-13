import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ApexOptions, ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'app-graphic-sparklines',
  templateUrl: './graphic-sparklines.component.html',
  styleUrls: ['./graphic-sparklines.component.scss'],
})
export class GraphicSparklinesComponent implements OnInit {
  
  @Input('mobile') mobile: boolean
  public slideOpts = {
    initialSlide: 0,
    swiper: false
  };
  @ViewChild("chartSparkLines1") chart1: ChartComponent;
  @ViewChild("chartSparkLines2") chart2: ChartComponent;
  @ViewChild("chartSparkLines3") chart3: ChartComponent;

  public chartOptions1: ApexOptions;
  public chartOptions2: ApexOptions;
  public chartOptions3: ApexOptions;

  // data for the sparklines that appear below header area
sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

// the default colorPalette for this dashboard
//colorPalette = ['#01BFD6', '#5564BE', '#F7A600', '#EDCD24', '#F74F58'];
colorPalette = ['#00D8B6','#008FFB',  '#FEB019', '#FF4560', '#775DD0']

constructor() { }

ngOnInit(): void {
  this.loadCharts()
}
loadCharts(){
  this.chartOptions1 = {
    chart: {
      id: 'sparkline1',
      group: 'sparklines',
      type: 'area',
      width: '100%',
      height: 160,
      sparkline: {
        enabled: true
      }
    },
    stroke: {
      curve: 'straight'
    },
    fill: {
      opacity: 1,
    },
    series: [{
      name: 'Sales',
      data: this.randomizeArray(this.sparklineData)
    }],
    labels: [...Array(24).keys()].map(n => `2018-09-0${n+1}`),
    yaxis: {
      min: 0
    },
    xaxis: {
      type: 'datetime',
    },
    colors: ['#DCE6EC'],
    title: {
      text: '$424,652',
      offsetX: 30,
      style: {
        fontSize: '24px'      
      }
    },
    subtitle: {
      text: 'Sales',
      offsetX: 30,
      style: {
        fontSize: '14px'      
      }
    }
  }
  this.chartOptions2 = {
    chart: {
      id: 'sparkline2',
      group: 'sparklines',
      type: 'area',
      width: '100%',
      height: 160,
      sparkline: {
        enabled: true
      },
    },
    stroke: {
      curve: 'straight'
    },
    fill: {
      opacity: 1,
    },
    series: [{
      name: 'Expenses',
      data: this.randomizeArray(this.sparklineData)
    }],
    labels: [...Array(24).keys()].map(n => `2018-09-0${n+1}`),
    yaxis: {
      min: 0, 
    },
    xaxis: {
      type: 'datetime',
    },
    colors: ['#DCE6EC'],
    title: {
      text: '$235,312',
      offsetX: 30,
      style: {
        fontSize: '24px'      
      }
    },
    subtitle: {
      text: 'Expenses',
      offsetX: 30,
      style: {
        fontSize: '14px'      
      }
    }
  }
  
  this.chartOptions3 = {
    chart: {
      id: 'sparkline3',
      group: 'sparklines',
      type: 'area',
      width: '100%',
      height: 160,
      sparkline: {
        enabled: true
      },
    },
    stroke: {
      curve: 'straight'
    },
    fill: {
      opacity: 1,
    },
    series: [{
      name: 'Profits',
      data: this.randomizeArray(this.sparklineData)
    }],
    labels: [...Array(24).keys()].map(n => `2018-09-0${n+1}`),
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      min: 0
    },
    colors: ['#008FFB'],
    //colors: ['#5564BE'],
    title: {
      text: '$135,965',
      offsetX: 30,
      style: {
        fontSize: '24px'      
      }
    },
    subtitle: {
      text: 'Profits',
      offsetX: 30,
      style: {
        fontSize: '14px'      
      }
    }
  }
  
}
randomizeArray (arg) {
  var array = arg.slice();
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


}
