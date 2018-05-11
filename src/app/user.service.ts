import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getProperties(){
    return this.http.get("assets/data.json").map(response => {
      console.log(response);
      return response.json();
       })
  }
}
