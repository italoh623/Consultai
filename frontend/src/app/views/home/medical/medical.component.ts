import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { format, isSameDay, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Patient } from '../../../../../../common/models/Patient';
import { Schedule } from '../../../../../../common/models/Schedule';
import { MedicalService } from './medical.service';
import { Medical } from '../../../../../../common/models/Medical'

@Component({
  selector: 'app-medical',
  templateUrl: './medical.component.html',
  styleUrls: ['./medical.component.scss']
})
export class MedicalComponent implements OnInit {

  public scheduleForm: FormGroup;

  schedulesData: Schedule[] = [];
  schedules: Schedule[] = [];

  patients: Patient[] = [];

  crm: string = '123';
  medical: any;

  constructor(
    private fb: FormBuilder,
    private medicalService: MedicalService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.scheduleForm = this.fb.group({
      scheduleDate: [Date.now()]
    })

    this.medicalService.getMedical(this.crm)
      .subscribe(data => {
        this.medical = new Medical(
          data.crm,
          data.name,
          data.email,
          data.especialidade,
          data.horarios,
          parseISO(String(data.created_at)),
          parseISO(String(data.updated_at))
        )
        console.log(this.medical)
      });

    this.medicalService.listSchedule(this.crm)
      .subscribe(data => {
        this.schedulesData = data.map(({ id, patientCPF, medicCRM, horario, created_at, updated_at }) => {
          return new Schedule(
            id,
            patientCPF,
            medicCRM,
            parseISO(String(horario)),
            parseISO(String(created_at)),
            parseISO(String(updated_at))
          );
        })

        this.schedules = [...this.schedulesData]
      });

    this.medicalService.listPatients(this.crm)
      .subscribe(data => {
        this.patients = data.map(({ cpf, name, email, idade, created_at, updated_at }) => {
          return new Patient(
            cpf,
            name,
            email,
            idade,
            parseISO(String(created_at)),
            parseISO(String(updated_at))
          );
        })
      });
  }

  formatDate(date: Date): string {
    return format(date, "dd/MM - HH:mm", { locale: ptBR });
  }

  updateScheduleData(): void {
    const date = this.scheduleForm.value.scheduleDate;

    this.schedules = this.schedulesData.filter(
      schedule => isSameDay(schedule.horario, date)
    )
  }

  navigateToMedicalAppointment(scheduleId: string) {
    console.log(scheduleId)
    this.router.navigateByUrl(`/`)
  }

}
