import { Request, Response } from "express";
import { Product } from "../protocols/Products";
import { productsRepository } from "../repositories/productsRepository.js";

async function getAllProducts(req: Request, res: Response) {
  try {
    const allProducts = await productsRepository.getProductsData();

    res.status(200).send(allProducts.rows);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

// function deleteProduct (req: Request, res: Response) {
//     const {email, password} = req.body as User
// }

// function finishPurchase (req: Request, res: Response) {
//     const {email, password} = req.body as User
// }

async function getFilteredProduct(req: Request, res: Response) {
  const { productType } = req.params;
  console.log(productType)

  try {
    const filteredProducts = await productsRepository.getProductsDataByType(productType);
    res.status(200).send(filteredProducts.rows);
  } catch (error) {
    console.log(error)
    res.status(500).send(error.message);
  }
}

export {
  // insertProduct,
  // deleteProduct,
  // finishPurchase,
  getFilteredProduct,
  getAllProducts,
};
