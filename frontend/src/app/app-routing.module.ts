import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecordComponent } from './views/record/record.component';
import { AnamnesisCallComponent } from './views/anamnesis-call/anamnesis-call.component';
import { ScheduleComponent } from './views/schedule/schedule.component';
import { MedicalComponent } from './views/home/medical/medical.component';
import { PatientComponent } from './views/home/patient/patient.component';
// import { FileSystemComponent } from './file-system/file-system.component';

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
  // {
  //   path: 'files',
  //   component: FileSystemComponent
  // },
  { 
    path: 'schedule', 
    component: ScheduleComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
