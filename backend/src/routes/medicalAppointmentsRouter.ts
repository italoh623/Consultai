import { Router } from 'express'
import MedicalAppointmentsList from '../lists/MedicalAppointmentsList'
import SchedulingsList from '../lists/SchedulingsList'
import MedicalAppointmentService from '../services/MedicalAppointmentService'

const medicalAppointmentsRouter = Router()
const schedulingsList = SchedulingsList.getInstance()
const medicalAppointmentsList = MedicalAppointmentsList.getInstance()

const medicalAppointmentService = new MedicalAppointmentService(medicalAppointmentsList, schedulingsList)

medicalAppointmentsRouter.post('/', (request, response) => {
    try {
        const { agendamentoId } = request.body

        const createMedicalAppointment = medicalAppointmentService.create(agendamentoId)

        return response.json(createMedicalAppointment)
    } catch(err) {
        return response.status(400).json({ error: err.message })
    }
})

medicalAppointmentsRouter.get('/agendamento/:agendamentoId', (request, response) => {
    const { agendamentoId } = request.params
    
    const medicalAppointment = medicalAppointmentService.getMedicalAppointmentbySchedule(agendamentoId)

    return response.json(medicalAppointment)
})


medicalAppointmentsRouter.delete('/:id', (request, response) => {
    const { id } = request.params

    medicalAppointmentService.delete(id)

    return response.send()
})

export default medicalAppointmentsRouter