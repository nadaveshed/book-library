import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, pipe } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import 'rxjs/add/observable/of';


@Injectable()
export class ApiService {

  constructor(private http: Http ) {}

  getPosts() {
    const postsURL = "https://jsonplaceholder.typicode.com/posts";
    return this.http
      .get(postsURL)
      .pipe(
        map((response: Response) => {
          return response.json();
        }),
        catchError(error => Observable.of(null))
      ); 
  }

}
