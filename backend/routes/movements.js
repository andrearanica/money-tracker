import express from 'express'
import { getAllMovements, insertMovement, getMovementsByEmail } from '../controllers/movements.js'

const router = express.Router()

router.get('/', getAllMovements)
router.get('/:email', getMovementsByEmail)
router.post('/', insertMovement)

export default router