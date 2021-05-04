import { v4 as uuid } from 'uuid'

class Scheduling {
    id: string
    patientCPF: string
    medicCRM: string
    horario: Date
    created_at: Date
    updated_at: Date

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }

}

export default Scheduling