import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, pipe } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import 'rxjs/add/observable/of';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ApiService {

  constructor(private http: HttpClient ) {        
    this.getJSON().subscribe(data => {
    // this.getPosts().subscribe(data => {
     console.log(data)
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get("./assets/data/books.json");
  }

  // getPosts() {
  //   const postsURL = "https://jsonplaceholder.typicode.com/posts";
  //   return this.http
  //     .get(postsURL)
  //     .pipe(
  //       map((response: Response) => {
  //         console.log(response)
  //         return response;
  //       }),
  //       catchError(error => Observable.of(null))
  //     ); 
      
  // }

}
