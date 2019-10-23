import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  private movieUrl = 'https://api.themoviedb.org/3/movie';
  private apiKey = 'XPTO';

  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }

  getLatestMovies() {
    return this.http.get(`${this.movieUrl}/latest?api_key=${this.apiKey}`);
  }
}
