import { Component, OnInit } from '@angular/core';
import { FormsTrackingService } from '../../services/svcTracking/formsTracking.service';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.page.html',
  styleUrls: ['./tracking.page.scss'],
})
export class TrackingPage implements OnInit {

  constructor(
    public svcFormsTracking: FormsTrackingService
  ) { }

  ngOnInit() {
  }
  onClick(){

  }
  buscarConsultora(){

  }
  buscar( clave: string ){
  }
  limpiar( clave: string ){
    this.svcFormsTracking.formFiltros.get(clave).patchValue('');
  }
}
