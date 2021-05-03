import { Router } from 'express'
import FeedbacksList from '../lists/FeedbacksList'
// import MedicalAppointmentsList from '../lists/MedicalAppointmentsList'
// import SchedulingsList from '../lists/SchedulingsList'
import FeedbackService from '../services/FeedbackService'

const feedbacksRouter = Router()
const feedbacksList = new FeedbacksList()


feedbacksRouter.post('/', async(request, response) => {
    // const { consultaId } = request.params => precisa pegar o email do médico, discutir como fazer.
    
    const { rating, descricao } = request.body

    const sendFeedbackService = new FeedbackService(feedbacksList, )

    await sendFeedbackService.execute({   
        email: 'junior@junior.com',
        rating,
        descricao
    })

    return response.json({ status: 'Email enviado com sucesso' })
})

feedbacksRouter.get('/', (request, response) => {
    return response.send()
})

feedbacksRouter.delete('/:id', (request, response) => {
    return response.send()
})

export default feedbacksRouter