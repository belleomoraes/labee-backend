import joi from 'joi';
import { NextFunction, Request, Response } from "express";

const productSchema = joi.object({
    name: joi.string().trim().required(),
    description: joi.string().trim().required(), 
    brandName: joi.string().trim().required(), 
    expirationDate: joi.date() || joi.string,
    typeName: joi.string().trim().required(), 
    stock: joi.number()
  });
  
  
  
  export {productSchema};