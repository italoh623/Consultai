import MedicalAppointmentsList from "../lists/MedicalAppointmentsList"
import SchedulingsList from "../lists/SchedulingsList"
import MedicalAppointment from "../models/MedicalAppointment"
import Scheduling from "../models/Scheduling"

class MedicalAppointmentService {
    private medicalAppointmentsList: MedicalAppointmentsList
    private schedulingsList: SchedulingsList

    constructor(medicalAppointmentsList: MedicalAppointmentsList, schedulingsList: SchedulingsList) {
        this.medicalAppointmentsList = medicalAppointmentsList
        this.schedulingsList = schedulingsList
    }

    create(agendamentoId: string): MedicalAppointment {
        const existentSchedule = this.schedulingsList.findById(agendamentoId)

        if(!existentSchedule) {
            throw new Error('Schedule does not exists!')
        }

        const existentMedicalAppointment = this.medicalAppointmentsList.findById(agendamentoId)

        if(existentMedicalAppointment) {
            throw new Error('Medical appointment already exists!')
        }

        const medicalAppointment = this.medicalAppointmentsList.create(agendamentoId)

        return medicalAppointment
    }

    delete(id: string): void {
        this.medicalAppointmentsList.delete(id)
    }

    getMedicalAppointmentbySchedule(schedulingId: string): MedicalAppointment {
        const medicalAppointment = this.medicalAppointmentsList.findBySchedulingId(schedulingId)
        
        return medicalAppointment
    }


}

export default MedicalAppointmentService