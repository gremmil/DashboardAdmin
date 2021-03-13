import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { ApiModelI } from '../../models/general/api-model';
import { HttpClient } from '@angular/common/http';
import { IApiModelPrueba } from '../../models/general/api-model-prueba.model';

@Injectable({
  providedIn: 'root'
})
export class EventoPedidoService {

  public headers = environment.Headers
  public urlListEvent = environment.Masters.listEvent

  constructor(
    private http: HttpClient
  ) { }

  getEventsOrder(): Observable<IApiModelPrueba>{
    return this.http.get<IApiModelPrueba>(this.urlListEvent, this.headers)
  }
}
