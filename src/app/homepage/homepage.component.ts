import { Component, OnInit } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/compat/database';
import { Database, ref, set, update, remove,query,orderByChild,equalTo} from '@angular/fire/database';
import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import { getDatabase, onValue} from "firebase/database";
import { Observable } from 'rxjs';



interface Item {
  password: string;
}


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  account!: Observable<any[]>;
  constructor(public database: Database, private FireDb: AngularFireDatabase) {
  this.account = FireDb.list('/accounts').valueChanges();
   }
   
  ngOnInit(): void {
    const starCountRef = ref(this.database,'users/'+this.user);
    onValue(starCountRef,(snapshot)=>{
      const db = snapshot.val();
      this.email = db.user;
      this.role = db.adamn;

    });

  console.log(this.user)
  console.log(this.role)
  if(this.user!=""){
    this.sent =true;

  }else if (this.user == ""){
    this.sent= false;
  }
  }

  del(value: any){
    remove(ref(this.database, 'accounts/' + value));
    alert('Deleted Successfully')
  }
  user = sessionStorage.getItem('id');
  email = "";
  data = "";
  password = "";
  post="";
  sent=true;
  role=true;
     edit(z: any) {
       this.email = z.email;
     
     }
  
     update(value:any){

   if(value.password == ""){
    alert('put the new password!');
   }else{
    update(ref(this.database, 'accounts/' + value.email), {
      password: value.password
    }); 
    this.email = "";
    
    this.password = "";
   alert('User updated!');
     
   }
    }
 
  }

  // users!: Observable<any[]>;
  // constructor(public database: Database, private db: AngularFireDatabase) {
  // this.users = db.list('/users').valueChanges();
  //  }
   
  // ngOnInit(): void {


  // }


  // del(value: any){
  //   remove(ref(this.database, 'users/' + value));
  //   alert('Deleted Successfully')
  // }

  //  update(value:any){
 
  //   update(ref(this.database, 'users/' + value.email), {
  //      password: value.password
  //    }); 
  //   alert('User updated!');
      
  // }


  // email = '';
  // fillForm(email: any) {
  //   this.email = email;
  // }



  // password: any;
  // itemId: any;

 
  // }