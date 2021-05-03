import { Router } from 'express'
import MedicsList from '../lists/MedicsList'
import PatientsList from '../lists/PatientsList'
import SchedulingsList from '../lists/SchedulingsList'
import SchedulingService from '../services/SchedulingService'

const schedulingsRouter = Router()

const schedulingsList = new SchedulingsList()
const medicsList = new MedicsList()
const patientsList = new PatientsList()
const schedulingService = new SchedulingService(schedulingsList, medicsList, patientsList)

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

schedulingsRouter.get('/patients/:crm', (request, response) => {
    const { crm } = request.params
    const res = schedulingService.getPatientsByCRM(crm)

    return response.json(res)
})

export default schedulingsRouter