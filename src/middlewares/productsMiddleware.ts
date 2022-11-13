import { NextFunction, Request, Response } from "express";
import { productsRepository } from "../repositories/productsRepository.js";
import { productSchema } from "../schemas/productSchema.js";
import { ProductBrandName, ProductTypeName } from "../protocols/Products";

import Joi from "joi";

async function checkTypeExistance(req: Request, res: Response, next: NextFunction) {
  console.log("entrei");
  const { typeName } = req.body as ProductTypeName;

  const typeProduct: ProductTypeName[] = await productsRepository.getProductType({ typeName });

  try {
    if (typeProduct.length === 0) {
      await productsRepository.insertProductType({ typeName });
      return;
    }

    next();
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function checkBrandExistance(req: Request, res: Response, next: NextFunction) {
  const { brandName } = req.body as ProductBrandName;

  const brandProduct: ProductBrandName[] = await productsRepository.getProductBrand({ brandName });

  try {
    if (brandProduct.length === 0) {
      await productsRepository.insertProductBrand({ brandName });
      return;
    }

    next();
  } catch (error) {
    res.status(500).send(error.message);
  }
}

function validateProductSchema(req: Request, res: Response, next: NextFunction) {
  const validation: Joi.ValidationResult<string[]> = productSchema.validate(req.body, {
    abortEarly: false,
  });

  try {
    if (validation.error) {
      return res.status(422).send({ message: validation.error.message });
    }

    next();
  } catch (error) {
    res.status(500).send(error.message);
  }
}
export { checkBrandExistance, checkTypeExistance, validateProductSchema };
