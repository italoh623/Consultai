import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  public appointmentForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AppointmentComponent>,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.appointmentForm = this.fb.group({
      appointmentComplaints: [''],
      appointmentPreviousDiseases: [''],
      appointmentMedications: [''],
      appointmentFamilyBackground: [''],
      appointmentPhysicalExam: [''],
      appointmentWeight: [''],
      appointmentHeight: [''],
      appointmentBloodPressure: [''],
      appointmentComplementaryExams: [''],
      appointmentDiagnosticHypothesis: [''],
      appointmentConduct: [''],
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

  sendForm(): void {
    console.log(this.appointmentForm.value);
  }

}
