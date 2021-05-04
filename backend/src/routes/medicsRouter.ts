import { Router } from 'express'
import MedicsList from '../lists/MedicsList'
import PatientsList from '../lists/PatientsList'
import SchedulingsList from '../lists/SchedulingsList'
import MedicService from '../services/MedicService'

const medicsRouter = Router()

const medicsList = MedicsList.getInstance()
const schedulingsList = SchedulingsList.getInstance()
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

medicsRouter.get('/schedules/:crm', (request, response) => {
    const { crm } = request.params

    const consultas = medicsService.getSchedules(crm)
    return response.json(consultas)   
})

medicsRouter.post('/apt-file', (request, response) => {
    const { 
        pacientCPF, 
        medicCRM, 
        consultaId, 
        queixas, 
        doencas, 
        medicacoes, 
        antecedentes, 
        peso, 
        altura, 
        pressao_art, 
        hipotese, 
        conduta 
    } = request.body

    const file = medicsService.insertAppointmentFile(
        pacientCPF, 
        medicCRM, 
        consultaId, 
        queixas, 
        doencas, 
        medicacoes, 
        antecedentes, 
        peso, 
        altura, 
        pressao_art, 
        hipotese, 
        conduta
    )
    
    return response.json(file)
})

medicsRouter.get('/apt-files/:cpf', (request, response) => {
    const { cpf } = request.params
    const files = medicsService.getPatientFiles(cpf)

    return response.json(files)
})

export default medicsRouter