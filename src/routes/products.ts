import express, {Request, Response, Router} from "express";
export const productsRouter = Router({})

const products = [{id: 1, title: 'Product 1'}, {id: 2, title: 'Product 2'}]


productsRouter.get('/', (req: Request, res: Response) => {
    if (req.query.title) {
        let searchString = req.query.title.toString();
        res.send(products.filter(p => p.title.indexOf(searchString) > -1))
    }
    res.send(products).status(200)
})
productsRouter.get('/:t', (req: Request, res: Response) => {
    let t = products.find(p => p.title === req.params.t)
    t? res.send(t) : res.status(404).send('not found')
})
productsRouter.post('/', (req: Request, res: Response)   => {
    const lastId = products[products.length - 1]?.id   || 0
    const newId = lastId ? lastId  + 1 : 1;
    const newProduct = {id: newId, title: req.body.title}
    products.push(newProduct)

    res.status(201).send(products.filter(p => p.title === newProduct.title))
})
productsRouter.put('/:id', (req: Request, res: Response) => {
    let updatedProduct = products.find(p => p.id === Number(req.params.id))
    if (updatedProduct) {
        updatedProduct.title = req.body.title
        res.send(updatedProduct).status( 201)
    } else {
        res.status(404).send('not found')
    }
})
productsRouter.delete('/:id', (req: Request, res: Response) => {
    for (let i = 0; i < products.length; i++) {
        if (products[i]?.id === Number(req.params.id)) {
            products.splice(i, 1)
            res.sendStatus(204)
            return;
        }
    }
})