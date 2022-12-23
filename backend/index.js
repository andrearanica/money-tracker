import express, { application } from 'express'
import movementsRoutes from './routes/movements.js'
import cors from 'cors';
import mongoose from 'mongoose'

import bodyParser from 'body-parser';

mongoose.set('strictQuery', false);

const app = express()
const PORT = 3000

app.use('/movements', movementsRoutes)
app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect('mongodb://localhost:27017/movements')
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${ PORT }`)
    })
})
.catch(error => console.log(error))