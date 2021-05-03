import { Router } from 'express'
import MedicsList from '../lists/MedicsList'
import PatientsList from '../lists/PatientsList'
import SchedulingsList from '../lists/SchedulingsList'
import MedicService from '../services/MedicService'

const medicsRouter = Router()

const medicsList = new MedicsList()
const schedulingsList = new SchedulingsList()
const patientsList = new PatientsList()
const medicsService = new MedicService(schedulingsList, patientsList, medicsList)

medicsRouter.post('/', (request, response) => {
    const { crm, nome, especialidade, email } = request.body

    const medic = medicsList.create(crm, nome, especialidade, email)

    return response.json(medic)
})

medicsRouter.get('/', (request, response) => {
    const medics = medicsList.getAll()

    return response.json(medics)
})

medicsRouter.get('/:crm', (request, response) => {
    const { crm } = request.params
    const medic = medicsList.findByCrm(crm)

    return response.json(medic)
})


medicsRouter.delete('/:crm', (request, response) => {
    try {
        const { crm } = request.params
        const medic = medicsList.delete(crm)

        return response.json(medic)
    } catch(err) {
        return response.status(404).json({ error: 'Cannot delete a non-existing medic' })
    }
})

medicsRouter.get('/patients/:crm', (request, response) => {
    const { crm } = request.params
    const res = medicsService.getPatients(crm)

    return response.json(res)
})

medicsRouter.get('/espec/:especialidade', (request, response) => {
    const { especialidade } = request.params
    
    const schedule = medicsService.filtrarPorEspecialidade(especialidade)

    return response.json(schedule)
})

medicsRouter.get('/appointments/:crm', (request, response) => {
    const { crm } = request.params

    const consultas = medicsService.getSchedules(crm)
    return response.json(consultas)   
})

export default medicsRouter