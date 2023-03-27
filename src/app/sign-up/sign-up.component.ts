import { Component } from '@angular/core';
import { Auth,createUserWithEmailAndPassword,  } from '@angular/fire/auth';
import { Database,set,ref, onValue } from '@angular/fire/database';
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
  ab = "";
  registerUser(value:any){

    const starCountRef = ref(this.database, 'accounts/' + value.email);
    onValue(starCountRef, (snapshot) => {
     const db = snapshot.val();  
  this.ab = db.email
 
     }); 
  
      
     if (  value.email == null || value.email == "" || value.password == null || value.password == ""   
      ){
      alert('Fill the form ');
     }else{
      if(this.ab == value.email){
       alert('user email already exist!'); 
      }
  
        
      else {
       
    set(ref(this.database, 'accounts/' + value.email), {
       
        email: value.email,
       
        password: value.password
  
  
       }); 
       alert('account created!');
       this.router.navigate(['/login'])
      }
     }
  }


}


//   registerUser(value:any){
//     createUserWithEmailAndPassword(this.auth, value.email, value.password, )
//     .then((userCredential) => {
//       // Signed in 
//       const users = userCredential.user;
//       set(ref(this.database, 'users/' + users.uid),{
//         password:value.password,
//         email:value.email
//       })
//       alert('account created');
//       this.router.navigate(['/login'])

//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       alert(errorMessage);
 
      
//       // ..
//     });
//   }
  

// }
