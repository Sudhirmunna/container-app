import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CanLoadScripts } from './shared/load-scripts';

const routes: Routes = [
  { path: '', component: AppComponent, canActivate: [CanLoadScripts], children: [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
  ] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [CanLoadScripts]  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanLoadScripts]
})
export class AppRoutingModule { }
