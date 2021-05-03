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

schedulingsRouter.get('/:especialidade', (request, response) => {
    const { especialidade } = request.params
    
    const schedule = schedulingService.filtrarPorEspecialidade(especialidade)

    return response.json(schedule)
})

schedulingsRouter.delete('/:id', (request, response) => {
    const { id } = request.params

    schedulingService.cancelar(id)

    return response.send()
})

export default schedulingsRouter