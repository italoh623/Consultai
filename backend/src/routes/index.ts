import { Router } from 'express'

import patientsRouter from './patientsRouter'
import medicsRouter from './medicsRouter'
import archivesRouter from './archivesRouter'

const router = Router()

router.use('/patients', patientsRouter)
router.use('/medics', medicsRouter)
router.use('/archives', archivesRouter)

export default router