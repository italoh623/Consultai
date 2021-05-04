import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Medical } from '../../../../../common/models/Medical';
import { ScheduleService } from './schedule.service';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { format, getDaysInMonth, getDate, getHours, isAfter, parseISO } from 'date-fns'
import { formatWithOptions } from 'date-fns/fp'
import { ptBR } from 'date-fns/locale';

@Component({
  selector: 'app-root',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})

export class ScheduleComponent implements OnInit {
  title = 'consultai';
  consulta: Consulta = { id: 0, horario: 0, paciente_cpf: 0, medico_crm: 0 };
  consulta_aux: Consulta = { id: 0, horario: 0, paciente_cpf: 0, medico_crm: 0 };
  public show: boolean = false;
  public inputs!: FormGroup;
  //como criar um vetor de consultas?
  medicos: Medical[] = [];
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

  }

  salvar(id: Number, horario: Number, paciente_cpf: Number, medico_crm: Number): void {
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

export class Consulta {
  id: Number;
  horario: Number;
  paciente_cpf: Number;
  medico_crm: Number;

  constructor(id: Number, horario: Number, paciente_cpf: Number, medico_crm: Number) {
    this.id = id;
    this.horario = horario;
    this.paciente_cpf = paciente_cpf;
    this.medico_crm = medico_crm;

  }

}