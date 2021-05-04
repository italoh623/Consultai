import { Router } from 'express'
import FeedbacksList from '../lists/FeedbacksList'
import MedicalAppointmentsList from '../lists/MedicalAppointmentsList'
import MedicsList from '../lists/MedicsList'
import SchedulingsList from '../lists/SchedulingsList'
import FeedbackService from '../services/FeedbackService'

const feedbacksRouter = Router()
const feedbacksList = FeedbacksList.getInstance()
const medicalAppointmentsList = MedicalAppointmentsList.getInstance()
const schedulingsList = SchedulingsList.getInstance()
const medicsList = MedicsList.getInstance()


feedbacksRouter.post('/', async(request, response) => {
    try {
        const { consultaId, rating, descricao } = request.body

        const sendFeedbackService = new FeedbackService(feedbacksList, medicalAppointmentsList, schedulingsList, medicsList)

        await sendFeedbackService.execute({ 
            consultaId,  
            rating,
            descricao
        })

        return response.json({ status: 'Email enviado com sucesso' })
        } catch(err) {
            return response.status(400).json({ error: err.message })
        }
})


feedbacksRouter.get('/', (request, response) => {
    return response.send()
})

feedbacksRouter.delete('/:id', (request, response) => {
    return response.send()
})

export default feedbacksRouter