import { Component, OnInit } from '@angular/core';
import { format, isSameDay, parseISO } from 'date-fns'
import { FormBuilder, FormGroup } from '@angular/forms';
import { Medical } from '../../../../../common/models/Medical';
import { ScheduleService } from './schedule.service';

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

  constructor(
    private scheduleService: ScheduleService,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.scheduleService.getespecialidade("dermatologista")
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
      this.inputs = this.fb.group({

        especialidade_input: [''],
        data_input: ['']

      });
      
  }

  salvar(id: Number, horario: Number, paciente_cpf: Number, medico_crm: Number): void {
    if (this.consulta.paciente_cpf == paciente_cpf) {
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
    }


  } 
  //filtrarEspecialidade(especialidade:string){
  filtrarEspecialidade(){
    console.log(this.inputs.value.especialidade_input);
  }
  filtrarData(){
    console.log(this.inputs.value.data_input);
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