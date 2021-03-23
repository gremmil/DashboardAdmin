import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { EmpresasService } from '../../services/svcMaestros/empresas.service';
import { DistritosService } from '../../services/svcMaestros/distritos.service';
import { Observable } from 'rxjs';
import { ApiModelDefaultI } from '../../models/general/api-model-default.model';
import { FormsDashboardService } from 'src/app/services/svcDashboard/formsDashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  public mobileQuery: boolean;
  public empresas$:  Observable<ApiModelDefaultI>= this.svcEmpresas.list();
  public distritos$: Observable<any[]> = this.svcDistritos.list();


  constructor(
    private platform: Platform,
    private svcEmpresas: EmpresasService,
    private svcDistritos: DistritosService,
    public svcFormFiltros: FormsDashboardService
  ) {
    this.mobileQuery = this.platform.is('mobile');
   }

  ngOnInit() {
  }


}
