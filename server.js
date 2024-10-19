import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())

const users = []

app.post('/usuarios', async (req, res) => {

    await prisma.user.create({
        data: {
            email: req.body.email,
            name:  req.body.name,
            age:   req.body.age
        }
    })

    users.push(req.body)


})

app.get('/usuarios', (req, res) =>{
    res.status(200).json(users)
}) 

app.listen(3000)