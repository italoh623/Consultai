import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit{
  title = 'consultai';
  consulta:Consulta={id:0,horario:0,paciente_cpf:0,medico_crm:0};
 //como criar um vetor de consultas?
  consultas:Consulta[]=[];
  constructor() {

   }

  ngOnInit(): void {
 
  }

  salvar(id:Number,horario: Number,paciente_cpf:Number, medico_crm:Number): void {  
    if(this.consulta.paciente_cpf==paciente_cpf){
      alert("A consulta já foi marcada para:"+this.consultas[0].horario+"h"); 
    }
    else{
      this.consulta.id=id;
      this.consulta.horario=horario;
      this.consulta.paciente_cpf=paciente_cpf;
      this.consulta.medico_crm=medico_crm;
      this.consultas.push(this.consulta);
      alert("Consulta:"+this.consulta.id+" horário:"+this.consulta.horario+"h"+"Medico:"+this.consulta.horario+"Paciente:" + this.consulta.paciente_cpf); 
    }


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