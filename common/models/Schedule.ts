export class Schedule {
  id: string;
  patientCPF: string;
  medicCRM: string;
  horario: Date;
  created_at: Date;
  updated_at: Date;

  constructor(
    id: string, 
    patientCPF: string, 
    medicCRM: string, 
    horario: Date,
    created_at: Date,
    updated_at: Date
  ) {
    this.id = id;
    this.patientCPF = patientCPF;
    this.medicCRM = medicCRM;
    this.horario = horario;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}