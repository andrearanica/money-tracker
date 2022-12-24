import express from 'express'
import movementsRoutes from './routes/movements.js'
import usersRoutes from './routes/auth.js'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()
const PORT = process.env.port || 5000
const CONNECTION_URL = 'mongodb://localhost:27017/movements'

app.use(express.json())
app.use(cors())
app.use('/movements', movementsRoutes)
app.use('/auth', usersRoutes)

mongoose.set('strictQuery', false);
mongoose.connect(CONNECTION_URL)
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${ PORT }`)
    })
})
.catch(error => console.log(error))