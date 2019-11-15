import { CartolaProvider } from './../../providers/cartola/cartola';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the AtletasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-atletas',
  templateUrl: 'atletas.html',
  providers: [
    CartolaProvider,
    Camera
  ]
})
export class AtletasPage {

  img = '';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _cartolaProvider: CartolaProvider,
    private camera: Camera) {
  }

  ionViewDidLoad() {
    this._cartolaProvider.atletas().subscribe(resp => {
      console.log(resp);
    }, err => {
      console.error('error: ', err);
    });
  }

  tirarFoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     this.img = 'data:image/jpeg;base64,' + imageData;
     console.log(this.img);
    }, (err) => {
     // Handle error
    });
  }

}
