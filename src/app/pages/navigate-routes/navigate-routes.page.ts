import { Component, OnInit, ViewChild } from '@angular/core';
import { IonReorderGroup, LoadingController, NavController, PopoverController, ModalController, IonSegment, IonList } from '@ionic/angular';
import { NavigateRoutesService } from '../../services/svcNavigateRoutes/navigate-routes.service';
import { ModalNavigateDirectionComponent } from '../../components/modals/modal-navigate-direction/modal-navigate-direction.component';
import { FormOrderDirectionService } from '../../services/svcNavigateRoutes/form-order-direction.service';
import { IDireccionesPedido } from '../../models/NavigateRoutes/direcciones-pedidos.model';
import { environment } from '../../../environments/environment.prod';
import { IndexedDbService } from '../../services/svcGeneral/indexed-db.service';
import { PresentLoadingService } from '../../services/svcComplementarios/present-loading.service';

@Component({
  selector: 'app-navigate-routes',
  templateUrl: './navigate-routes.page.html',
  styleUrls: ['./navigate-routes.page.scss'],
})
export class NavigateRoutesPage implements OnInit {

  public loading: HTMLIonLoadingElement
  public popover: HTMLIonPopoverElement
  public modal: HTMLIonModalElement
  public direcciones: IDireccionesPedido[]
  public direccionesNoVisitadas: IDireccionesPedido[] = []
  public direccionesVisitadas: IDireccionesPedido[] = []
  public direccionSeleccionada: IDireccionesPedido
  public storagesSchemma = environment.dbSchema.storages

  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;
  @ViewChild('ionLista') lista: IonList;
  @ViewChild('ionSegment') ionSegment: IonSegment;
  public ionSegmentVisibility = false

  constructor(
    private svcNavigateRoutes: NavigateRoutesService,
    private svcFormOrderDirection: FormOrderDirectionService,
    private svcIndexedDB: IndexedDbService,
    private svcLoadingPresent: PresentLoadingService,
    private modalController: ModalController,
  ) {
  }

  ngOnInit() {
  }

  buscarDirecciones() {
    /*this.ionSegmentVisibility = true;
    this.obtenerDirecciones();*/

  }
  obtenerDirecciones() {this.svcLoadingPresent.presentLoading('Espere, porfavor...').then(res => {
    this.svcNavigateRoutes.getNavigateDirections().subscribe(
      res => {
        this.cargarDirecciones( res.response );
        this.svcLoadingPresent.loading.dismiss();
        this.direcciones.forEach(element => {
          this.svcIndexedDB.add(environment.dbSchema.storages.listaDirecciones, element);
        })
      },
      err => {
        console.log(err);
        this.svcIndexedDB.getAll(environment.dbSchema.storages.listaDirecciones)
          .then(res => {
            this.cargarDirecciones( res );
          })
        this.svcLoadingPresent.loading.dismiss();
      }
    )
  })

  }
  async obtenerDireccion(direccionSeleccionada: IDireccionesPedido) {
    if(this.ionSegment.value=='0'){
      this.svcLoadingPresent.presentLoading('Espere, porfavor...').then(res=>{
        this.svcFormOrderDirection.form.patchValue({
          _id: direccionSeleccionada._id,
          nroPedido: direccionSeleccionada.nroPedido,
          idUsuario: "60307be32888ba131cb48960"
        })
        this.svcLoadingPresent.loading.dismiss();
        this.openModal(direccionSeleccionada);
      })
      .catch( err => {
        console.log( err )
        this.svcLoadingPresent.loading.dismiss();
      });
    }
  }

  //modal
  async openModal(direccion: IDireccionesPedido) {
    this.modal = await this.modalController.create({
      component: ModalNavigateDirectionComponent,
      componentProps: {
        modalData: direccion
      }
    });
    await this.modal.present();
    const { data } = await this.modal.onWillDismiss();
    if( data.edit ) {
      this.obtenerDirecciones();
    }

  }

  cargarDirecciones(direcciones: IDireccionesPedido[]){
    this.direccionesNoVisitadas = direcciones.filter( e => e.flagVisitado == 0);
    this.direccionesVisitadas = direcciones.filter( e => e.flagVisitado == 1);
    this.evaluarCambioSegmento( this.ionSegment.value );
  }
  //order
  ordenarSegmentos(event: any) {
    this.direcciones = event.detail.complete(this.direcciones);
    this.lista?.closeSlidingItems();
  }
  cambioSegmento(event: any) {
    this.lista?.closeSlidingItems();
    this.evaluarCambioSegmento( event.target.value );
    
  }
  evaluarCambioSegmento( val ){
    switch( val ) {
      case '0':
        this.direcciones = this.direccionesNoVisitadas;
        break;
      case '1':
        this.direcciones = this.direccionesVisitadas;
        break;
      default:
      break;
    }
  }
  iniciarMapa( direccion: IDireccionesPedido){
    this.lista.closeSlidingItems();
  }
  finalizarRuta(){

  }


}
