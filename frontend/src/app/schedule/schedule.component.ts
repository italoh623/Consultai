import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit{
  title = 'consultai';
  consulta:Consulta={id:1,horario:2,paciente_cpf:111,medico_crm:222};
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
      alert("Consulta:"+this.consultas[0].id+" horário:"+this.consultas[0].horario+"h"+"Medico:"+this.consultas[0].horario+"Paciente:" + this.consultas[0].paciente_cpf); 
    }
    
  } 
  mostrar(){
    alert("Consulta:"+this.consultas[0].id+" horário:"+this.consultas[0].horario+"h"); 
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