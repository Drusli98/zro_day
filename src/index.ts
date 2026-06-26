import express from 'express';
import {productsRouter} from "./routes/products";
import {adressesRouter} from "./routes/adresses";

const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Deploychik').status(200) ;
})
app.use('/products', productsRouter)
app.use('/users', adressesRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});