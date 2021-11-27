import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancelComponent } from './cancel/cancel.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { RescheduleComponent } from './reschedule/reschedule.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cancel', component: CancelComponent },
  { path: 'reschedule', component: RescheduleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
