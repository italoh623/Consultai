import { v1 as uuid } from 'uuid'

class Scheduling {
    id: string
    patientCPF: string
    medicCRM: string
    horario: Date
    created_at: Date
    updated_at: Date

    constructor(
        patientCPF: string,
        medicCRM: string,
        horario: Date,
        created_at: Date,
        updated_at: Date
    ) {
        this.id = uuid()
        this.patientCPF = patientCPF
        this.medicCRM = medicCRM
        this.horario = horario
        this.created_at = created_at
        this.updated_at = updated_at
    }
}

export default Scheduling