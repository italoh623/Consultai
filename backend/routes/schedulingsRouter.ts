import { Router } from 'express'
import SchedulingsList from '../lists/SchedulingsList'
import SchedulingService from '../services/SchedulingService'

const schedulingsRouter = Router()

const schedulingsList = new SchedulingsList()
const schedulingService = new SchedulingService(schedulingsList)

schedulingsRouter.post('/', (request, response) => {
    const { horario, patientCPF, medicCRM } = request.body

    const schedule = schedulingService.agendar(horario, patientCPF, medicCRM)

    return response.json(schedule)
})

schedulingsRouter.get('/', (request, response) => {
    return schedulingService.listar()
})

schedulingsRouter.delete('/:id', (request, response) => {
    const { id } = request.params

    return schedulingService.cancelar(id)
})

export default schedulingsRouter