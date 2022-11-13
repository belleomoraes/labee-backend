import { Request, Response } from "express";
import { Product, ProductTypeName, ProductName } from "../protocols/Products";
import { productsRepository } from "../repositories/productsRepository.js";

async function insertProduct(req: Request, res: Response): Promise<void> {
  const newProduct = req.body as Product;

  try {
    await productsRepository.insertNewProduct(newProduct);

    res.sendStatus(200);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getAllProducts(req: Request, res: Response): Promise<void> {
  try {
    const allProducts = await productsRepository.getProductsData();

    res.status(200).send(allProducts.rows);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getFilteredProduct(req: Request, res: Response): Promise<void> {
  const {typeName} = req.params as ProductTypeName;
 
  try {
    const filteredProducts = await productsRepository.getProductsDataByType({typeName});
    res.status(200).send(filteredProducts.rows);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function removeProductStock(req: Request, res: Response): Promise<void> {
  const {name} = req.body as ProductName;
  try {
    await productsRepository.updateStock({name});
    res.sendStatus(200);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function deleteProduct(req: Request, res: Response): Promise<void> {
  const {name} = req.body as ProductName;

  try {
    await productsRepository.deleteProduct({name});
    res.sendStatus(200);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export { removeProductStock, deleteProduct, getFilteredProduct, getAllProducts, insertProduct };
