import { Router } from 'express'
import MedicalAppointmentsList from '../lists/MedicalAppointmentsList'
import SchedulingsList from '../lists/SchedulingsList'
import MedicalAppointmentService from '../services/MedicalAppointmentService'

const medicalAppointmentsRouter = Router()
const schedulingsList = new SchedulingsList()
const medicalAppointmentsList = new MedicalAppointmentsList()


medicalAppointmentsRouter.post('/', (request, response) => {
    const { agendamentoId } = request.body
    
    const medicalAppointmentService = new MedicalAppointmentService(medicalAppointmentsList, schedulingsList)

    const createMedicalAppointment = medicalAppointmentService.create(agendamentoId)

    return response.json(createMedicalAppointment)
})

medicalAppointmentsRouter.get('/:agendamentoId', (request, response) => {
    const { agendamentoId } = request.params
    
    const medicalAppointmentService = new MedicalAppointmentService(medicalAppointmentsList, schedulingsList)

    const schedule = medicalAppointmentService.getSchedule(agendamentoId)

    return response.json(schedule)
})

medicalAppointmentsRouter.delete('/:id', (request, response) => {
    const { id } = request.params

    const medicalAppointmentService = new MedicalAppointmentService(medicalAppointmentsList, schedulingsList)

    medicalAppointmentService.delete(id)

    return response.send()
})

export default medicalAppointmentsRouter