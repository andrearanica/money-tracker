import { User } from '../models/user.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const JWT_SECRET = 'ciao'

export const login = async (req, res) => {
    const { email, password } = req.body

    console.log(`Email: ${ email }, Password: ${ password }`)

    const user = await User.findOne({ email })

    if (user) {
        if (await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({
                id: user._id,
                email: user.email
            }, JWT_SECRET)
            return res.status(200).send(token)
        } else {
            res.status(401).json({ message: 'Username or password wrong' })
        }
    } else {
        res.status(404).json({ error: 'User not found' });
    }
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