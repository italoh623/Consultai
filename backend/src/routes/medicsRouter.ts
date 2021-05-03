import { Router } from 'express'
import MedicsList from '../lists/MedicsList'

const medicsRouter = Router()

const medicsList = new MedicsList()

medicsRouter.post('/', (request, response) => {
    const { crm, nome, especialidade, email } = request.body

    const medic = medicsList.create(crm, nome, especialidade, email)

    return response.json(medic)
})

medicsRouter.get('/', (request, response) => {
    return response.send()
})

medicsRouter.delete('/:crm', (request, response) => {
    return response.send()
})

export default medicsRouter