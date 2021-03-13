import { Injectable } from '@angular/core';
import { SwRegistrationOptions } from '@angular/service-worker';
import { nextSortDir } from '@swimlane/ngx-datatable';
import { IDBPDatabase, openDB } from 'idb';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class IndexedDbService {

  private db: IDBPDatabase;
  public storages = environment.dbSchema.storages;
  public nameDB = environment.dbSchema.nameDB;
  public storagesPromises = [];

  constructor() {

    this.connectToDb();

  }

  async connectToDb() {
    const storagesDB = this.storages
    this.db = await openDB(this.nameDB, 1, {
      upgrade(db) {
        Object.values(storagesDB).forEach((storageVal: string) => {
          db.createObjectStore(
            storageVal,
            {
              keyPath: "_id"
            }
            );
        })
      },
    })

  }
  add( storageName: string, value: any ) {
    return this.db.put(storageName, value);
  }
  put( storageName: string, value: any ) {
    return this.db.put(storageName, value);
  }
  delete( storageName: string, key: string ) {
    return this.db.delete(storageName, key);
  }
  get( storageName: string, key: string ) {
    return this.db.get(storageName, key);
  }  
  getAll( storagaName: string ) {
    return this.db.getAll( storagaName );
  }

  backgroundSync(backgroundSyncEvent: string) {

    return navigator.serviceWorker.ready
      .then((swRegistration ) =>
        swRegistration.sync.register( backgroundSyncEvent )
      )
      .catch( ( err ) => console.log( err ) );

  }
}
