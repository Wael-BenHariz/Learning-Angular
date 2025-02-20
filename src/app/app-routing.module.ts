import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [{path:'user-list',component:UserListComponent,title:'user list'},
  {path:'profile',component: ProfileComponent,title:'profile'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
