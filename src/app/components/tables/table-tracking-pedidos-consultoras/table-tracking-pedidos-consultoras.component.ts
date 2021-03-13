import { Component, Input, OnInit } from '@angular/core';
export interface Data {
  movies: string;
}
@Component({
  selector: 'app-table-tracking-pedidos-consultoras',
  templateUrl: './table-tracking-pedidos-consultoras.component.html',
  styleUrls: ['./table-tracking-pedidos-consultoras.component.scss'],
})
export class TableTrackingPedidosConsultorasComponent implements OnInit {
  @Input('mobile') mobile: boolean
  public data: Data;
  public columns: any;
  public rows: any;

  constructor(

  ) {}
  ngOnInit(): void {
    this.rows = [

      { distrito: 'Miraflores', at: '77', fe: '0', ne: '0', total: '77', efectividad: '100%' },
      { distrito: 'Pueblo Libre', at: '36', fe: '0', ne: '0', total: '36', efectividad: '100%' },
      { distrito: 'SJL', at: '142', fe: '0', ne: '0', total: '145', efectividad: '97.93%' },
      { distrito: 'Pachacamac', at: '27', fe: '1', ne: '2', total: '30', efectividad: '90%' },

    ];
    this.columns = [
      { name: 'Distrito' }, 
      { name: 'AT' }, 
      { name: 'FE' },
      { name: 'NE' }, 
      { name: 'Total' }, 
      { name: 'Efectividad' },
      { name: '' },
    ];
  }
}
