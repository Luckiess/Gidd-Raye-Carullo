import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUpComponent } from '../login-up/login-up.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { HomepageComponent } from './homepage.component';
import { PostComponent } from '../post/post.component';






const routes: Routes = [
  {path: 'signup',component:SignUpComponent},
  {path: 'login',component:LoginUpComponent},
  {path: '',redirectTo:'signup',pathMatch:'full' },
  {path: 'display',component:HomepageComponent},
  {path: 'post',component:PostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
