import { Router } from 'express'
import PatientsList from '../lists/PatientsList'

const patientsRouter = Router()

const patientsList = new PatientsList()


patientsRouter.post('/', (request, response) => {
    const { cpf, nome, idade, email } = request.body

    const patient = patientsList.create(
        cpf,
        nome,
        idade,
        email
    )

    return response.json(patient)
})

patientsRouter.get('/', (request, response) => {
})

patientsRouter.delete('/:cpf', (request, response) => {
})

export default patientsRouter
