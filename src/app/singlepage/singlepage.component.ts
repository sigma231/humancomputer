import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import {Property} from '../model/property';

@Component({
  selector: 'app-singlepage',
  templateUrl: './singlepage.component.html',
  styleUrls: ['./singlepage.component.css']
})
export class SinglepageComponent implements OnInit {
  id: number;
  property: any;
  prop: any;
  prop_post:any;
  property_loaded = false;

  constructor(private activeRoute: ActivatedRoute, private user: UserService) {
    this.property;
  }

  ngOnInit() {
    
    this.getBookings();
    this.id = this.activeRoute.snapshot.params["id"];
    this.user.getProperties().subscribe(response =>{
      console.log(response);
      this.property = response.filter(
        property => property.id == this.id
      );
      // this.property = this.property.json();
      console.log(this.property);
      this.property = this.property[0];
      this.property_loaded = true;
    });
  }
  formsubmit(e){
    e.preventDefault();
    console.log(e);
    let time = e.target[0].value;
    let day = e.target[1].value;
    let description = e.target[2].value;
    // console.log(time, day, description);
    this.prop_post = {
      user_id: 1,
      property_id: this.id,
      
      time: time,
      day: day,
      description: description
    };
    console.log(this.prop_post);
    this.user.postBooking(this.prop_post).subscribe(response => {
      console.log(response);
    });
  }
  getBookings() {
    this.user.getBookings().subscribe(data => {
      this.prop = data;
      console.log(this.prop);
    });
  }


}
