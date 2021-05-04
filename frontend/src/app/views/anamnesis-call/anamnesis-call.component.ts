import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Schedule } from '../../../../../common/models/Schedule';

import { AppointmentComponent } from '../appointment/appointment.component';
import { ScheduleService } from '../schedule/schedule.service';

@Component({
  selector: 'app-anamnesis-call',
  templateUrl: './anamnesis-call.component.html',
  styleUrls: ['./anamnesis-call.component.scss']
})
export class AnamnesisCallComponent implements OnInit {

  // TODO: pegar CRM e CPF reais da consulta
  patientCPF: string = "123";
  medicCRM: string = '123';

  constructor(
    public dialog: MatDialog, 
    private route: ActivatedRoute,
    private scheduleService: ScheduleService
  ) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(AppointmentComponent);
    const consultaId = this.route.snapshot.paramMap.get('id');
    
    dialogRef.componentInstance.consultaId = String(consultaId);
    dialogRef.componentInstance.patientCPF = this.patientCPF;
    dialogRef.componentInstance.medicCRM = this.medicCRM;

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  solicitarConsulta() {
    const today = new Date();
    const nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate()+7);

    this.scheduleService.create(new Schedule(
      "0",
      this.patientCPF,
      this.medicCRM,
      nextweek,
      new Date(),
      new Date()
      ));
      
    alert("Consulta presencial marcada para a próxima semana")
  }

}

