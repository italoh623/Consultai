import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './appointment/appointment.component';
import { RecordComponent } from './record/record.component';
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [
  { path: 'record/:id', component: RecordComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'schedule', component: ScheduleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
