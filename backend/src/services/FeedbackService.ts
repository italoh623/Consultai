import FeedbacksList from "../lists/FeedbacksList"
import MedicalAppointmentsList from "../lists/MedicalAppointmentsList"
import MedicsList from "../lists/MedicsList"
import SchedulingsList from "../lists/SchedulingsList"
import MedicalAppointment from "../models/MedicalAppointment"

class FeedbackService {
    private feedbackList: FeedbacksList
    private medicalAppointmentsList: MedicalAppointmentsList
    private schedulingsList: SchedulingsList
    private medicsList: MedicsList

    constructor(feedbackList: FeedbacksList, medicalAppointmentsList: MedicalAppointmentsList, schedulingsList: SchedulingsList, medicsList: MedicsList ) {
        this.feedbackList = feedbackList
        this.medicalAppointmentsList = medicalAppointmentsList
        this.schedulingsList = schedulingsList
        this.medicsList = medicsList
    }

    /* getMedicalAppointment(consultaId: string): MedicalAppointment {
        const medicalAppointment = this.medicalAppointmentsList.findById(consultaId)

        return medicalAppointment
    } */

    getEmail(consultaId: string): string {
        const medicalAppointment = this.medicalAppointmentsList.findById(consultaId)
        const agendamentoId = medicalAppointment.agendamentoId
        console.log(agendamentoId)

        const schedule = this.schedulingsList.findById(agendamentoId)
        const medicCRM = schedule.medicCRM

        const medic = this.medicsList.findByCrm(medicCRM)
        const email = medic.email

        return email
    } 

    async execute({ consultaId, rating, descricao }) {
        const createFeedback = this.feedbackList.create({
            consultaId,
            rating,
            descricao
        })

        await this.feedbackList.sendEmail(createFeedback.id, this.getEmail(createFeedback.consultaId))

        return createFeedback
    }
}

export default FeedbackService