import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService,private nav: Router,private zone:NgZone
  ) { }


  ngOnInit() {
  }

  login(e){
  e.preventDefault();
  console.log(e);
  var username = e.target.elements[0].value;
  var password = e.target.elements[1].value;
  console.log(username,password);
    this.auth.loginWithEmail(username, password).then(response => {
      console.log(response);
      this.zone.run(()=> {
        this.nav.navigateByUrl('/home');
      }

    );
      
    })
  }

}
