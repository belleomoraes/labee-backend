import { NextFunction, Request, Response } from "express";
import { productsRepository } from "../repositories/productsRepository.js";

async function checkTypeExistance(req: Request, res: Response, next: NextFunction) {
  const { typeName } = req.body;

  const typeProduct = await productsRepository.getProductType(typeName);

  if (typeProduct.length === 0) {
    await productsRepository.insertProductType(typeName);
    return
  }

  next()
}

async function checkBrandExistance(req: Request, res: Response, next: NextFunction) {
  const { brandName } = req.body;
  const brandProduct = await productsRepository.getProductBrand(brandName);

  if (brandProduct.length === 0) {
    await productsRepository.insertProductBrand(brandName);
    return;
  }

  next();
}

export { checkBrandExistance, checkTypeExistance };
