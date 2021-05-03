import { Router } from 'express'

const medicalRecordsRouter = Router()

import MedicalRecordsList from '../lists/MedicalRecordsList'

const medicalRecordList = new MedicalRecordsList

medicalRecordsRouter.post('/', (request, response) => {
    const { patientCPF, conteudo } = request.body
    return response.send()
})

medicalRecordsRouter.get('/', (request, response) => {
    return response.send()
})

medicalRecordsRouter.delete('/:id', (request, response) => {
    return response.send()
})

export default medicalRecordsRouter