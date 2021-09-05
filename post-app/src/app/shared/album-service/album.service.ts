import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  baseUrl = environment.baseURL;

  constructor(private httpClient: HttpClient) { }

  // get all albums
  getAllAlbums(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/albums`)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getAlbumPictures(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/photos`)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }


  // Error handling 
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
      console.log("client", errorMessage)
    } else {
      // Get server-side error
      errorMessage = error;
      console.log("server", errorMessage)
    }
    // window.alert(errorMessage);
    return throwError(errorMessage);
  }

}