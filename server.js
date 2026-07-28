const  express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
    res.send('Hello, From my Server!');
});

app.get('/profile', (req, res) => {
    res.send('This is the profile page');
});

app.get('/product', (req, res) => {
    res.json([
        { id: 1, name: 'Laptop', price: 10.99 },
        { id: 2, name: 'Mobile', price: 19.99 },
        { id: 3, name: 'Desktop', price: 5.99 }
    ]);
});

app.get('/product/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const products = [
        { id: 1, name: 'Laptop', price: 10.99 },
        { id: 2, name: 'Mobile', price: 19.99 },
        { id: 3, name: 'Desktop', price: 5.99 }
    ];
    const product = products.find(product => product.id === productId);
    res.json(product);
});