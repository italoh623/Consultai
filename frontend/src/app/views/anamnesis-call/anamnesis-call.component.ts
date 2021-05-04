import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

import { AppointmentComponent } from '../appointment/appointment.component';

@Component({
  selector: 'app-anamnesis-call',
  templateUrl: './anamnesis-call.component.html',
  styleUrls: ['./anamnesis-call.component.scss']
})
export class AnamnesisCallComponent implements OnInit {

  constructor(public dialog: MatDialog, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(AppointmentComponent);
    const consultaId = this.route.snapshot.paramMap.get('id');

    // TODO: pegar CRM e CPF reais da consulta
    const medicCRM = '123'
    const patientCPF = '123'
    
    dialogRef.componentInstance.consultaId = String(consultaId);
    dialogRef.componentInstance.patientCPF = patientCPF;
    dialogRef.componentInstance.medicCRM = medicCRM;

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

