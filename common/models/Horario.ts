export default class Horario {
    disponivel: Boolean
    horario: Date

    constructor(
        disponivel: Boolean,
        horario: Date
    ) {
        this.disponivel = disponivel
        this.horario = horario
    }
}