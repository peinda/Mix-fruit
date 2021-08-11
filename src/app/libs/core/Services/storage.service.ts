import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    // this.init();
  }

  async init(): Promise<Storage> {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    // await this.storage.defineDriver(IonicSecureStorageDriver);
    const storage = await this.storage.create();
    // this._storage = storage;
    // console.log('inittttttttttttttttttt');
    // console.log(this._storage);
    return await storage;
  }

  public async set(key: string, value: any) {
    this._storage = await this.init();
    this._storage.set(key, value);
  }

  public async get(key: string): Promise<any> {
    this._storage = await this.init();
    return await this._storage.get(key);
  }
}
