import { Router } from 'express'
import MedicsList from '../lists/MedicsList'
import PatientsList from '../lists/PatientsList'
import SchedulingsList from '../lists/SchedulingsList'
import SchedulingService from '../services/SchedulingService'

const schedulingsRouter = Router()

const schedulingsList = SchedulingsList.getInstance()
const medicsList = MedicsList.getInstance()
const patientsList = new PatientsList()
const schedulingService = new SchedulingService(schedulingsList, medicsList,patientsList)

schedulingsRouter.post('/', (request, response) => {
    try {
        const { horario, patientCPF, medicCRM } = request.body
        // console.log(horario, patientCPF, medicCRM)

        const schedule = schedulingService.agendar(horario, patientCPF, medicCRM)

        return response.json(schedule)
    } catch(err) {
        return response.status(400).json({ error: err.message })
    }
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
schedulingsRouter.get('/medics', (request, response) => {
    const medics = schedulingService.getAll()

    return response.json(medics)
})

schedulingsRouter.get('/medic/:crm', (request, response) => {
    const { crm } = request.params

    const schedules = schedulingService.findAllByCrm(crm)

    return response.json(schedules)
})
schedulingsRouter.get('/patient/:cpf', (request, response) => {
    const { cpf } = request.params

    const schedules = schedulingService.getConsultasPaciente(cpf)

    return response.json(schedules)
})

schedulingsRouter.get('/patient/:cpf', (request, response) => {
    const { cpf } = request.params

    const schedules = schedulingService.findAllByCPF(cpf)

    return response.json(schedules)
})

schedulingsRouter.delete('/:id', (request, response) => {
    const { id } = request.params

    schedulingService.cancelar(id)

    return response.send()
})


export default schedulingsRouter