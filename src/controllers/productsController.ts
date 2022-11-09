import {Request, Response} from 'express'
import { Product } from '../protocols/Products'

const products = [{
    name: "Centrífuga de placa",
    type: "Equipamento",
    price: "4000"
}, {
    name: "Centrífuga de tubo",
    type: "Equipamento",
    price: "4000"
}, {
    name: "Centrífuga refrigerada",
    type: "Equipamento",
    price: "4000"
}, {
    name: "Enzima PCR",
    type: "Reagente",
    price: "200"
}, {
    name: "Tampão PCR",
    type: "Reagente",
    price: "200"
}, {
    name: "dNTP",
    type: "Reagente",
    price: "300"
}, {
    name: "Tubo falcon",
    type: "Plástico",
    price: "40"
},
{
    name: "Pipeta pasteur",
    type: "Plástico",
    price: "30"
}, {
    name: "Eppendorf",
    type: "Plástico",
    price: "30"
}, {
    name: "Erlenmayer",
    type: "Vidraria",
    price: "200"
}, {
    name: "Proveta",
    type: "Vidraria",
    price: "100"
}, , {
    name: "Becker",
    type: "Vidraria",
    price: "300"
}]


// function insertProduct (req: Request, res: Response) {
// const {name, email, password} = req.body as User

// }

// function deleteProduct (req: Request, res: Response) {
//     const {email, password} = req.body as User
// }

// function finishPurchase (req: Request, res: Response) {
//     const {email, password} = req.body as User
// }

function getFilteredProduct (req: Request, res: Response) {
    const {type, name} = req.query as Product
}


export {
    // insertProduct,
    // deleteProduct,
    // finishPurchase,
    getFilteredProduct

}