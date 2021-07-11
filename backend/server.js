import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import orderRouter from './routers/orderRouter.js';

dotenv.config();

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/amazona", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter)

app.get('/', (req, res)=>{
    res.send('Server is ready')
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) =>{
    res.status(500).send({message: err.message});
})

const port = process.env.PORT || 5000

app.listen('5000', () => {
    console.log(`served at http://localhost:${port}`);
})