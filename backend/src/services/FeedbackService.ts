// import IFeedbacksList from "../lists/IFeedbacksList"
import MedicalAppointmentsList from "../lists/MedicalAppointmentsList"
import MedicsList from "../lists/MedicsList"
import SchedulingsList from "../lists/SchedulingsList"
import Feedback from "../models/Feedback"
// import MedicalAppointment from "../models/MedicalAppointment"

class FeedbackService {
    // private feedbackList: IFeedbacksList
    private medicalAppointmentsList: MedicalAppointmentsList
    private schedulingsList: SchedulingsList
    private medicsList: MedicsList

    constructor( medicalAppointmentsList: MedicalAppointmentsList, schedulingsList: SchedulingsList, medicsList: MedicsList ) {
        // this.feedbackList = feedbackList
        this.medicalAppointmentsList = medicalAppointmentsList
        this.schedulingsList = schedulingsList
        this.medicsList = medicsList
    }

    /* getMedicalAppointment(consultaId: string): MedicalAppointment {
        const medicalAppointment = this.medicalAppointmentsList.findById(consultaId)

        return medicalAppointment
    } */

    /* getEmail(consultaId: string): string {
        const medicalAppointment = this.medicalAppointmentsList.findById(consultaId)
        const agendamentoId = medicalAppointment.agendamentoId
        // console.log(agendamentoId)

        const schedule = this.schedulingsList.findById(agendamentoId)
        const medicCRM = schedule.medicCRM
        // console.log(medicCRM)

        const medic = this.medicsList.findByCrm(medicCRM)
        const email = medic.email
        // console.log(email)

        return email
    } */ 

    // async execute({ consultaId, rating, descricao }): Promise<Feedback> {
    //     const createFeedback = this.feedbackList.create({
    //         consultaId,
    //         rating,
    //         descricao
    //     })
    //     // console.log(createFeedback)

    //     const medicalAppointment = this.medicalAppointmentsList.findById(createFeedback.consultaId)
    //     const agendamentoId = medicalAppointment.agendamentoId
    //     // console.log(agendamentoId)

    //     const schedule = this.schedulingsList.findById(agendamentoId)
    //     const medicCRM = schedule.medicCRM
    //     // console.log(medicCRM)

    //     const medic = this.medicsList.findByCrm(medicCRM)
    //     const emailMedic = medic.email
    //     // console.log(email)

    //     await this.feedbackList.sendEmail(createFeedback.id, emailMedic)

    //     return createFeedback
    // }
}

export default FeedbackService