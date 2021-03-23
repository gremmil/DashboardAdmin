import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { ApiModelDefaultI } from '../../models/general/api-model-default.model';

@Injectable({
  providedIn: 'root'
})
export class EventoPedidoService {

  public headers = environment.Headers
  public urlListEvent = environment.Masters.listEvent

  constructor(
    private http: HttpClient
  ) { }

  getEventsOrder(): Observable<ApiModelDefaultI>{
    return this.http.get<ApiModelDefaultI>(this.urlListEvent, this.headers);
  }
}
