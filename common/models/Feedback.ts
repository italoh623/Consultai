export class Feedback {
  id: string
  consultaId: string
  rating: string
  descricao: string

  constructor(id: string, consultaId: string, rating: string, descricao: string) {
    this.id = id;
    this.consultaId = consultaId;
    this.rating = rating;
    this.descricao = descricao;
  }
}