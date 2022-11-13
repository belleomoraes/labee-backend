import { NextFunction, Request, Response } from "express";
import { productsRepository } from "../repositories/productsRepository.js";
import { productSchema } from "../schemas/productSchema.js";
import { ProductBrandName, ProductTypeName } from "../protocols/Products";

import Joi from "joi";

async function checkTypeExistance(req: Request, res: Response, next: NextFunction) {
  const typeName = req.body as ProductTypeName;

  const typeProduct: ProductTypeName[] = await productsRepository.getProductType(typeName);

  if (typeProduct.length === 0) {
    await productsRepository.insertProductType(typeName);
    return;
  }

  next();
}

async function checkBrandExistance(req: Request, res: Response, next: NextFunction) {
  const brandName = req.body as ProductBrandName;
  const brandProduct: ProductBrandName[] = await productsRepository.getProductBrand(brandName);

  if (brandProduct.length === 0) {
    await productsRepository.insertProductBrand(brandName);
    return;
  }

  next();
}

function validateProductSchema(req: Request, res: Response, next: NextFunction) {
  const validation: Joi.ValidationResult<string[]> = productSchema.validate(req.body, {
    abortEarly: false,
  });

  if (validation.error) {
    return res.status(422).send({ message: validation.error.message });
  }

  next();
}
export { checkBrandExistance, checkTypeExistance, validateProductSchema };
