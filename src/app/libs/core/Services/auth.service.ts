import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private storage: StorageService) { }


  public saveClientData(data: any) {
    this.storage.set('user', data);
  }

  public getClientData(): any {
    return this.storage.get('user');
  }
}
