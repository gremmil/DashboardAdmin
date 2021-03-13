import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IApiModelPrueba } from '../../models/general/api-model-prueba.model';
import { FormOrderDirectionService } from './form-order-direction.service';

@Injectable({
  providedIn: 'root'
})
export class NavigateRoutesService {

  private urlListDirections = environment.Direcionts.list;
  private urlCreateFormDirection = environment.Direcionts.create;
  private urlUploadImages = environment.Direcionts.uploadImages;

  constructor(
    private http: HttpClient,
    private svcFormPedidoDescripcion: FormOrderDirectionService
  ) { }


  getNavigateDirections(): Observable<IApiModelPrueba> {

    return this.http.get<IApiModelPrueba>(this.urlListDirections, environment.Headers);

  }
  crearPedidoDescripcion(): Observable<IApiModelPrueba>{

    return this.http.post<IApiModelPrueba>(
      this.urlCreateFormDirection, this.svcFormPedidoDescripcion.form.value , environment.Headers
    );

  }

  subirImagenesPedidoDescripcion(){

    const formImagenes = this.svcFormPedidoDescripcion.formImagenes.value;
    const formData = new FormData();

    formImagenes.imagenReferencial.file?  formData.append('imagenReferencial', formImagenes.imagenReferencial.file) : '';
    formImagenes.imagenCargo.file?  formData.append('imagenCargo', formImagenes.imagenCargo.file) : '';
    formData.append('nroPedido', formImagenes.nroPedido);

    return this.http.post<IApiModelPrueba>(this.urlUploadImages, formData);

  }
}
