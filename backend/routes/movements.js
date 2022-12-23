import express from 'express'
import { getAllMovements, addMovement } from '../controllers/movements.js'
const router = express.Router()

router.get ('/', getAllMovements)
router.post('/', addMovement)

export default router