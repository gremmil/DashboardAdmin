import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment, ModalController, NavParams } from '@ionic/angular';
import { merge, Subscription } from 'rxjs';
import { EventoPedidoService } from 'src/app/services/svcMaestros/evento-pedido.service';

import { Plugins, CameraResultType } from '@capacitor/core';
import { FormOrderDirectionService } from '../../../services/svcNavigateRoutes/form-order-direction.service';
import { IDireccionesPedido } from '../../../models/NavigateRoutes/direcciones-pedidos.model';
import { IEventosPedido } from '../../../models/masters/eventos-pedido.model';
import { NavigateRoutesService } from '../../../services/svcNavigateRoutes/navigate-routes.service';
import { IndexedDbService } from '../../../services/svcGeneral/indexed-db.service';
import { environment } from '../../../../environments/environment.prod';
import { IPedidoDescripcionImagen } from '../../../models/NavigateRoutes/pedido-descripcion-imagen.model';
import { PresentLoadingService } from 'src/app/services/svcComplementarios/present-loading.service';
import { Validators, FormBuilder } from '@angular/forms';
const { Camera } = Plugins;

@Component({
  selector: 'app-modal-navigate-direction',
  templateUrl: './modal-navigate-direction.component.html',
  styleUrls: ['./modal-navigate-direction.component.scss'],
})
export class ModalNavigateDirectionComponent implements OnInit {
  public direccion: IDireccionesPedido;
  public pageCurrent: string;
  public eventosPedido: IEventosPedido[];
  public imagenReferencial: string;
  public imagenCargo: string;
  public cambiosSelect$: Subscription;
  @ViewChild('ionSegment') ionSegment: IonSegment;

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private svcEventsOrder: EventoPedidoService,
    public svcFormOrderDirection: FormOrderDirectionService,
    private svcNavigateRoutes: NavigateRoutesService,
    private svcIndexedDB: IndexedDbService,
    private svcLoadingPresent: PresentLoadingService,
    private formBuilder: FormBuilder
  ) {
    this.direccion = this.navParams.data.modalData;
  }
  ngOnInit() {
    this.svcEventsOrder.getEventsOrder().subscribe(
      (res) => {
        if (res.Error == "200") {
          this.eventosPedido = res.Resultado;
        }
      },
      (error) => console.error(error),
      () => this.cambioSelectValores()
    );
  }

  onSubmit() {
    const imagenReferencial = this.controlFormImg('imagenReferencial')?.value;
    imagenReferencial ? imagenReferencial.file = this.svcFormOrderDirection.dataUrlToFile(imagenReferencial) : '';

    const imagenCargo = this.controlFormImg('imagenCargo')?.value;
    imagenCargo ? imagenCargo.file = this.svcFormOrderDirection.dataUrlToFile(imagenCargo) : '';


    this.svcFormOrderDirection.formImagenes.patchValue({
      _id: this.controlForm('_id').value,
      nroPedido: this.controlForm('nroPedido').value,
    })

    const request_1 = this.svcFormOrderDirection.form.value;
    let request_Imagenes = this.svcFormOrderDirection.formImagenes.value;

    this.svcLoadingPresent.presentLoading('Enviando informacion...')
      .then(res => {
        merge(
          this.svcNavigateRoutes.crearPedidoDescripcion(),
          this.svcNavigateRoutes.subirImagenesPedidoDescripcion()
        )
          .subscribe(
            res => {
              this.svcIndexedDB.get(environment.dbSchema.storages.listaDirecciones, request_1._id).then(res => {
                res.flagVisitado = 1
                this.svcIndexedDB.put(environment.dbSchema.storages.listaDirecciones, res)
                  .then((res) => {
                    this.cambiosSelect$.unsubscribe();
                    this.svcFormOrderDirection.limpiarFormulario();
                    this.svcLoadingPresent.loading.dismiss();
                    this.cerrarModal(true)
                  })
                  .catch((err) => console.log(err));
              });
            },
            err => {

              request_Imagenes.imagenReferencial != '' ? request_Imagenes.imagenReferencial.data = '' : '';
              request_Imagenes.imagenCargo != '' ? request_Imagenes.imagenCargo.data = '' : '';

              Promise.all([
                this.svcIndexedDB.add(environment.dbSchema.storages.listaDescripcionPedidos, request_1),
                this.svcIndexedDB.add(environment.dbSchema.storages.subidaImagenes, request_Imagenes),

                this.svcIndexedDB.backgroundSync(
                  environment.dbSchema.storages.listaDescripcionPedidos + 'sync' + request_1._id),
                this.svcIndexedDB.backgroundSync(
                  environment.dbSchema.storages.subidaImagenes + 'sync' + request_Imagenes._id),

                this.svcIndexedDB.get(environment.dbSchema.storages.listaDirecciones, request_1._id).then(res => {
                  res.flagVisitado = 1
                  this.svcIndexedDB.put(environment.dbSchema.storages.listaDirecciones, res);
                })

              ])
                .then((res) => {
                  this.cambiosSelect$.unsubscribe();
                  this.svcFormOrderDirection.limpiarFormulario();
                  this.svcLoadingPresent.loading.dismiss();
                  this.cerrarModal(true)
                })
                .catch((err) => console.log(err));

              console.log(err)

            }

          )
      }).catch(err => {
        this.svcLoadingPresent.loading.dismiss();
      })

  }
  async tomarFoto(type: string) {
    Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl
    })
    .then( image => {
      const imagenSubir: IPedidoDescripcionImagen = {
        file: '',
        data: image.dataUrl,
        format: image.format,
        type: type
      }
      this.svcFormOrderDirection.agregarArchivos(imagenSubir, type);
    })
    .catch( err => console.log(err));
    
  }
  eliminarImagen(tipo: string) {
    this.controlFormImg(tipo).patchValue('');
  }
  getDataImagen(tipo: string) {
    return this.controlFormImg(tipo).value.data;
  }
  cambioSelectValores(){
    this.cambiosSelect$ = this.controlForm('idEvento').valueChanges.subscribe(val => {
      const evento = this.eventosPedido.filter(evento => evento.idEvento == val);
      const imagenReferencialValue = this.controlFormImg('imagenReferencial').value;
      const imagenCargoValue = this.controlFormImg('imagenCargo').value;
      ;
      if (evento[0].flagFotoApp == '0') {
        this.svcFormOrderDirection.formImagenes.setControl('imagenReferencial', this.formBuilder.control(imagenReferencialValue));
      } else {
        this.svcFormOrderDirection.formImagenes.setControl('imagenReferencial', this.formBuilder.control(imagenReferencialValue, [Validators.required]));
      }
      if (evento[0].flagObsApp == '0') {
        this.svcFormOrderDirection.formImagenes.setControl('imagenCargo', this.formBuilder.control(imagenCargoValue));
      } else {
        this.svcFormOrderDirection.formImagenes.setControl('imagenCargo', this.formBuilder.control(imagenCargoValue, [Validators.required]));
      }
    })
  }
  cerrarModal(formEdit: boolean) {
    if (this.modalController) {
      this.modalController.dismiss({
        edit: formEdit
      }).then(() => {
        this.modalController = null;
      });
    }
  }

  controlForm(control: string){
    return this.svcFormOrderDirection.form.get(control);
  }
  controlFormImg(control: string){
    return this.svcFormOrderDirection.formImagenes.get(control);
  }

}
