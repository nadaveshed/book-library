import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';
import { Observable, pipe } from 'rxjs';
// import { map, catchError } from 'rxjs/operators';
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

  // public getPosts(): Observable<any> {
  //   // const postsURL = "https://jsonplaceholder.typicode.com/posts";
  //   const postsURL = "./assets/data/books.json";
  //   console.log(postsURL)
  //   return this.http
  //     .get(postsURL)
  //     .pipe(
  //       map((response: Response) => {
  //         return response.json();
  //       }),
  //       catchError(error => Observable.of(null))
  //     ); 
  // }

}
