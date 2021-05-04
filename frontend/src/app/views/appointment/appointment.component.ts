import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AppointmentFile } from '../../../../../common/models/AppointmentFile';
import { MedicalService } from '../home/medical/medical.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  public appointmentForm: FormGroup;
  public consultaId: string;
  public patientCPF: string;
  public medicCRM: string;
  public patientName: string = 'John Doe';
  public calcIMC: Boolean = false;
  public imcValue: Number;

  constructor(
    public dialogRef: MatDialogRef<AppointmentComponent>,
    private fb: FormBuilder,
    private medicalService: MedicalService
  ) { }

  ngOnInit(): void {
    this.appointmentForm = this.fb.group({
      queixas: [''],
      doencas: [''],
      medicacoes: [''],
      antecedentes: [''],
      exameFisico: [''],
      peso: [''],
      altura: [''],
      pressao_art: [''],
      hipotese: [''],
      conduta: [''],
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

  sendForm(): void {
    this.appointmentForm.value['medicCRM'] = String(this.medicCRM)
    this.appointmentForm.value['patientCPF'] = String(this.patientCPF)
    this.appointmentForm.value['consultaId'] = this.consultaId
    this.appointmentForm.value['created_at'] = new Date()

    this.medicalService.addAppointmentFile(this.appointmentForm.value).subscribe(() => {
      this.cancel()
    })
  }

  imc() {
    if(this.appointmentForm.value.peso && this.appointmentForm.value.altura) {
      let peso = Number(this.appointmentForm.value.peso)
      let altura = Number(this.appointmentForm.value.altura)

      this.imcValue = peso/(altura*altura)
      if(this.imcValue) { this.calcIMC = true }
      else { this.calcIMC = false }
    } else {
      this.calcIMC = false
    }
  }

}
