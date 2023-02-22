import { Component } from '@angular/core';
import { Auth,createUserWithEmailAndPassword,  } from '@angular/fire/auth';
import { Database,set,ref } from '@angular/fire/database';
import { Router} from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(public auth:Auth, public database:Database,private router:Router)  { }

  ngOnInit(): void {
  }

  registerUser(value:any){
    createUserWithEmailAndPassword(this.auth, value.email, value.password, )
    .then((userCredential) => {
      // Signed in 
      const users = userCredential.user;
      set(ref(this.database, 'users/' + users.uid),{
        password:value.password,
        email:value.email
      })
      alert('account created');
      this.router.navigate(['/login'])

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
 
      
      // ..
    });
  }
  

}
