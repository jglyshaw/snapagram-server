import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cartRouter from './routes/cart.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.text())
app.use('/cart', cartRouter)

mongoose.connect('mongodb+srv://jglyshaw:J1j2j3j4!@cart.vbdaony.mongodb.net/test')

app.listen(3300)
