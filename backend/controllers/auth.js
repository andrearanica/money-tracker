import { User } from '../models/user.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const login = async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (!user) {
        res.state(404).json({ message: 'User not found' })
    }

    if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({
            id: user._id,
            email: user.email
        }, 'ciao')
        return res.status(200).send(token)
    }

    res.status(401).json({ message: 'Username or password wrong' })
}

export const register = async (req, res) => {
    const { email, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 15)
    const user = new User({ email: email, password: hashedPassword })

    try {
        await user.save()
        res.status(201).json(user)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}