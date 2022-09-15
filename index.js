import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postRouter from './routes/posts.js'
import accountRouter from './routes/account.js'
import 'dotenv/config'

const port = 3300;
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.text())

app.use('/posts', postRouter)
app.use('/account', accountRouter)

app.get('/', (req, res) => {
    res.send("connected to the server")
})

mongoose.connect(process.env.DB_CONNECTION)
app.listen(process.env.PORT || port)
