import { Router } from 'express'
import cors from 'cors'

import patientsRouter from './patientsRouter'
import medicsRouter from './medicsRouter'
import archivesRouter from './archivesRouter'
import schedulingsRouter from './schedulingsRouter'

const router = Router()

router.use(cors())

router.use('/patients', patientsRouter)
router.use('/schedulings', schedulingsRouter)
router.use('/medics', medicsRouter)
router.use('/archives', archivesRouter)

export default router