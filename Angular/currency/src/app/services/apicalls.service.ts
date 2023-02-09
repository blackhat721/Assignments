import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
// import * as birt from '../../assets/birth.json'

@Injectable({
  providedIn: 'root'
})
export class ApicallsService {
  users:any;
  url = "https://jsonplaceholder.typicode.com/posts";
  birth = "http://localhost:4200/assest/birth.json";
  constructor(private http:HttpClient) { }
  GetUsers(){
    return this.http.get(this.url);
  }
  Getbirth(){
    return this.http.get(this.birth);
  }
  
}
