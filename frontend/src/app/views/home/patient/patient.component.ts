import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { format, parseISO, } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Patient } from '../../../../../../common/models/Patient';
import { Schedule } from '../../../../../../common/models/Schedule';
import { PatientService } from './patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  schedules: Schedule[] = [];

  constructor(
    private patientService: PatientService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.patientService.listSchedulings("123")
      .subscribe(data => {
        this.schedules = data.map(({ id, patientCPF, medicCRM, horario, created_at, updated_at }) => {
          return new Schedule(
            id,
            patientCPF,
            medicCRM,
            parseISO(String(horario)),
            parseISO(String(created_at)),
            parseISO(String(updated_at))
          );
        })
      })
  }

  formatDate(date: Date): string {
    return format(date, "dd/MM - HH:mm", { locale: ptBR });
  }

  navigateToMedicalAppointment(scheduleId: string) {
    this.patientService.getMedicalAppointment(scheduleId)
      .subscribe(data => {
        const id = data;

        if (data) {
          this.router.navigateByUrl(`anamnesis-call/${id}`);
        } 
      })
  }

}
