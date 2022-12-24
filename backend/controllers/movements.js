import { v4 as uuidv4 } from 'uuid';
import { Movement } from '../models/movement.js'

let movements = []

export const getAllMovements = async (req, res) => {
    try {
        const movements = await Movement.find()
        res.status(200).json(movements)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const insertMovement = async (req, res) => {
    const m = req.body
    const movement = new Movement(m)
    try {
        await movement.save()
        res.status(201).json(movement)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const getMovementsByEmail = async (req, res) => {
    const { email } = req.params
    const result = []
    try {
        const movements = await Movement.find()
        movements.map(m => {
            if (m.email == email) {
                result.push(m)
            }
        })
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}