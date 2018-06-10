import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
  '../assets/style.css',
  '../assets/owl-carousel/owl.carousel.css',
  '../assets/owl-carousel/owl.theme.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app';
  constructor(private router: Router){

  }

  homePageOpen(){
    this.router.navigate(['/home']);
  }
}
