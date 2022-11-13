import connection from "../database/db.js";
import { Product } from "../protocols/Products.js";

async function insertNewProduct(name, description, brandName, expirationDate, typeName, stock) {
  console.log("entrei")
  const brandId = await connection.query("SELECT id FROM brands WHERE name = $1", [brandName]);
  const typeId = await connection.query("SELECT id FROM producttype WHERE name = $1", [typeName]);

  const insertQuery =
    "INSERT INTO products (name, description, brandId, expirationDate, typeId, stock) VALUES ($1, $2, $3, $4, $5, $6)";

  return connection.query(insertQuery, [
    name,
    description,
    brandId.rows[0].id,
    expirationDate,
    typeId.rows[0].id,
    stock,
  ]);
}

async function getProductBrand(brandName) {
  const brand = await connection.query("SELECT name FROM brands WHERE name = $1", [brandName]);
  return brand.rows;
}

async function getProductType(typeName) {
  const typeProduct = await connection.query("SELECT name FROM producttype WHERE name = $1", [typeName]);
  return typeProduct.rows;
}

async function insertProductBrand(brandName) {
  const insertQuery = `INSERT INTO producttype (name) VALUES ($1)`;
  return connection.query(insertQuery, [brandName]);
}

async function insertProductType(typeName) {
  const insertQuery = `INSERT INTO producttype (name) VALUES ($1)`;
  return connection.query(insertQuery, [typeName]);
}

async function getProductsData() {
  const productsData = `SELECT 
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

async function getProductsDataByType(productType) {
  const productsData = `SELECT 
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
  return connection.query(productsData, [productType]);
}

async function updateStock(name) {
  const stock = await connection.query("SELECT stock FROM products WHERE name = $1", [name]);
  const stockUpdated = Number(stock.rows[0].stock) - 1;
  const updateQuery = `UPDATE products SET stock = $1 WHERE name = $2`;
  return connection.query(updateQuery, [stockUpdated, name]);
}

async function deleteProduct(name) {
  const deleteQuery = `DELETE FROM products WHERE name = $1`;
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
