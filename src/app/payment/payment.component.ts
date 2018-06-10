import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  payment:any;

  constructor(private http: Http) { }

  ngOnInit() {
    
  }
  makePayment(e){
    e.preventDefault();
    console.log(e);
    var headers = new Headers;
    var token = 'TK8OtMyUoZLKUGmUuVAzYqKG4ytZ';
    headers.append('Authorization', 'Bearer ' + token);
    var body = {

      "BusinessShortCode": "220220",
      "TransactionType": "CustomerPayBillOnline",
      "Amount": "8000",
      "PhoneNumber": "0702124316"
    }
    this.payment = e;
    console.log(e);


  }

}
