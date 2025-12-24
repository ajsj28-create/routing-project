import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashComponent } from './shared/components/user-dash/user-dash.component';
import { UserInfoComponent } from './shared/components/user-info/user-info.component';
import { UserFormComponent } from './shared/components/user-form/user-form.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: UserDashComponent
  },
  {
    path: 'user/:id',
    component: UserInfoComponent
  },
  {
    path: 'user',
    redirectTo: 'user/101'
  },
  {
    path: 'form',
    component: UserFormComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
