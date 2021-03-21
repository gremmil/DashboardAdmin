let swSchema;
/*
swSchema = {
    nameDB : 'transolyfer-db',
    storages: {
      listaDirecciones: 'lista-direcciones-storage',
      listaEventosPedidos: 'lista-eventos-pedidos-storage',
      listaDescripcionPedidos: 'lista-descripcion-pedidos-storage',
      descripcionUsuario: 'descripcion-usuario-storage',
      subidaImagenes: 'subida-imagenes-storage'
    },
    apis: {
      Masters: {
        listEvent: "http://localhost:3000/api/eventos-pedido",
        listBusiness:  "http://wstransoly.azurewebsites.net/api/Transoly/ListarEmpresa"
      },
      Direcciones: {
        list: "http://localhost:3000/api/direcciones-pedidos",
        create: "http://localhost:3000/api/pedido-descripcion/create",
        uploadImages: "http://localhost:3000/api/pedido-descripcion/upload-images"
      }
    }
}*/
swSchema = {
  nameDB : 'transolyfer-db',
  storages: {
    listaDirecciones: 'lista-direcciones-storage',
    listaEventosPedidos: 'lista-eventos-pedidos-storage',
    listaDescripcionPedidos: 'lista-descripcion-pedidos-storage',
    descripcionUsuario: 'descripcion-usuario-storage',
    subidaImagenes: 'subida-imagenes-storage'
  },
  apis: {
    Masters: {
      listEvent: "https://transolyferserverprueba.azurewebsites.net/api/eventos-pedido",
      listBusiness:  "http://wstransoly.azurewebsites.net/api/Transoly/ListarEmpresa"
    },
    Direcciones: {
      list: "https://transolyferserverprueba.azurewebsites.net/api/direcciones-pedidos",
      create: "https://transolyferserverprueba.azurewebsites.net/api/pedido-descripcion/create",
      uploadImages: "https://transolyferserverprueba.azurewebsites.net/api/pedido-descripcion/upload-images"
    }
  }
}