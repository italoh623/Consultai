import { Router } from 'express'
import MedicsList from '../lists/MedicsList'
// import PatientsList from '../lists/PatientsList'
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

schedulingsRouter.get('/month', (request, response) => {
    const { crm, date } = request.query

    const avaiable = schedulingService.filtrarDisponibilidadePorMes({
        medicCRM: String(crm),
        date: String(date)
    })

    return response.json(avaiable)
})

schedulingsRouter.get('/day', (request, response) => {
    const { crm, date } = request.query

    const avaiable = schedulingService.filtrarDisponibilidadePorDia({
        medicCRM: String(crm),
        date: String(date)
    })

    return response.json(avaiable)
})

schedulingsRouter.get('/:especialidade', (request, response) => {
    const { especialidade } = request.params

    const schedule = schedulingService.filtrarPorEspecialidade(especialidade)

    return response.json(schedule)
})

schedulingsRouter.get('/medic/:crm', (request, response) => {
    const { crm } = request.params

    const schedules = schedulingService.findAllByCrm(crm)

    return response.json(schedules)
})

schedulingsRouter.delete('/:id', (request, response) => {
    const { id } = request.params

    schedulingService.cancelar(id)

    return response.send()
})


export default schedulingsRouter