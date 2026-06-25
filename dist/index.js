"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = process.env.PORT || 3000;
const products = [{ id: 1, title: 'Product 1' }, { id: 2, title: 'Product 2' }];
const adresses = [{ id: 1, value: 'Uliza 1' }, { id: 2, value: 'Street 2' }];
app.get('/products', (req, res) => {
    if (req.query.title) {
        let searchString = req.query.title.toString();
        res.send(products.filter(p => p.title.indexOf(searchString) > -1));
    }
    res.send(products).status(200);
});
app.get('/products/:t', (req, res) => {
    let t = products.find(p => p.title === req.params.t);
    t ? res.send(t) : res.status(404).send('not found');
});
app.get('/adresses', (req, res) => res.send(adresses));
app.get('/adresses/:id', (req, res) => {
    let a = adresses.find(a => a.id === Number(req.params.id));
    a ? res.send(a) : res.send(404);
});
app.post('/products', (req, res) => {
    const lastId = products[products.length - 1]?.id || 0;
    const newId = lastId ? lastId + 1 : 1;
    const newProduct = { id: newId, title: req.body.title };
    products.push(newProduct);
    res.status(201).send(products.filter(p => p.title === newProduct.title));
});
app.put('/products/:id', (req, res) => {
    let updatedProduct = products.find(p => p.id === Number(req.params.id));
    if (updatedProduct) {
        updatedProduct.title = req.body.title;
        res.send(updatedProduct).status(201);
    }
    else {
        res.status(404).send('not found');
    }
});
app.delete('/products/:id', (req, res) => {
    for (let i = 0; i < products.length; i++) {
        if (products[i]?.id === Number(req.params.id)) {
            products.splice(i, 1);
            res.sendStatus(204);
            return;
        }
    }
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=index.js.map