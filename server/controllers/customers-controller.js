import express from 'express';
import { getAll , addCustomers } from '../bl/customers-bl.js';

const customersRouter = express.Router();

customersRouter.get('/customers', async(req, res) => {
    let result = await getAll();

    res.send(result)
})


customersRouter.post('/customers', async(req, res) => {
    let result = await addCustomers();
    const body = {req}
    res.send(result)
    console.log(req.body)
})



export {
    customersRouter
}