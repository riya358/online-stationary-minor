import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorisedComponent } from './shared/component/layouts/authorised/authorised.component';
import { AuthRedirectGuard, UnAuthGuard } from './shared/guards/auth';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth/login',
  },
  {
    path: 'auth',
    canActivate: [UnAuthGuard],
    loadChildren: './components/auth/auth.module#AuthModule',
  },
  {
    path: '',
    component: AuthorisedComponent,
    canActivate: [AuthRedirectGuard],
    children: [
      {
        path: 'home',
        loadChildren: './components/home/home.module#HomeModule',
      },
      {
        path: 'add-item',
        loadChildren: './components/item/item.module#ItemModule',
      },
      {
        path: 'auth',
        loadChildren: './ui/auth/auth.module#AuthModule',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
