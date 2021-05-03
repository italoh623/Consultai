export class MedicalAppointment {
  id: string;
  url: string;
  onCall: boolean;
  agendamentoId: string;

  constructor(id: string, url: string, onCall: boolean, agendamentoId: string) {
    this.id = id;
    this.url = url;
    this.onCall = onCall;
    this.agendamentoId = agendamentoId;
  }
}