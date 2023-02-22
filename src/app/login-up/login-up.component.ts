import { Component } from '@angular/core';
import { Auth, signInWithEmailAndPassword  } from "@angular/fire/auth";
import { Database,ref,update } from '@angular/fire/database';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login-up',
  templateUrl: './login-up.component.html',
  styleUrls: ['./login-up.component.css']
})
export class LoginUpComponent {

  constructor(public auth: Auth,public database:Database,private Router:Router) { }

  ngOnInit(): void {
  }

  loginUser(value: any){
    signInWithEmailAndPassword(this.auth, value.email, value.password)
    .then((userCredential) => {
      // Signed in 
      const users = userCredential.user;

    alert('user login');
    this.Router.navigate(['/display'])
  const date = new Date();

  update(ref(this.database, 'users/' + users.uid),{
  last_login:date
  }
  
  );
  
      // creadential dint match
    },err=>{
      alert(err.message)
  
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  
  }
}
