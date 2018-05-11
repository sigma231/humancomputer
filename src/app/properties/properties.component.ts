import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  properties: any;

  constructor(private user: UserService) { }

  ngOnInit() {
    this.getProperties();
  }
  getProperties(){
    this.user.getProperties().subscribe(response => {
      console.log(response);

    })
  }


}
