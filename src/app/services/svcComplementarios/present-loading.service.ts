import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PresentLoadingService {

  public loading: HTMLIonLoadingElement

  constructor(
    private loadingController: LoadingController
  ) { }

  async presentLoading( mensaje: string ) {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: mensaje,
    });
    return this.loading.present();
  }
}
