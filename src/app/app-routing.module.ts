import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { TransationsComponent } from './transations/transations.component';

const routes: Routes = [
{ path:'',component:LoginComponent},
{path:'dashboard',component:DashboardComponent},
{path:'register',component:RegisterComponent},
{path:'transactions',component:TransationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
