export class Feedback {
  id: string
  consultaId: string
  rating: string
  descricao: string

  constructor(consultaId: string, rating: string, descricao: string) {
    this.consultaId = consultaId;
    this.rating = rating;
    this.descricao = descricao;
  }
}