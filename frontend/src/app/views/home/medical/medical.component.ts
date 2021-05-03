import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { format, isSameDay, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Schedule } from '../../../../../../common/models/Schedule';
import { MedicalService } from './medical.service';

@Component({
  selector: 'app-medical',
  templateUrl: './medical.component.html',
  styleUrls: ['./medical.component.scss']
})
export class MedicalComponent implements OnInit {

  public scheduleForm: FormGroup;

  schedulesData: Schedule[] = [
    new Schedule("1", "123", "45123", new Date("Mon, 5 May 2021 13:30:00"), new Date(), new Date()),
    new Schedule("1", "123", "45123", new Date("Mon, 3 May 2021 12:30:00"), new Date(), new Date()),
    new Schedule("1", "123", "45123", new Date("Mon, 3 May 2021 13:30:00"), new Date(), new Date()),
    new Schedule("1", "123", "45123", new Date("Mon, 6 May 2021 15:00:00"), new Date(), new Date()),
    new Schedule("1", "123", "45123", new Date("Mon, 30 May 2021 17:30:00"), new Date(), new Date()),
    new Schedule("1", "123", "45123", new Date("Mon, 12 May 2021 21:30:00"), new Date(), new Date()),
  ];

  schedules: Schedule[] = [];

  constructor(
    private fb: FormBuilder,
    private medicalService: MedicalService
  ) { }

  ngOnInit(): void {
    this.scheduleForm = this.fb.group({
      scheduleDate: [Date.now()]
    })

    this.medicalService.show("123")
      .subscribe(data => {
        console.log(data)
        this.schedulesData = data.map(({ id, patientCPF, medicCRM, horario, created_at, updated_at}) => {
          return new Schedule(id, patientCPF, medicCRM, parseISO(String(horario)), parseISO(String(created_at)), parseISO(String(updated_at)));
        })

        this.schedules = [...this.schedulesData]
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
