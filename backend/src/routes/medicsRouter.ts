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

export default medicsRouter