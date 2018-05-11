import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';

import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  properties: any;

  constructor(private user: UserService) { }

  ngOnInit() {
    this.getProperties();
  }

  getProperties(){
    this.user.getProperties().subscribe(response=> {
      this.properties = response;
      console.log(this.properties);
      console.log(response);
    })
  }

}
