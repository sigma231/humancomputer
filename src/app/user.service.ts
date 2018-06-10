import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getProperties(){
    return this.http.get('assets/data.json').map(response => {
      console.log(response);
      return response.json();
       });
  }
  postBooking(booking: any){
    console.log(booking); 
    return this.http.post('http://localhost:8000/api/bookings', booking).map(response => {
      console.log(response);
      return 'Successfully Created';
    });
  }
  getBookings(){
    return this.http.get('http://localhost:8000/api/my_bookings').map(response => {
      console.log(response);
      return response.json();
    });
  }
}
