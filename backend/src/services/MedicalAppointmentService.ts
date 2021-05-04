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

    create(consultaId: string): MedicalAppointment {
        const medicalAppointment = this.medicalAppointmentsList.create(consultaId)

        return medicalAppointment
    }

    delete(id: string): void {
        this.medicalAppointmentsList.delete(id)
    }

    getSchedule(agendamentoId: string): Scheduling {
        const schedule = this.schedulingsList.findById(agendamentoId)
        
        return schedule
    }

}

export default MedicalAppointmentService