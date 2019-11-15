import { Platform } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CartolaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CartolaProvider {

  basePath = '/cartolaapi';

  constructor(public http: HttpClient, private _platform: Platform) { 
    if (this._platform.is('cordova')) {
      this.basePath = 'https://api.cartolafc.globo.com';
    }
  }

  atletas() {
    return this.http.get(`${this.basePath}/atletas/mercado`);
  }

}
