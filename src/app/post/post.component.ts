import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {  AngularFireDatabase } from '@angular/fire/compat/database';
import { Database,remove,ref,update, onValue, set} from '@angular/fire/database';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  username = sessionStorage.getItem('id');
  name = "";
  names = "";
  data = "";
  check = "";
  role = true;
  sent = true;
  post = "";
  uuid = "";
  
  account!: Observable<any[]>;
  constructor(public database: Database, private FireDb: AngularFireDatabase) {
    this.account = FireDb.list('/post').valueChanges();
    const starCountRef = ref (this.database,'user/'+this.username);
    onValue(starCountRef,(snapshot) =>{
      const db = snapshot.val();
      this.name = db.email;
      this.role = db.admin;
      
    });
  
  }

    posting(value:any){
      this.uuid = "post" +Math.floor(100000 + Math.random() * 900000);
      set(ref(this.database, 'post/' + this.uuid), {   
          name: value.name,
          post: value.post,
          id: this.uuid
   
         }); 
         alert('Posted!');

        this.post = "";
 
         }

         del(value:any){
          remove(ref(this.database, 'post/' + value))
          alert('Deleted Successfully')
         }

}
