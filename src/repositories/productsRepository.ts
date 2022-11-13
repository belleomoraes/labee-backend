import connection from "../database/db.js";
import {Product} from "../protocols/Products.js"

async function getProductsData() {
    const productsData = `SELECT 
	products.id, 
	products.name,  
	products.price, 
	producttype.name AS type, 
	products.stock
	FROM products 
	JOIN producttype ON products.typeid = producttype.id 
	GROUP BY products.typeid, products.id, producttype.name`
    return connection.query(productsData)
}

async function getProductsDataByType(productType) {
    const productsData = `SELECT 
	products.id, 
	products.name,  
	products.price, 
	producttype.name AS type, 
	products.stock
	FROM products 
	JOIN producttype ON products.typeid = producttype.id 
    WHERE producttype.name = $1
	GROUP BY products.typeid, products.id, producttype.name
    `
    return connection.query(productsData, [productType])
}


const productsRepository = {
    getProductsData, 
    getProductsDataByType
}

export {productsRepository}


