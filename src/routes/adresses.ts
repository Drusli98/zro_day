import express, {Request, Response, Router} from "express";


export const adressesRouter = Router({});

const adresses = [{id: 1, value: 'Uliza 1'}, {id: 2, value: 'Street 2'}]

adressesRouter.get('/adresses', (_req: Request, res: Response) => res.send(adresses))
adressesRouter.get('/adresses/:id', (req: Request, res: Response) => {
    let a = adresses.find(a => a.id === Number(req.params.id))
    a ? res.send(a) : res.send(404)
})