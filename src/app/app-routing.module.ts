import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainNavbarComponent } from './navbars/main-navbar/main-navbar.component';

const routes: Routes = [
  {path:'', component: MainNavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
