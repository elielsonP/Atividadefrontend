const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();
const port = 3000;


app.get('/products', (req, res) => {
    const products = [
        {id: 1, name: 'Notebook', prince: 2500},
        {id: 2, name: 'Smartphone', prince: 1500}
    ];
    res.json(products);
});

app.use(express.json());
    const products = [
    {id: 1, name: 'Notebook', prince: 2500},
    {id: 2, name: 'Smartphone', prince: 1500}
];

app.post('/products', (req, res) => {
    const newProduct = req.body;
    newProduct.id = products.length + 1;
    products.push(newProduct);
    res.status(201).json(newProduct);
});

app.listen(port, () => {
    console.log('api is running on http://localhost:${port}');
});

