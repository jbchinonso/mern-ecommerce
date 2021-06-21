import express from 'express';
import { data } from './data.js';

const app = express();


app.get('/api/products', (req, res)=>{
    const {products} = data
    res.send(products)
})

app.get('/', (req, res)=>{
    res.send('Server is ready')
});

const port = process.env.PORT || 5000

app.listen('5000', () => {
    console.log(`served at http://localhost:${port}`);
})