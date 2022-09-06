import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postRouter from './routes/posts.js'
import 'dotenv/config'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.text())
app.use('/posts', postRouter)

mongoose.connect(process.env.DB_CONNECTION)

app.listen(3300)
