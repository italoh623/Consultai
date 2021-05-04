import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Medical } from '../../../../../common/models/Medical';
import { Patient } from '../../../../../common/models/Patient';
import { Schedule } from '../../../../../common/models/Schedule';
import { ScheduleService } from './schedule.service';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { format, getDaysInMonth, getDate, getHours, isAfter, parseISO } from 'date-fns'
import { formatWithOptions } from 'date-fns/fp'
import { ptBR } from 'date-fns/locale';
import Horario from '../../../../../common/models/Horario';
const date1 = new Date("Mon, 3 Oct 2021 13:30:00");
@Component({
  selector: 'app-root',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})

export class ScheduleComponent implements OnInit {
  title = 'consultai';
  
  consulta: Schedule = { id: "", horario: date1, patientCPF: "", medicCRM: "",created_at:new Date(), updated_at:new Date() };
  consulta_aux: Schedule = { id: "", horario: date1, patientCPF: "", medicCRM: "",created_at:new Date(), updated_at:new Date() };
  public show: boolean = false;
  public inputs!: FormGroup;
  //como criar um vetor de consultas?
  medicos: Medical[] = [];
  consultas: Schedule[] = [];
  paciente: Patient={cpf: '123',name: 'Cadu',email: 'cadu@cadu.com',idade: 24,created_at:new Date(),updated_at: new Date()};
  medicos_especialidade: Medical[] = [];
  private especialidade_medica=""
  constructor(
    private scheduleService: ScheduleService,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.medicos.length = 0;

     this.scheduleService.getall()
      .subscribe(data => {
        console.log(data);
        this.medicos = data.map(({ crm, name, especialidade, email, horarios, created_at, updated_at }) => {
          console.log( this.medicos );
          return new Medical(
            crm,
            name,
            especialidade,
            email,
            horarios,
            parseISO(String(created_at)),
            parseISO(String(updated_at))
          );
        })
      })
      
      this.inputs = this.fb.group({

        especialidade_input: [''],
        data_input: ['']

      });

      
      console.log(this.paciente);
      console.log(this.paciente.idade);
      //Cannot set property 'cpf' of undefined at ScheduleComponent.ngOnInit
  }

  salvar( medico_crm: string, horario: Date): void {
    //pegando o id e o horario direito
    this.scheduleService.getConsultasPaciente(this.paciente.cpf)
      .subscribe(data => {
        console.log(data);
        this.consultas = data.map(({ id,  patientCPF, horario, medicCRM, created_at, updated_at }) => {
          
          return new Schedule(
            id,
            patientCPF,
            medico_crm,
            horario,
            created_at,
            updated_at
          );
        })
      })
   /* if (this.consulta.paciente_cpf == paciente_cpf) {
      this.consulta_aux.id = id;
      this.consulta_aux.horario = horario;
      this.consulta_aux.paciente_cpf = paciente_cpf;
      this.consulta_aux.medico_crm = medico_crm;
      this.show = true;
    }
    else {
      this.consulta.id = id;
      this.consulta.horario = horario;
      this.consulta.paciente_cpf = paciente_cpf;
      this.consulta.medico_crm = medico_crm;
      alert("Consulta marcada para às " + this.consulta.horario + "h" + "Com Dr:" + "Nome do médico");
    }*/


  } 
  zerar(){
    this.scheduleService.getall()
      .subscribe(data => {
        console.log(data);
        this.medicos = data.map(({ crm, name, especialidade, email, horarios, created_at, updated_at }) => {
          console.log( this.medicos );
          return new Medical(
            crm,
            name,
            especialidade,
            email,
            horarios,
            parseISO(String(created_at)),
            parseISO(String(updated_at))
          );
        })
      })
      
  }
  filtrarEspecialidade(){
    //this.especialidade_medica=this.inputs.value.especialidade_input
    //console.log(this.inputs.value.especialidade_input);
    this.medicos.length = 0;
    console.log(this.inputs.value.especialidade_input);
    this.scheduleService.getespecialidade(this.inputs.value.especialidade_input)
      .subscribe(data => {
        console.log(data);
        this.medicos = data.map(({ crm, name, especialidade, email, horarios, created_at, updated_at }) => {
          return new Medical(
            crm,
            name,
            especialidade,
            email,
            horarios,
            parseISO(String(created_at)),
            parseISO(String(updated_at))
          );
        })
      })
    //console.log(this.inputs.value.medicos);

  }
  filtrarData(){
    this.medicos.length = 0;
  }


}
