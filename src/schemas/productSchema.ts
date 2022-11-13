import joi from 'joi';
import { NextFunction, Request, Response } from "express";

const productSchema = joi.object({
    name: joi.string().required(),
    description: joi.string().required(), 
    brandName: joi.string().required(), 
    expirationDate: joi.date() || joi.string,
    typeName: joi.string().required(), 
    stock: joi.number()
  });
  
  
  
  export {productSchema};