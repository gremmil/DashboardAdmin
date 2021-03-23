import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormsTrackingService {

  constructor(
    private frmBuild: FormBuilder
  ) { }

  public formFiltros = this.frmBuild.group({
    nroConsultora: [''],
    nroPedido: [''],
  })

  public camposFormFiltros = [

    {tipo: 'input', clave: 'nroConsultora', titulo: 'Nro Consultora', cols: {sm: '12', md: '6', lg: '3'}},
    {tipo: 'input', clave: 'nroPedido', titulo: 'Nro Pedido', cols: {sm: '12', md: '6', lg: '3'}}
  ]
}
