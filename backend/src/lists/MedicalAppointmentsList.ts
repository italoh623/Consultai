import MedicalAppointment from "../models/MedicalAppointment"

class MedicalAppointmentsList {
    private medicalAppointment: MedicalAppointment[]

    constructor() {
        this.medicalAppointment = [
        {
            id: '12',
            url: 'www.google.com.br',
            onCall: false,
            agendamentoId: '3'
        }
        ]
    }

    findById(id: string): MedicalAppointment {
        const medicalAppointment = this.medicalAppointment.find(schedule => schedule.id === id)

        return medicalAppointment
    }

}

export default MedicalAppointmentsList