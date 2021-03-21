
function enviarFetch(request, urlFetch) {

    const formData = new FormData();
    let initFetch;

    if (urlFetch === swSchema.apis.Direcciones.uploadImages) {

        request.imagenReferencial!=""
            ? formData.append("imagenReferencial", request.imagenReferencial.file)
            : "";
        request.imagenCargo!=""
            ? formData.append("imagenCargo", request.imagenCargo.file)
            : "";
        formData.append("nroPedido", request.nroPedido);

        initFetch = {
            method: "POST",
            body: formData,
        }

    } else {
        initFetch = {
            method: "POST",
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
                'Allow': 'GET, POST, OPTIONS, PUT, DELETE',
            }
        }

    }

    return fetch(urlFetch, initFetch)
        .then((res) => {
            return Promise.resolve();
        })
        .catch(() => {
            return Promise.reject();
        });
}

function enviarData(storage, key) {
    const request = indexedDB.open(swSchema.nameDB);
    request.onerror = (event) => {
        console.log("Please allow my web app to use IndexedDB 😃>>>👻");
    };
    request.onsuccess = (event) => {
        db = event.target.result;
        obtenerData(db, storage, key);
    };
}
function obtenerData(db, storageName, keyName) {
    const transaction = db.transaction([storageName]);
    const objectStore = transaction.objectStore(storageName);
    const request = objectStore.get(keyName);
    request.onerror = (event) => {
        // Handle errors!
    };
    request.onsuccess = (event) => {
        // Do something with the request.result!
        const urlFetch = obtenerUrlFetch(storageName);
        enviarFetch(request.result, urlFetch)
            .then((res) => {
                eliminarData(db, storageName, keyName);
            })
            .catch((err) => {
                console.log(err);//cuando el server no responde(solucion: push notification)
            });
    };
}

function obtenerUrlFetch(storageName) {
    let url;
    switch (storageName) {
        case swSchema.storages.listaDescripcionPedidos:
            url = swSchema.apis.Direcciones.create;
            break;
        case swSchema.storages.subidaImagenes:
            url = swSchema.apis.Direcciones.uploadImages;
            break;
        default:
            break;
    }
    return url;
}
function eliminarData(db, storageName, key) {
    const transaction = db.transaction([storageName], "readwrite");
    const objectStore = transaction.objectStore(storageName);
    const request = objectStore.delete(key);
    request.onerror = (event) => {
        // Handle errors!
    };
    request.onsuccess = (event) => {
        // Do something with the request.result!
    };
}
