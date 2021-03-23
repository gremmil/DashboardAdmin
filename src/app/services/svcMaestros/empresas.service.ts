import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { ApiModelDefaultI } from '../../models/general/api-model-default.model';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  public headers = environment.Headers
  public urlList = environment.Masters.listBusiness;

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<ApiModelDefaultI>{
    return this.http.get<ApiModelDefaultI>(this.urlList, this.headers);
  }
}
