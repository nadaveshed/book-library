import { Injectable } from '@angular/core';
import {Http,Response} from "@angular/http";
import { Observable } from "rxjs";
import "rxjs/Rx";
import {MyNewInterface} from "./my-new-interface";
@Injectable()
export class ApiService {

  private postsURL ="https://jsonplaceholder.typicode.com/posts";

  constructor(private http: Http ) {}
 getPosts(): Observable<MyNewInterface[]>{
    return this.http
     .get(this.postsURL)
     .map((response: Response)=> {
       return <MyNewInterface[]>response.json();
     })
     .catch(this.handleError);
 }

 private handleError(error: Response) {
   return Observable.throw(error.statusText);
 }

}
