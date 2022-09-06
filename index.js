import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postRouter from './routes/posts.js'
import 'dotenv/config'

const port = 3300;

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.text())
app.use('/posts', postRouter)
app.get('/', (req, res) => {
    res.send("connected to the server")
})

app.get('/hello', (req, res) => {
    res.send("connected to the server and says hello")
})
mongoose.connect("mongodb+srv://jglyshaw:J1j2j3j4!@cart.vbdaony.mongodb.net/test")

app.listen(process.env.PORT || port)
