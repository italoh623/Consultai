import { Router } from 'express'
import ArchiveList from '../lists/ArchiveList'
import Archive from '../models/Archive'


const archivesRouter = Router()

const archivesList = new ArchiveList()

const archives = []

archivesRouter.post('/', (request, response) => {
    const { cpf, crm, obs, description, conteudo } = request.body

    const archive = new Archive()

    Object.assign(archive, {
        cpf,
        crm,
        obs,
        description, 
        conteudo,
        created_at: new Date,
        updated_at: new Date
    })

    archivesList.add(archive)

    return response.json(archive)
})

archivesRouter.put('/', (request, response) => {
    return response.send()
})

archivesRouter.get('/:cpf', (request, response) => {
    let { cpf } = request.params
    let archs = archivesList.getByCPF(cpf)

    response.json(archs)
})

archivesRouter.get('/id/:id', (request, response) => {
    let { id } = request.params
    let arc = archivesList.getById(id)

    response.json(arc)
})

archivesRouter.delete('/:id', (request, response) => {
    return response.send()
})

export default archivesRouter
