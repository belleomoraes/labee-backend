import { productsRepository } from '../repositories/productsRepository.js';
function getAllProducts(req, res) {
    try {
        var allProducts = productsRepository.getProductsData();
        res.status(200).send(allProducts);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}
// function deleteProduct (req: Request, res: Response) {
//     const {email, password} = req.body as User
// }
// function finishPurchase (req: Request, res: Response) {
//     const {email, password} = req.body as User
// }
function getFilteredProduct(req, res) {
    var _a = req.query, type = _a.type, name = _a.name;
}
export { 
// insertProduct,
// deleteProduct,
// finishPurchase,
getFilteredProduct, getAllProducts };
