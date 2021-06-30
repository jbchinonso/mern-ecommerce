import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';


mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/amazona", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

const app = express();


app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

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