import { v1 as uuid } from 'uuid'

class MedicalAppointment {
    id: string
    url: string
    onCall: boolean
    agendamentoId: string

    constructor() {
        this.id = uuid()
        this.onCall = false
    }
}

export default MedicalAppointment