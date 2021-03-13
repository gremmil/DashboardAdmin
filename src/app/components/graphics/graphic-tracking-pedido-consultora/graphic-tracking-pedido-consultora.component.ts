import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-graphic-tracking-pedido-consultora',
  templateUrl: './graphic-tracking-pedido-consultora.component.html',
  styleUrls: ['./graphic-tracking-pedido-consultora.component.scss'],
})
export class GraphicTrackingPedidoConsultoraComponent
  implements OnInit, OnDestroy, AfterViewInit {

  resizeObservable$: Observable<Event>;
  resizeSubscription$: Subscription;

  canvasElement: HTMLCanvasElement;
  contenedorCanvasElement: HTMLElement;
  ctx: CanvasRenderingContext2D;
  public offsetCanvas: number = 0;

  widthContenedor: number = 0;

  widthCanvas: number = 0;
  heightCanvas: number = 0;

  beizerCurvesPosition = [
    {
      initialPoint: { x: 0.125, y: 0.25 },
      endPoint: { x: 0.25, y: 0.5 },
      controlPoint: { x: 0.25, y: 0.25 }
    },
    {
      initialPoint: { x: 0.25, y: 0.5 },
      endPoint: { x: 0.375, y: 0.75 },
      controlPoint: { x: 0.25, y: 0.75 }
    },
    {
      initialPoint: { x: 0.375, y: 0.75 },
      endPoint: { x: 0.5, y: 0.5 },
      controlPoint: { x: 0.5, y: 0.75 }
    },
    {
      initialPoint: { x: 0.5, y: 0.5 },
      endPoint: { x: 0.625, y: 0.25 },
      controlPoint: { x: 0.5, y: 0.25 }
    },
    {
      initialPoint: { x: 0.625, y: 0.25 },
      endPoint: { x: 0.75, y: 0.5 },
      controlPoint: { x: 0.75, y: 0.25 }
    },
    {
      initialPoint: { x: 0.75, y: 0.5 },
      endPoint: { x: 0.875, y: 0.75 },
      controlPoint: { x: 0.75, y: 0.75 }
    }
  ];
  imagenesTrackingPosition = [
    {url: 'assets/images/step-tracking/step-0.png', position: { top: '0%', bottom: '' }, width: '100px', height: '100px', text:'Salida Santa Natura'},
    {url: 'assets/images/step-tracking/step-1.png', position: { top: '', bottom: '0%'}, width: '100px', height: '100px', text:'En Transporte'},
    {url: 'assets/images/step-tracking/step-2.png', position: { top: '0%', bottom: ''}, width: '100px', height: '100px', text:'En Consultora'},
    {url: 'assets/images/step-tracking/step-3.png', position: { top: '', bottom: '0%'}, width: '100px', height: '100px', text:'Entregado'}

  ]

  @ViewChild('contenedorCanvas') contenedorCanvas: {
    nativeElement: HTMLElement;
  };
  @ViewChild('canvas') canvas: { nativeElement: HTMLCanvasElement };

  

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.canvasElement = this.canvas.nativeElement;
      this.contenedorCanvasElement = this.contenedorCanvas.nativeElement;

      /*this.canvasElement = document.getElementById('canvas-pedido-consultora') as HTMLCanvasElement
      this.contenedorCanvasElement = document.getElementById('contenedor-canvas-pedido-consultora')*/
      this.ctx = this.canvasElement?.getContext('2d');
      this.cambioTamanoContenedorCanvas();
    }, 1000);
  }
  ngAfterViewInit(): void {
    /*this.resizeObservable$ = fromEvent(this.contenedorcanvasElement, 'onresize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe(event => {
      console.log(event);
      console.log('Hola');
    })*/
  }
  ngOnDestroy() {
    //this.resizeSubscription$.unsubscribe();
  }
  cambioTamanoContenedorCanvas(event?) {
  
    this.canvasElement?.setAttribute('width', this.contenedorCanvasElement?.offsetWidth.toString());
    this.widthCanvas = this.canvasElement.offsetWidth;

    this.canvasElement?.setAttribute('height', (this.contenedorCanvasElement?.offsetWidth*0.50).toString());
    this.heightCanvas = this.contenedorCanvasElement?.offsetWidth*0.50;

    /*this.canvasElement?.setAttribute('height', this.contenedorCanvasElement?.offsetHeight.toString());
    this.heightCanvas = this.canvasElement.offsetHeight;*/

    this.beizerCurvesPosition.forEach((item, i) => {
      this.dibujarGraficoRuta(item)
    });

  }
  dibujarGraficoRuta(item) {
    const width = this.canvasElement.offsetWidth
    const height = this.canvasElement.offsetHeight

    this.ctx.setLineDash([
      width / 50,
      height / 50,
    ]);
    this.ctx.lineWidth = 5;
    this.ctx.beginPath();
    this.ctx.moveTo(item.initialPoint.x * width, item.initialPoint.y * height);
    this.ctx.quadraticCurveTo(
      item.controlPoint.x * width,
      item.controlPoint.y * height,
      item.endPoint.x * width,
      item.endPoint.y * height
    )
    this.ctx.strokeStyle = '#428cff';
    this.ctx.stroke();
  }

}
