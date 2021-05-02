import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnamnesisCallComponent } from './views/anamnesis-call/anamnesis-call.component';

const routes: Routes = [
  {
    path: '',
    component: AnamnesisCallComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
