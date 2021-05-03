import { Router } from 'express'
import MedicsList from '../lists/MedicsList'
import PatientsList from '../lists/PatientsList'
import SchedulingsList from '../lists/SchedulingsList'
import SchedulingService from '../services/SchedulingService'

const schedulingsRouter = Router()

const schedulingsList = new SchedulingsList()
const medicsList = new MedicsList()
const schedulingService = new SchedulingService(schedulingsList, medicsList)

schedulingsRouter.post('/', (request, response) => {
    const { horario, patientCPF, medicCRM } = request.body

    const schedule = schedulingService.agendar(horario, patientCPF, medicCRM)

    return response.json(schedule)
})

schedulingsRouter.post('/month', (request, response) => {
    const { crm, mes, ano } = request.body

    const avaiable = schedulingService.filtrarDisponibilidadePorMes({
        medicCRM: crm,
        mes,
        ano
    })

    return response.json(avaiable)
})

schedulingsRouter.post('/day', (request, response) => {
    const { crm, dia, mes, ano } = request.body

    const avaiable = schedulingService.filtrarDisponibilidadePorDia({
        medicCRM: crm,
        dia,
        mes,
        ano
    })

    return response.json(avaiable)
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