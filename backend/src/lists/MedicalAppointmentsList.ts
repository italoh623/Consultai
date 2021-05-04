import MedicalAppointment from "../models/MedicalAppointment"
// import Scheduling from "../models/Scheduling"

class MedicalAppointmentsList {
    private medicalAppointments: MedicalAppointment[]

    constructor() {
        this.medicalAppointments = [
        {
            id: '12',
            url: 'www.google.com.br',
            onCall: false,
            agendamentoId: '3'
        },
        {
            id: '11',
            url: 'www.google.com.br/oie',
            onCall: false,
            agendamentoId: '4'
        }
    ]
}

    create(agendamentoId: string) {
        const medicalAppointment = new MedicalAppointment()

        Object.assign(medicalAppointment, {
            agendamentoId,
            url: null,
        })

        this.medicalAppointments.push(medicalAppointment)

        return medicalAppointment
    }

    edit(id:string, onCall: boolean, url: string): MedicalAppointment {
        const appointmentIndex = this.medicalAppointments.findIndex(appointment => appointment.id === id)

        const appointment = this.medicalAppointments[appointmentIndex]

        appointment.url = url
        appointment.onCall = onCall

        this.medicalAppointments.splice(appointmentIndex, 1, appointment)

        return appointment
    }

    delete(id: string): void {
        const appointmentIndex = this.medicalAppointments.findIndex(appointment => appointment.id === id)

        // const appointment = this.medicalAppointments[appointmentIndex]

        this.medicalAppointments.splice(appointmentIndex, 1)
    }

    findById(id: string): MedicalAppointment {
        const medicalAppointment = this.medicalAppointments.find(app => app.id === id)

        return medicalAppointment
    }

}

export default MedicalAppointmentsList