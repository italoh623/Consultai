import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppointmentComponent } from './views/appointment/appointment.component';
import { RecordComponent } from './views/record/record.component';
import { AnamnesisCallComponent } from './views/anamnesis-call/anamnesis-call.component';

const routes: Routes = [
  { 
    path: 'record/:id', 
    component: RecordComponent 
  },
  { 
    path: 'appointment', 
    component: AppointmentComponent 
  },
  {
    path: 'anamnesis-call/:id',
    component: AnamnesisCallComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
