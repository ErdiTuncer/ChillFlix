import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {YoutubeResult} from '../model/youtube-result';
import {GoogleApiService} from 'ng-gapi';

@Injectable({
  providedIn: 'root'
})
export class YoutubeAPIService {

  mock = true; // snelle manier om straks ook lokaal door te kunnen werken
  // localUrl = 'http://localhost:4200/assets/shrek-movies.json';
  // localIdUrl = 'http://localhost:4200/assets/puss_in_boots.json';
  searchUrl = 'https://www.googleapis.com/youtube/v3/search';
  apiKey = 'AIzaSyA56Xlgcm1gMHnu1Px04zXxWgk2gX9jxUk';

  constructor(private httpClient: HttpClient) {
  }

  getData(searchString: string): Observable<YoutubeResult> {
      console.log(searchString);
      const url = `${this.searchUrl}?part=snippet&q=${searchString}&key=${this.apiKey}`;
      return this.httpClient.get<YoutubeResult>(url);
  }
}
