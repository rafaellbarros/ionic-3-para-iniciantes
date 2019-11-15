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

  constructor(public http: HttpClient) { }

  getPopularMovies(page = 1) {
    return this.http.get(`${this.movieUrl}/popular?page=${page}&api_key=${this.apiKey}`);
  }

  getMovieDetails(filmeId) {
    return this.http.get(`${this.movieUrl}/${filmeId}?api_key=${this.apiKey}`);
  }
}
