import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormsDashboardService {

  constructor(
    private frmBuild: FormBuilder
  ) { }

  public formFiltros = this.frmBuild.group({
    fechaInicio: [''],
    fechaFin: [''],
    codigo_ubigeo: [0],
    idEmpresa: [0]
  })

  public camposFormFiltros = [

    {tipo: 'date', clave: 'fechaInicio', titulo: 'Fecha de Inicio', cols: {sm: '12', md: '6', lg: '3'}},
    {tipo: 'date', clave: 'fechaFin', titulo: 'Fecha de Fin', cols: {sm: '12', md: '6', lg: '3'}},
    {tipo: 'select', clave: 'codigo_ubigeo', titulo: 'Distritos', cols: {sm: '12', md: '6', lg: '3'}},
    {tipo: 'select', clave: 'idEmpresa', titulo: 'Empresa', cols: {sm: '12', md: '6', lg: '3'}}

  ]
}
