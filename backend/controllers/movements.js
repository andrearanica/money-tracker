import mongoose from 'mongoose'
import { Movement } from '../models/movement.js'

export const getAllMovements = async (req, res) => {
    try {
        const movements = await Movement.find()
        res.status(200).json(movements)
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
}

export const addMovement = async (req, res) => {
    const m = req.body
    console.log(m)
    const movement = new Movement(m)
    try {
        //await movement.save()
        res.status(201).json(m)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}