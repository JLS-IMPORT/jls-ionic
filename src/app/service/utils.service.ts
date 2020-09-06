import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(public http: HttpClient, public storage: NativeStorage) { }

  async getKey(key: string): Promise<string> {
    return await this.storage.getItem(key);
  }

  async checkIsLogined(): Promise<boolean> {

    var jwt = await this.getKey('jwt');
    var userId = await this.getKey('userId');
    return jwt != null && userId != null;
  }
}
