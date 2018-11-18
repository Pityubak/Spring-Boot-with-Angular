import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AboutComponent } from './about/about.component';
import { UpdateUserComponent } from 'src/app/update-user/update-user.component';



const routes: Routes = [
  { path: '', redirectTo: 'userlist', pathMatch: 'full' },
  {
    path: 'userlist', component: UserListComponent, children: [
      { path: 'update/:id', component: UpdateUserComponent, outlet: 'modify' },
      { path: 'add', component: AddUserComponent, outlet: 'modify' }
    ]
  },
  {path: 'about' , component: AboutComponent}



];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})


export class AppRoutingModule { }
