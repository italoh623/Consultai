import { v1 as uuid } from 'uuid'

class Scheduling {
    id: string
    patientCPF: string
    medicCRM: string
    horario: Date
    created_at: Date
    updated_at: Date

    constructor() {
        this.id = uuid()
    }
}

export default Scheduling