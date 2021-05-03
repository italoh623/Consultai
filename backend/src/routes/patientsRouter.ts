import { Router } from 'express'
import PatientsList from '../lists/PatientsList'

const patientsRouter = Router()

const patientsList = new PatientsList()


patientsRouter.post('/', (request, response) => {
    try {
        const { cpf, nome, idade, email } = request.body

        const patient = patientsList.create(
            cpf,
            nome,
            idade,
            email
        )

        return response.json(patient)
    } catch(err) {
        return response.status(400).json({ error: 'Patient already exists' })
    }
})

patientsRouter.get('/', (request, response) => {
    const patients = patientsList.getAll()
    return response.json(patients)
})

patientsRouter.get('/:cpf', (request, response) => {
    const { cpf } = request.params
    const patient = patientsList.findByCpf(cpf)

    return response.json(patient)
})


patientsRouter.delete('/:cpf', (request, response) => {
    try {
        const { cpf } = request.params
        const patient = patientsList.delete(cpf)

        return response.json(patient)
    } catch(err) {
        return response.status(404).json({ error: 'Cannot delete a non-existing patient' })
    }
})

export default patientsRouter
