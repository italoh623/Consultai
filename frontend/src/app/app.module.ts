import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpMedicalComponent } from './views/sign-up-medical/sign-up-medical.component';
import { PatientComponent } from './views/patient/patient.component';
import { SignUpPatientComponent } from './views/sign-up-patient/sign-up-patient.component';
import { MedicalComponent } from './views/medical/medical.component';
import { AnamnesisCallComponent } from './views/anamnesis-call/anamnesis-call.component';
import { FeedbackComponent } from './views/anamnesisCall/feedback/feedback.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SignUpMedicalComponent,
    PatientComponent,
    SignUpPatientComponent,
    MedicalComponent,
    AnamnesisCallComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
