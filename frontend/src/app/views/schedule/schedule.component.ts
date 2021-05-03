import { Component, OnInit } from '@angular/core';
import { Medic } from '../../../../../backend/src/models/Medic';
import { format, isSameDay, parseISO } from 'date-fns'
import { ScheduleService } from './schedule.service';
@Component({
  selector: 'app-root',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})

export class ScheduleComponent implements OnInit{
  title = 'consultai';
  consulta:Consulta={id:0,horario:0,paciente_cpf:0,medico_crm:0};
  consulta_aux:Consulta={id:0,horario:0,paciente_cpf:0,medico_crm:0};
  public show:boolean = false;

 //como criar um vetor de consultas?
  medicos:Medic[]=[];


  constructor(private scheduleService:ScheduleService) {
    
   }

  ngOnInit(): void {
    this.scheduleService.getespecialidade("cardiologista")
    .subscribe(data =>{
      this.medicos=data.map(({ crm, name,especialidade,email,horarios,created_at,updated_at})=>{
        return new Medic(
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

  salvar(id:Number,horario: Number,paciente_cpf:Number, medico_crm:Number): void {  
    if(this.consulta.paciente_cpf==paciente_cpf){
      this.consulta_aux.id=id;
      this.consulta_aux.horario=horario;
      this.consulta_aux.paciente_cpf=paciente_cpf;
      this.consulta_aux.medico_crm=medico_crm;
      this.show=true;
    }
    else{
      this.consulta.id=id;
      this.consulta.horario=horario;
      this.consulta.paciente_cpf=paciente_cpf;
      this.consulta.medico_crm=medico_crm;
      alert("Consulta marcada para às "+this.consulta.horario+"h"+"Com Dr:"+"Nome do médico"); 
    }


  } 
  filtrarEspecialidade(especialidade:string){
    
  }


}

export class Consulta{
 id: Number;
 horario: Number;
 paciente_cpf:Number;
 medico_crm:Number;

 constructor(id:Number,horario: Number,paciente_cpf:Number, medico_crm:Number) {
  this.id=id;
  this.horario=horario;
  this.paciente_cpf=paciente_cpf;
  this.medico_crm=medico_crm;

  }

}