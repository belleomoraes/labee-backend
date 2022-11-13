import { Request, Response } from "express";
import { Product } from "../protocols/Products";
import { productsRepository } from "../repositories/productsRepository.js";

async function insertProduct(req: Request, res: Response) {
  const { name, description, brandName, expirationDate, typeName, stock } = req.body;

  try {
    await productsRepository.insertNewProduct(
      name,
      description,
      brandName,
      expirationDate,
      typeName,
      stock
    );

    res.sendStatus(200);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getAllProducts(req: Request, res: Response) {
  try {
    const allProducts = await productsRepository.getProductsData();

    res.status(200).send(allProducts.rows);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getFilteredProduct(req: Request, res: Response) {
  const { productType } = req.params;

  try {
    const filteredProducts = await productsRepository.getProductsDataByType(productType);
    res.status(200).send(filteredProducts.rows);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function removeProductStock(req: Request, res: Response) {
  const { name } = req.body;
  try {
    await productsRepository.updateStock(name);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function deleteProduct(req: Request, res: Response) {
  const { name } = req.body;

  try {
    await productsRepository.deleteProduct(name);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export { removeProductStock, deleteProduct, getFilteredProduct, getAllProducts, insertProduct };
