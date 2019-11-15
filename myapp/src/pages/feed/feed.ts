import { MovieProvider } from './../../providers/movie/movie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers:[
    MovieProvider
  ]
})
export class FeedPage {

  public feed = {
    titulo: 'Charles Franca',
    data: 'November 5, 1955',
    descricao: 'Estou criando um app incrível...',
    qntLikes: 12,
    qntComments: 4,
    timeComments: '11h ago'
  }

  public nomeUsuario: string = 'Charles Franca do Codigo';

  public listaFilmes = new Array<any>();

  public loader;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private movieProvider: MovieProvider, 
    public loadingCtrl: LoadingController) {
  }

  abreCarregando() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando filmes..."
    });
    this.loader.present();
  }

  fechaCarregando() {
    this.loader.dismiss();
  }



  public somaDoisNumeros(num1: number, num2: number): void {
     alert(num1 + num2)
  }

  ionViewDidEnter() {
    this.abreCarregando();
    console.log('ionViewDidEnter FeedPage');

    this.movieProvider.getPopularMovies().subscribe(resp => {
      this.listaFilmes = resp['results'];
      this.fechaCarregando();
    }, error => {
      console.error(error);
    });

  }

}
