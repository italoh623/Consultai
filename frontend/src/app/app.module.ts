import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpMedicalComponent } from './views/sign-up-medical/sign-up-medical.component';
import { PatientComponent } from './views/patient/patient.component';
import { SignUpPatientComponent } from './views/sign-up-patient/sign-up-patient.component';
import { MedicalComponent } from './views/medical/medical.component';
import { AnamnesisCallComponent } from './views/anamnesis-call/anamnesis-call.component';
import { FeedbackComponent } from './views/anamnesisCall/feedback/feedback.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecordComponent } from './views/record/record.component';
import { AppointmentComponent } from './views/appointment/appointment.component';
import { FileSystemComponent } from './file-system/file-system.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpMedicalComponent,
    PatientComponent,
    SignUpPatientComponent,
    MedicalComponent,
    AnamnesisCallComponent,
    FeedbackComponent,
    RecordComponent,
    AppointmentComponent,
    FileSystemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
