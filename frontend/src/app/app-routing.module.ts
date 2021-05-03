import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecordComponent } from './views/record/record.component';
import { AnamnesisCallComponent } from './views/anamnesis-call/anamnesis-call.component';

const routes: Routes = [
  { 
    path: 'record/:id', 
    component: RecordComponent 
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
