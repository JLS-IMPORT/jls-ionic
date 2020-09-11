import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(public http: HttpClient, public storage: Storage) { }

  public newMessageNumberSubject: BehaviorSubject<number> = new BehaviorSubject(0);

  async getKey(key: string): Promise<string> {
    return await this.storage.get(key).catch(()=>{return});
  }

  async checkIsLogined(): Promise<boolean> {

    var jwt = await this.getKey('jwt');
    var userId = await this.getKey('userId');
    return jwt != null && userId != null;
  }
}
