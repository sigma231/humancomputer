import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {
  authState:any = null;

  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth
    });
   }


  loginWithEmail(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;
        console.log(user);
        return user;
      })
      .catch(error => {
        console.log(error)
        window.alert("Invalid Username or Password")
        throw error
      });
  }
  registerUser(email:string, password:string){
    return this.afAuth.auth.createUserWithEmailAndPassword(email,password).then((user)=>{
      this.authState = user;
      console.log(user);
      return user;
    }
  ).catch(error => {
    console.log(error);
    window.alert("Signup failed try again");
    throw error;
  })
  }
}
