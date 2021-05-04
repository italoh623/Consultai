import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecordComponent } from './views/record/record.component';
import { AnamnesisCallComponent } from './views/anamnesis-call/anamnesis-call.component';
import { ScheduleComponent } from './views/schedule/schedule.component';
import { MedicalComponent } from './views/home/medical/medical.component';
import { PatientComponent } from './views/home/patient/patient.component';
import { FileSystemComponent } from './views/file-system/file-system.component';
import { FeedbackComponent } from './views/feedback/feedback.component';

const routes: Routes = [
  {
    path: 'home/medical', 
    component: MedicalComponent 
  },
  {
    path: 'home/patient', 
    component: PatientComponent 
  },
  { 
    path: 'record/:id', 
    component: RecordComponent 
  },
  {
    path: 'anamnesis-call/:id',
    component: AnamnesisCallComponent
  },
  {
    path: 'files',
    component: FileSystemComponent
  },
  { 
    path: 'schedule', 
    component: ScheduleComponent 
  },
  {
    path: 'feedback/:id',
    component: FeedbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
