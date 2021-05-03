import { Router } from 'express'
import Feedback from '../models/Feedback'

const feedbacksRouter = Router()

const feedbacks = []

feedbacksRouter.post('/', (request, response) => {
    const { consultaId, descricao } = request.body

    const feedback = new Feedback()

    Object.assign(feedback, {
        consultaId,
        descricao
    })

    feedbacks.push(feedback)

    return response.json(feedback)
})

feedbacksRouter.get('/', (request, response) => {
    return response.send()
})

feedbacksRouter.delete('/:id', (request, response) => {
    return response.send()
})

export default feedbacksRouter