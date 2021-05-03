import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { format, } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Patient } from '../../../../../../common/models/Patient';
import { Schedule } from '../../../../../../common/models/Schedule';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  schedules: Schedule[] = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  formatDate(date: Date): string {
    return format(date, "dd/MM - HH:mm", { locale: ptBR });
  }

  navigateToMedicalAppointment(scheduleId: string) {
    console.log(scheduleId)
    this.router.navigateByUrl(`/`)
  }

}
