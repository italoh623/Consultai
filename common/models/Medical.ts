import Horario from "./Horario"

export class Medical {
    crm: string
    name: string
    especialidade: string
    email: string
    horarios: Horario[]
    created_at: Date
    updated_at: Date

    constructor(
        crm: string,
        name: string,
        especialidade: string,
        email: string,
        horarios: Horario[],
        created_at: Date,
        updated_at: Date
    ) {
        this.crm = crm
        this.name = name 
        this.especialidade = especialidade
        this.email = email
        this.horarios = horarios 
        this.created_at = created_at
        this.updated_at = updated_at
    }
}
