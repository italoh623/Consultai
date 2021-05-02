import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './appointment/appointment.component';
import { RecordComponent } from './record/record.component';

const routes: Routes = [
  { path: 'record/:id', component: RecordComponent },
  { path: 'appointment', component: AppointmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
