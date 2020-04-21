import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CanLoadScripts } from './shared/load-scripts';
import { HomeComponent } from './home/home.component';
import { ResuseComponent } from './resuse/resuse.component';

const routes: Routes = [
  { path: '', component: AppComponent, canActivate: [CanLoadScripts], children: [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
  ] },
  { path: 'login', component: LoginComponent, canActivate: [CanLoadScripts] },
  { path: 'home', component: HomeComponent, canActivate: [CanLoadScripts]  },
  { path: 'dashboard', component: DashboardComponent, canActivate: [CanLoadScripts], children: [
    { path: '**', redirectTo: '/dashboard', pathMatch: 'full' },
  ]  },
  { path: 'reuse', component: ResuseComponent, canActivate: [CanLoadScripts]  },
  { path: '**', component: AppComponent, canActivate: [CanLoadScripts], children: [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
  ]  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanLoadScripts]
})
export class AppRoutingModule { }
