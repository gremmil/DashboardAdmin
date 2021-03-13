import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IPedidoDescripcion } from '../../models/NavigateRoutes/pedido-descripcion.model';
import { IPedidoDescripcionImagen } from '../../models/NavigateRoutes/pedido-descripcion-imagen.model';

@Injectable({
  providedIn: 'root'
})
export class FormOrderDirectionService {

  constructor(
    private frmBuilder: FormBuilder
  ) { }


  public form = this.frmBuilder.group({
    _id: ['', [Validators.required]],
    nroPedido: [0, [Validators.required]],
    idUsuario: ['60307be32888ba131cb48960', [Validators.required]],
    idEvento: [0, [Validators.required]],
    imagenReferencial: [''],
    imagenCargo: [''],
    observaciones: ['', [Validators.required]]
    
  })

  public formImagenes = this.frmBuilder.group({
    _id: [''],
    nroPedido: [0],
    imagenReferencial: [''],
    imagenCargo: ['']
 
  })

  agregarArchivos(archivo: IPedidoDescripcionImagen, tipo: string) {

    const archivoFormGroup = this.frmBuilder.group({
      file: [archivo.file],
      data: [archivo.data],
      format: [archivo.format],
      type: [archivo.type]
    })

    this.formImagenes.get(tipo).patchValue(archivoFormGroup.value)

  }

  limpiarFormulario() {

    this.form.reset();
    this.formImagenes.reset();
    this.form.setValue( new IPedidoDescripcion() );
    this.formImagenes.setValue({
      _id: '',
      nroPedido: 0,
      imagenReferencial: '',
      imagenCargo: ''
    });
  }

  dataURLToBlob(dataURL: string) {
    // Code taken from https://github.com/ebidel/filer.js
    const parts = dataURL.split(';base64,');
    const contentType = parts[0].split(':')[1];
    const raw = window.atob(parts[1]);
    const rawLength = raw.length;
    const uInt8Array = new Uint8Array(rawLength);
    for (let i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }
    return new Blob([uInt8Array], { type: contentType });
  }
  dataUrlToFile( image ) {
    return  new File(
      [this.dataURLToBlob(image.data)],
      `${image.type}_Pedido_N°_${this.form.get('nroPedido').value}(${this.form.get('idEvento').value}).${image.format}`,
      { type: 'application/octet-stream' }
    )
  }

}
