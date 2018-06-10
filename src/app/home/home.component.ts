import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from './../user.service';

import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',
  '../../assets/style.css',
  '../../assets/owl-carousel/owl.carousel.css',
  '../../assets/owl-carousel/owl.theme.css'


  ],
  encapsulation: ViewEncapsulation.None,

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
