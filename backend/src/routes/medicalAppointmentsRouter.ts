import { Router } from 'express'

import MedicalAppointments from '../models/MedicalAppointment'


const medicalAppointmentsRouter = Router()

const medicalAppointments = []

medicalAppointmentsRouter.post('/', (request, response) => {
    // discutir se é necessário
})

medicalAppointmentsRouter.get('/', (request, response) => {
    return response.send()
})

medicalAppointmentsRouter.delete('/:crm', (request, response) => {
    return response.send()
})

export default medicalAppointmentsRouter