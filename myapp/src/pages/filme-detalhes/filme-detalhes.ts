import { MovieProvider } from './../../providers/movie/movie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FilmeDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filme-detalhes',
  templateUrl: 'filme-detalhes.html',
  providers: [MovieProvider]
})
export class FilmeDetalhesPage {

  public filme;
  public filmeId;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public movieProvider: MovieProvider) {
    
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter FilmeDetalhesPage');
    this.filmeId = this.navParams.get('id');
    this.getMovieDetails(this.filmeId);

  }

  private getMovieDetails(filmeId) {
    this.movieProvider.getMovieDetails(this.filmeId).subscribe(resp => {
      this.filme = resp;
      console.log(resp);
    }, error => {
      console.error(error);
    });
  }
}
