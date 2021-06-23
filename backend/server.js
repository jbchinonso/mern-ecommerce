import express from 'express';
import { data } from './data.js';

const app = express();


app.get('/api/products/:id', (req, res)=>{
    const id = req.params.id;
    const product = data.products.find(x => x._id === id)
    if(product){
        res.send(product)
    }else{
        res.status(404).send({message: 'Product not Found'});
    }
})

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