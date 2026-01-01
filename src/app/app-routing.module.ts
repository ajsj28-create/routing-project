import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashComponent } from './shared/components/user-dash/user-dash.component';
import { UserInfoComponent } from './shared/components/user-info/user-info.component';
import { UserFormComponent } from './shared/components/user-form/user-form.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { FairsDashComponent } from './shared/components/fairs-dash/fairs-dash.component';
import { FairsDetailComponent } from './shared/components/fairs-detail/fairs-detail.component';
import { ProductDashComponent } from './shared/components/product-dash/product-dash.component';
import { ProductFormComponent } from './shared/components/product-form/product-form.component';
import { ProductDetailComponent } from './shared/components/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: UserDashComponent,
    children: [
      {
        path: 'addUser',
        component: UserFormComponent
      },
      {
        path: ':id',
        component: UserInfoComponent
      },
      {
        path: ':id/editUser',
        component: UserFormComponent
      }
    ]
  },
  {
    path: 'fairs',
    component: FairsDashComponent,
    children: [
      {
        path: ':id',
        component: FairsDetailComponent
      }
    ]
  },
  {
    path: 'products',
    component: ProductDashComponent,
    children: [
      {
        path: ':id',
        component: ProductDetailComponent
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
