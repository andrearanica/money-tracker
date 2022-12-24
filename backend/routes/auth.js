import express from 'express'
import { login, register } from '../controllers/auth.js'

const router = express.Router()
router.get('/', login)
router.post('/', register)

export default router