import { Router } from 'express'
import cors from 'cors'

import patientsRouter from './patientsRouter'
import medicsRouter from './medicsRouter'
import archivesRouter from './archivesRouter'
import schedulingsRouter from './schedulingsRouter'
import feedbacksRouter from './feedbacksRouter'
import medicalAppointmentsRouter from './medicalAppointmentsRouter'

const router = Router()

router.use(cors())

router.use('/patients', patientsRouter)
router.use('/medics', medicsRouter)
router.use('/schedulings', schedulingsRouter)
router.use('/medicalAppointments', medicalAppointmentsRouter)
router.use('/feedbacks', feedbacksRouter)
router.use('/archives', archivesRouter)

export default router