import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { format, isSameDay, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Patient } from '../../../../../../common/models/Patient';
import { Schedule } from '../../../../../../common/models/Schedule';
import { MedicalService } from './medical.service';
import { Medic } from '../../../../../../common/models/Medic'

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
  medic: any;

  constructor(
    private fb: FormBuilder,
    private medicalService: MedicalService
    ) { }
    ngOnInit(): void {
      this.scheduleForm = this.fb.group({
        scheduleDate: [Date.now()]
      })
      
      this.medicalService.getMedic(this.crm)
        .subscribe(data => {
          this.medic = new Medic(
                        data.crm,
                        data.name,
                        data.email,
                        data.especialidade,
                        data.horarios,
                        parseISO(String(data.created_at)),
                        parseISO(String(data.updated_at))
                      )
          console.log(this.medic)
        });
      
    this.medicalService.listSchedule(this.crm)
      .subscribe(data => {
        console.log(data)
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
        console.log(data)
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

}
