import { QueryResult } from "pg";
import connection from "../database/db.js";
import {
  Product,
  ProductEntity,
  ProductBrandName,
  ProductTypeName,
  ProductName,
  Id,
  ProductStock,
} from "../protocols/Products.js";

async function insertNewProduct(newProduct: Product): Promise<QueryResult<ProductEntity>> {
  const brandId: QueryResult<Id> = await connection.query("SELECT id FROM brands WHERE name = $1", [
    newProduct.brandName,
  ]);
  const typeId: QueryResult<Id> = await connection.query(
    "SELECT id FROM producttype WHERE name = $1",
    [newProduct.typeName]
  );

  const insertQuery: string =
    "INSERT INTO products (name, description, brandid, expirationdate, typeid, stock) VALUES ($1, $2, $3, $4, $5, $6)";

  return connection.query(insertQuery, [
    newProduct.name,
    newProduct.description,
    brandId.rows[0].id,
    newProduct.expirationDate,
    typeId.rows[0].id,
    newProduct.stock,
  ]);
}

async function getProductBrand({ brandName }: ProductBrandName) {
  const brand: QueryResult<ProductBrandName> = await connection.query(
    "SELECT name FROM brands WHERE name = $1",
    [brandName]
  );

  return brand.rows;
}

async function getProductType({ typeName }: ProductTypeName) {
  const typeProduct: QueryResult<ProductTypeName> = await connection.query(
    "SELECT name FROM producttype WHERE name = $1",
    [typeName]
  );
  return typeProduct.rows;
}

async function insertProductBrand({
  brandName,
}: ProductBrandName): Promise<QueryResult<ProductEntity>> {
  const insertQuery: string = `INSERT INTO brands (name) VALUES ($1)`;
  return connection.query(insertQuery, [brandName]);
}

async function insertProductType({
  typeName,
}: ProductTypeName): Promise<QueryResult<ProductEntity>> {
  
  const insertQuery: string = `INSERT INTO producttype (name) VALUES ($1)`;
  return connection.query(insertQuery, [typeName]);
}

async function getProductsData(): Promise<QueryResult<ProductEntity>> {
  const productsData: string = `SELECT 
	products.id, 
	products.name,  
    products.description,
	producttype.name AS type, 
	brands.name AS brand,
	products.stock
	FROM products 
	JOIN producttype ON products.typeid = producttype.id 
	JOIN brands ON products.brandid = brands.id 
	GROUP BY products.typeid, products.id, producttype.name, brands.id`;
  return connection.query(productsData);
}

async function getProductsDataByType({
  typeName,
}: ProductTypeName): Promise<QueryResult<ProductEntity>> {
  const productsData: string = `SELECT 
	products.id, 
	products.name,  
	products.description, 
	producttype.name AS type, 
	brands.name AS brand,
	products.stock
	FROM products 
	JOIN producttype ON products.typeid = producttype.id 
	JOIN brands ON products.brandid = brands.id 
    WHERE producttype.name = $1
	GROUP BY products.typeid, products.id, producttype.name, brands.id
    `;
  return connection.query(productsData, [typeName]);
}

async function updateStock({ name }: ProductName): Promise<QueryResult<ProductEntity>> {
  const stock: QueryResult<ProductStock> = await connection.query(
    "SELECT stock FROM products WHERE name = $1",
    [name]
  );
  const stockUpdated: number = Number(stock.rows[0].stock) - 1;
  const updateQuery: string = `UPDATE products SET stock = $1 WHERE name = $2`;
  return connection.query(updateQuery, [stockUpdated, name]);
}

async function deleteProduct({ name }: ProductName): Promise<QueryResult<ProductEntity>> {
  const deleteQuery: string = `DELETE FROM products WHERE name = $1`;
  return connection.query(deleteQuery, [name]);
}

const productsRepository = {
  insertNewProduct,
  getProductsData,
  getProductsDataByType,
  updateStock,
  deleteProduct,
  getProductBrand,
  getProductType,
  insertProductBrand,
  insertProductType,
};

export { productsRepository };
