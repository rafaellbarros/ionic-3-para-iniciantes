import { MovieProvider } from './../../providers/movie/movie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private movieProvider: MovieProvider) {
  }

  public somaDoisNumeros(num1: number, num2: number): void {
     alert(num1 + num2)
  }

  ionViewDidLoad() {
    // this.somaDoisNumeros(10, 99);
    console.log('ionViewDidLoad FeedPage');

    this.movieProvider.getPopularMovies().subscribe(resp => {
      this.listaFilmes = resp['results'];
    }, error => {
      console.error(error);
    })
  }

}
