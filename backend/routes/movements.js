import express from 'express'
import { getAllMovements, insertMovement, getMovementsByEmail, deleteMovement } from '../controllers/movements.js'

const router = express.Router()

router.get('/', getAllMovements)
router.get('/:email', getMovementsByEmail)
router.post('/', insertMovement)
router.delete('/:id', deleteMovement)

export default router