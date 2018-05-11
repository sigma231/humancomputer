import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private auth: AuthService, private nav: Router) { }

  ngOnInit() {
  }

  signup(e){
    e.preventDefault();
    console.log(e);
    var email = e.target.elements[2].value;
    var password = e.target.elements[1].value;
    this.auth.registerUser(email,password).then(response => {
      console.log(response);
      window.alert("User has been registered");
      this.nav.navigate(['login']);
      

    })
  }

}
