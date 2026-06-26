"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_1 = require("./routes/products");
const adresses_1 = require("./routes/adresses");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.send('Deploychik').status(200);
});
app.use('/products', products_1.productsRouter);
app.use('/users', adresses_1.adressesRouter);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=index.js.map