import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiModelDefaultI } from 'src/app/models/general/api-model-default.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DistritosService {

  public headers = environment.Headers
  public urlList = environment.Masters.listDistrict;

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<any[]>{
    return this.http.get<any[]>(this.urlList, this.headers);
  }
}
