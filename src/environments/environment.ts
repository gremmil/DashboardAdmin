// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { HttpHeaders } from "@angular/common/http";

export const environment = {
  production: false,
  Masters: {
    listEvent: "https://wstransolytest.azurewebsites.net/api/Maestro/ListarEvento",
    listBusiness:  "https://wstransolytest.azurewebsites.net/api/Maestro/ListarEmpresa",
    listDistrict: "assets/data/distritos.json"
  },
  Direcionts: {
    list: "https://transolyferserverprueba.azurewebsites.net/api/direcciones-pedidos",
    create: "https://transolyferserverprueba.azurewebsites.net/api/pedido-descripcion/create",
    uploadImages: "https://transolyferserverprueba.azurewebsites.net/api/pedido-descripcion/upload-images"
  },
  Headers: {
    headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })  
  },
  BlobStorage: {
    url: 'https://transolyferpruebas.blob.core.windows.net/'
  },
  dbSchema: {
    nameDB : 'transolyfer-db',
    storages: {
      listaDirecciones: 'lista-direcciones-storage',
      listaEventosPedidos: 'lista-eventos-pedidos-storage',
      listaDescripcionPedidos: 'lista-descripcion-pedidos-storage',
      descripcionUsuario: 'descripcion-usuario-storage',
      subidaImagenes: 'subida-imagenes-storage'
    }
  }
};
/*
import { HttpHeaders } from "@angular/common/http";

export const environment = {
  production: false,
  Masters: {
    listEvent: "http://localhost:3000/api/eventos-pedido",
    listBusiness:  "http://wstransoly.azurewebsites.net/api/Transoly/ListarEmpresa"
  },
  Direcionts: {
    list: "http://localhost:3000/api/direcciones-pedidos",
    create: "http://localhost:3000/api/pedido-descripcion/create",
    uploadImages: "http://localhost:3000/api/pedido-descripcion/upload-images"
  },
  Headers: {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
        'Allow': 'GET, POST, OPTIONS, PUT, DELETE',
      })  
  },
  BlobStorage: {
    url: 'https://transolyferpruebas.blob.core.windows.net/'
  },
  dbSchema: {
    nameDB : 'transolyfer-db',
    storages: {
      listaDirecciones: 'lista-direcciones-storage',
      listaEventosPedidos: 'lista-eventos-pedidos-storage',
      listaDescripcionPedidos: 'lista-descripcion-pedidos-storage',
      descripcionUsuario: 'descripcion-usuario-storage',
      subidaImagenes: 'subida-imagenes-storage'
    }
  }
};*/

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
